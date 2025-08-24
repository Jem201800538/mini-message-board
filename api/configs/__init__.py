import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

class Configs():
    MONGODB_URI=os.getenv('MONGODB_URI')
    SECRET_KEY=os.getenv('SECRET_KEY')
    SESSION_SECRET=os.getenv('SESSION_SECRET')

    # Flask-Session configs
    SESSION_TYPE = "mongodb"
    SESSION_MONGODB = MongoClient(MONGODB_URI)  
    SESSION_MONGODB_DB = "mini_message_board"           
    SESSION_MONGODB_COLLECT = "sessions" 

    # 30 days in seconds
    PERMANENT_SESSION_LIFETIME = 60 * 60 * 24 * 30 

    # Cookie settings
    SESSION_PERMANENT = True
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_SAMESITE = "Lax"