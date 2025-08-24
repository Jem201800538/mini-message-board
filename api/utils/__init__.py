from random import random
from datetime import datetime


def generate_color():
    colors = [
        "bg-blue-500",
        "bg-green-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-yellow-500",
        "bg-indigo-500",
        "bg-red-500",
        "bg-teal-500",
    ]

    index = int(random() * len(colors))

    return colors[index]
    

def format_date(date):
    if isinstance(date, str):
        try:
            date = datetime.fromisoformat(date)
        except ValueError:
            return date 
    elif not isinstance(date, datetime):
        return date 

    return date.strftime("%b %d, %Y, %I:%M %p")


def get_initials(name):
  return "".join(word[0] for word in name.split() if word).upper()[:2]
