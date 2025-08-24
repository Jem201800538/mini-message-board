from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Length

class NewMessageForm(FlaskForm):
    name = StringField(
        "Name",
        validators=[
            DataRequired(message="Enter your name first."),
            Length(max=25, message="Name must be less than 25 characters.")
        ]
    )
    text = TextAreaField(
        "Message",
        validators=[
            DataRequired(message="Message is required."),
            Length(max=500, message="Message must be less than 500 characters.")
        ]
    )