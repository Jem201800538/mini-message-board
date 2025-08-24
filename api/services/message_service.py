from flask import jsonify
from flask_restful import Resource

from api.controllers.message_controller import get_all_messages

class MessageService(Resource):
    def get(self):
        messages = get_all_messages()

        return jsonify(messages)