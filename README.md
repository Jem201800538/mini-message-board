# 📝 Mini Message Board

A simple web-based message board where users can post and view messages — built using **Express**, **EJS**, **Tailwind CSS**, and **MongoDB**.

---

## 🔧 Tech Stack

- **Backend:** [Express.js](https://expressjs.com/)  
- **Frontend Templating:** [EJS](https://ejs.co/)  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)

---

## 🚀 Features

- Post a new message with initials and timestamp
- Messages are stored in MongoDB
- Clean, responsive UI styled with Tailwind CSS
- Server-side rendering using EJS templates
- Random avatar background color per message

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/mini-message-board.git](https://github.com/Jem201800538/mini-message-board.git)
   cd mini-message-board
   ```
   
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   MONGODB_URI=mongodb+srv://your-connection-string
   PORT=3000
   ```

4. **Compile Tailwind CSS**
   ```bash
   npx @tailwindcss/cli -i ./src/public/css/index.css -o ./src/public/dist/styles.css --watch
   ```
   
5. **Run the server:**
   ```bash
   npm start
   ```

## 🌐 Usage
- Open your browser and visit *http://localhost:3000*
- Submit a message using the form
- See your message appear on the board with a colored avatar

