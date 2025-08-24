import logging
from api.models.messages import MessageModel

def get_all_messages():
    message_model = MessageModel()
    try:
        messages = message_model.get_messages()
        return messages
    except Exception as e:
        logging.error(f"Error retrieving messages: {e}")
        return []

def post_message(msg):
    message_model = MessageModel()
    try:
        success = message_model.add_message(msg)
        return success
    except Exception as e:
        logging.error(f"Error sending a message: {e}")
        return False