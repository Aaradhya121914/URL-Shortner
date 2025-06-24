# URL Shortener

A simple and modern URL Shortener web application built with Node.js, Express, MongoDB, and JWT authentication.

## 🚀 Features
- Shorten long URLs to easy-to-share short links
- User authentication with JWT (Sign Up & Login)
- Secure password storage
- Click tracking for each short URL
- Responsive and modern UI (Login, Signup, Home)
- Protected routes for logged-in users

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Token), Cookies
- **Frontend:** EJS Templates, CSS

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aaradhya121914/URL-Shortner.git
   cd URL-Shortner
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up MongoDB:**
   - Make sure MongoDB is running locally (default: `mongodb://127.0.0.1:27017/short-url`)
   - Or update the connection string in `index.js` as needed
4. **Start the server:**
   ```bash
   npm start
   ```
5. **Open in browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## ✨ Usage
- **Sign Up:** Create a new account
- **Login:** Access your dashboard
- **Shorten URL:** Enter a long URL and get a short link
- **Track Clicks:** See how many times your short URL was visited

## 📁 Project Structure
```
├── Controllers/
├── Middleware/
├── Models/
├── Service/
├── public/
│   └── styles/
├── routes/
├── views/
├── index.js
├── connect.js
├── package.json
└── README.md
```

## 🤝 Contributing
1. Fork this repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a Pull Request

## 📄 License
This project is licensed under the MIT License.

---

**Made with ❤️ for learning and sharing!** 