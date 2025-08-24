# 📝 Mini Message Board

A simple web-based message board where users can post and view messages — built using **Flask**, **Jinja2**, **Tailwind CSS**, and **MongoDB**.

---

## 🔧 Tech Stack

- **Backend:** [Flask](https://flask.palletsprojects.com/) with [Flask-WTF](https://flask-wtf.readthedocs.io/) and sessions
- **Frontend Templating:** [Jinja2](https://jinja.palletsprojects.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with [PyMongo](https://pymongo.readthedocs.io/)

---

## 🚀 Features

- Clean, responsive UI styled with Tailwind CSS
- Server-side rendering using Jinja2 templates
- Random avatar background color per message
- Flash messages for errors and feedback
- CSRF protection via Flask-WTF

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jem201800538/mini-message-board.git
   cd mini-message-board
   ```
2. **Create and activate a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```bash
   npm install
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**

   - Create a .env file in the root directory and add your environment variables:

   ```bash
   FLASK_APP=app.py
   FLASK_ENV=development
   MONGODB_URI="mongodb+srv://your-connection-string"
   SECRET_KEY="YOUR_SECRET"
   ```

5. **Run the development server:**
   ```bash
   flask run
   ```

## 🌐 Usage

- Open your browser and visit [http://localhost:5000](http://localhost:5000)

### **Compile and Watch Tailwind CSS**

```bash
npx @tailwindcss/cli -i ./api/static/css/index.css -o ./api/static/dist/styles.css --watch
```
