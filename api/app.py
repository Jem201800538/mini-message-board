from flask import Flask, flash, redirect, render_template,  session, url_for
from flask_cors import CORS
from flask_restful import Api
from api.configs import Configs
from api.middlewares.validate_form import NewMessageForm
from api.services.message_service import MessageService
from api.utils import format_date, generate_color, get_initials
from api.controllers.message_controller import get_all_messages, post_message

app = Flask(__name__)
app.config.from_object(Configs)

app.jinja_env.globals.update(format_date=format_date)
app.jinja_env.globals.update(generate_color=generate_color)

CORS(app)
api = Api(app)

api.add_resource(MessageService, "/api/messages")

@app.route("/")
def index():
    messages = get_all_messages()
    return render_template(
        "index.html", 
        title="Mini Message Board", 
        messages=messages
    )

@app.route("/new", methods=["GET", "POST"])
def new_message():
    form = NewMessageForm()

    if form.validate_on_submit():  
        name = form.name.data.strip()
        text = form.text.data.strip()

        new_message = {
            "user": name,
            "text": text,
            "initials": get_initials(name)
        }

        success = post_message(new_message)
        if success:
            session["user"] = name  

        return redirect(url_for("index"))
    
    if form.errors:  
        for field, errors in form.errors.items():
            for error in errors:
                flash(f"{error}", "error")


    return render_template(
        "new_message.html",
        title="New Message",
        form=form,  
        user=session.get("user", "")
    )