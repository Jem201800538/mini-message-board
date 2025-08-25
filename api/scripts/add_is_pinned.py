import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

client = MongoClient(os.getenv("MONGODB_URI"))
database = client.get_database("mini_message_board")
collection = database.get_collection("messages")

def add_is_pinned():
    try:
        result = collection.update_many(
            {}, 
            {"$set": {"is_pinned": False}}
        )
        print(f"Matched: {result.matched_count}")
        print(f"Modified: {result.modified_count}")

    except Exception as e:
        raise Exception(f"Unable to update messages: {e}")
    

add_is_pinned()