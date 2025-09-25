# backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict in production
    allow_methods=["*"],
    allow_headers=["*"]
)

SMTP_HOST = os.getenv("SMTP_HOST", "smtp.zoho.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 465))
SMTP_USER = os.getenv("NO_REPLY_EMAIL")           # no-reply@yourdomain.com
SMTP_PASS = os.getenv("NO_REPLY_PASSWORD")        # app password if 2FA
OWNER_EMAIL = os.getenv("OWNER_EMAIL")            # your personal email

class Contact(BaseModel):
    name: str
    email: EmailStr
    message: str

def send_mail(from_addr, to_addr, subject, body, reply_to=None):
    msg = MIMEMultipart()
    msg["From"] = from_addr
    msg["To"] = to_addr
    msg["Subject"] = subject
    if reply_to:
        msg["Reply-To"] = reply_to
    msg.attach(MIMEText(body, "plain", "utf-8"))

    # Use SSL
    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(from_addr, to_addr, msg.as_string())

@app.post("/send-email")
async def handle_contact(c: Contact):
    # 1) send notification to owner (Reply-To = visitor email)
    owner_subject = f"Contact form: {c.name} <{c.email}>"
    owner_body = f"Name: {c.name}\nEmail: {c.email}\n\nMessage:\n{c.message}"
    try:
        send_mail(SMTP_USER, OWNER_EMAIL, owner_subject, owner_body, reply_to=c.email)
    except Exception as e:
        return {"status":"error", "message":f"owner-email-failed: {e}"}

    # 2) send acknowledgement to user (no-reply as from)
    ack_subject = "Thanks — we received your message"
    ack_body = (
        f"Hi {c.name},\n\n"
        "Thanks for reaching out. We got your message and will respond if needed.\n\n"
        "Please note: this mailbox is not monitored. Do not reply to this email.\n\n"
        "— Parv Gheewala"
    )
    try:
        send_mail(SMTP_USER, c.email, ack_subject, ack_body)
    except Exception as e:
        # The ownerEmail already sent; return partial success
        return {"status":"warning", "message":f"ack-failed: {e}"}

    return {"status":"ok", "message":"sent"}
