import os
from dotenv import load_dotenv

load_dotenv()

class Configs():
    MONGODB_URI=os.getenv('MONGODB_URI')
    SECRET_KEY=os.getenv('SECRET_KEY')
    SESSION_SECRET=os.getenv('SESSION_SECRET')

    SESSION_PERMANENT = True
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_SAMESITE = "Lax"