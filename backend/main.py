# backend/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os, smtplib, ssl
from email.message import EmailMessage
from pathlib import Path

# Try multiple .env loading strategies
def load_env_file():
    # Strategy 1: Current directory
    if load_dotenv(".env"):
        print("✅ Loaded .env from current directory")
        return
    
    # Strategy 2: Parent directory (if running from backend/)
    parent_env = Path(__file__).parent.parent / ".env"
    if parent_env.exists() and load_dotenv(parent_env):
        print(f"✅ Loaded .env from {parent_env}")
        return
    
    # Strategy 3: Same directory as main.py
    local_env = Path(__file__).parent / ".env"
    if local_env.exists() and load_dotenv(local_env):
        print(f"✅ Loaded .env from {local_env}")
        return
    
    print("⚠️ No .env file found, using system environment variables")

load_env_file()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

SMTP_HOST = os.getenv("SMTP_HOST", "smtp-relay.brevo.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "465"))
SMTP_USER = os.getenv("SMTP_USERNAME")  # Your Brevo SMTP login
SMTP_PASS = os.getenv("NO_REPLY_PASSWORD")  # Your Brevo SMTP key
FROM_EMAIL = os.getenv("NO_REPLY_EMAIL")  # Your custom domain email
OWNER_EMAIL = os.getenv("OWNER_EMAIL")

# Debug: Print loaded variables
print(f"SMTP_HOST: {SMTP_HOST}")
print(f"SMTP_PORT: {SMTP_PORT}")
print(f"SMTP_USER: {SMTP_USER}")
print(f"FROM_EMAIL: {FROM_EMAIL}")
print(f"OWNER_EMAIL: {OWNER_EMAIL}")

# Guard: fail fast if missing config
missing = [k for k,v in {
    "SMTP_USERNAME": SMTP_USER,
    "NO_REPLY_PASSWORD": SMTP_PASS,
    "NO_REPLY_EMAIL": FROM_EMAIL,
    "OWNER_EMAIL": OWNER_EMAIL,
}.items() if not v]
if missing:
    raise RuntimeError(f"Missing required env vars: {', '.join(missing)}")

class Contact(BaseModel):
    name: str
    email: EmailStr
    message: str

def send_mail(from_addr: str, to_addr: str, subject: str, body: str, reply_to: str|None=None):
    msg = EmailMessage()
    msg["From"] = from_addr
    msg["To"] = to_addr
    msg["Subject"] = subject
    if reply_to:
        msg["Reply-To"] = reply_to
    msg.set_content(body)

    if SMTP_PORT == 465:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, context=ssl.create_default_context(), timeout=20) as server:
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
    else:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=20) as server:
            server.ehlo()
            server.starttls(context=ssl.create_default_context())
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)

@app.post("/send-email")
async def handle_contact(c: Contact):
    try:
        # 1) notify owner
        subject_owner = f"Contact form: {c.name} <{c.email}>"
        body_owner = f"Name: {c.name}\nEmail: {c.email}\n\nMessage:\n{c.message}"
        send_mail(FROM_EMAIL, OWNER_EMAIL, subject_owner, body_owner, reply_to=str(c.email))
    except smtplib.SMTPAuthenticationError as e:
        raise HTTPException(status_code=500, detail="SMTP auth failed — check SMTP_USERNAME/NO_REPLY_PASSWORD, host/port, and Brevo SMTP key.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"owner-email-failed: {e}")

    try:
        # 2) ack to visitor
        subject_ack = "Thanks — we received your message"
        body_ack = (
            f"Hi {c.name},\n\n"
            "Thanks for reaching out. We got your message and will respond if needed.\n\n"
            "Please note: this mailbox is not monitored. Do not reply to this email.\n\n"
            "— Parv Gheewala"
        )
        send_mail(FROM_EMAIL, str(c.email), subject_ack, body_ack)
    except Exception as e:
        return {"status":"warning", "message":f"ack-failed: {e}"}

    return {"status":"ok", "message":"sent"}
