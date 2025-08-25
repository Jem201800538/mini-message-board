from typing import Any, Dict
from pymongo import MongoClient
from api.configs import Configs

class MessageModel():
    def __init__(self):
        self.client = MongoClient(Configs.MONGODB_URI)
        self.database = self.client.get_database('mini_message_board')
        self.collection = self.database.get_collection('messages')
    
    def get_messages(self):
        try:
            messages = list(self.collection.find())
            for msg in messages:
                msg["_id"] = str(msg["_id"])
            return messages
        except Exception as e:
            raise Exception(f"Unable to retrieve messages: {e}")
        
    def get_pinned_messages(self):
        try:
            pinned_messages = list(self.collection
                                   .find({ "is_pinned": True })
                                   .sort({ "createdAt": -1 })
                            )
            return pinned_messages
        except Exception as e:
            raise Exception(f"Unable to retrieve pinned messages: {e}")
        
    def add_message(self, message: Dict[str, Any]):
        try:
            result = self.collection.insert_one(message)
            return result.inserted_id is not None
        except Exception as e:
            raise Exception(f"Unable to send message: {e}") 
