# test_ssl.py
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import ssl
from dotenv import load_dotenv

load_dotenv()

def test_smtp_ssl():
    print("Testing SMTP with SSL (Port 465)...")
    
    try:
        # Try SSL connection (port 465)
        context = ssl.create_default_context()
        server = smtplib.SMTP_SSL('smtp-relay.brevo.com', 465, context=context)
        
        # Login
        server.login(os.getenv('SMTP_USERNAME'), os.getenv('NO_REPLY_PASSWORD'))
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = os.getenv('NO_REPLY_EMAIL')
        msg['To'] = os.getenv('OWNER_EMAIL')
        msg['Subject'] = "Test Email - SSL Port 465"
        
        body = "This is a test email using SSL port 465."
        msg.attach(MIMEText(body, 'plain'))
        
        # Send
        server.send_message(msg)
        server.quit()
        
        print("✅ SSL Test successful!")
        return True
        
    except Exception as e:
        print(f"❌ SSL Test failed: {e}")
        return False

def test_smtp_tls():
    print("Testing SMTP with TLS (Port 587)...")
    
    try:
        # Try TLS connection (port 587)
        server = smtplib.SMTP('smtp-relay.brevo.com', 587)
        server.starttls()
        
        # Login
        server.login(os.getenv('SMTP_USERNAME'), os.getenv('NO_REPLY_PASSWORD'))
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = os.getenv('NO_REPLY_EMAIL')
        msg['To'] = os.getenv('OWNER_EMAIL')
        msg['Subject'] = "Test Email - TLS Port 587"
        
        body = "This is a test email using TLS port 587."
        msg.attach(MIMEText(body, 'plain'))
        
        # Send
        server.send_message(msg)
        server.quit()
        
        print("✅ TLS Test successful!")
        return True
        
    except Exception as e:
        print(f"❌ TLS Test failed: {e}")
        return False

if __name__ == "__main__":
    # Test both methods
    ssl_success = test_smtp_ssl()
    if not ssl_success:
        test_smtp_tls()
