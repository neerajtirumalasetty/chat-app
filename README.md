# 💬 ChatApp - Real-Time Chat Application

A modern, real-time chat application built with React and Node.js featuring instant messaging, user authentication, and a beautiful dark-themed interface.

![ChatApp Preview](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=ChatApp+Preview)

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based login/signup system
- 💬 **Real-Time Messaging** - Instant messaging using Socket.IO
- 👥 **User Discovery** - Search and find other users
- 🟢 **Online Status** - See who's currently online
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎨 **Modern UI** - Beautiful dark theme with glassmorphism effects
- 🔒 **Secure** - Password encryption and protected routes

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool
- **Socket.IO Client** - Real-time communication
- **React Router** - Client-side routing
- **Zustand** - State management
- **React Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Secure authentication
- **bcryptjs** - Password hashing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Chat-App
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGO_DB_URI=mongodb://localhost:27017/chat-app
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

5. **Start the application**
   
   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm start
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000 (or the port shown in terminal)
   - Backend: http://localhost:5000

## 🎯 Usage

1. **Create Account**: Sign up with your details
2. **Login**: Use your credentials to sign in
3. **Find Users**: Use the search bar to find other users
4. **Start Chatting**: Click on a user to start a conversation
5. **Send Messages**: Type and send messages in real-time

## 🚀 Deployment

### Option 1: Deploy to Vercel (Frontend) + Railway/Render (Backend)

**Frontend (Vercel):**
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Set build command: `cd frontend && npm run build`
4. Set output directory: `frontend/dist`

**Backend (Railway/Render):**
1. Connect your GitHub repo
2. Set build command: `cd backend && npm install`
3. Set start command: `cd backend && npm start`
4. Add environment variables in the dashboard

### Option 2: Deploy to Heroku

1. **Install Heroku CLI**
2. **Create Heroku apps:**
   ```bash
   # For backend
   heroku create your-chat-app-backend
   
   # For frontend
   heroku create your-chat-app-frontend
   ```

3. **Deploy backend:**
   ```bash
   cd backend
   git subtree push --prefix backend heroku main
   ```

4. **Deploy frontend:**
   ```bash
   cd frontend
   git subtree push --prefix frontend heroku main
   ```

### Option 3: Deploy to Netlify (Frontend) + Railway (Backend)

**Frontend (Netlify):**
1. Connect GitHub repo to Netlify
2. Build command: `cd frontend && npm run build`
3. Publish directory: `frontend/dist`

**Backend (Railway):**
1. Connect GitHub repo to Railway
2. Set root directory to `backend`
3. Add environment variables

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_DB_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_secure
```

### MongoDB Setup

**Local MongoDB:**
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/chat-app`

**MongoDB Atlas (Cloud):**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Get connection string
4. Replace in `.env` file

## 📱 Features in Detail

### Authentication
- Secure user registration and login
- JWT token-based authentication
- Password encryption with bcryptjs
- Protected routes and middleware

### Real-Time Messaging
- Instant message delivery using Socket.IO
- Message history persistence
- Online/offline user status
- Message timestamps

### User Interface
- Modern dark theme
- Responsive design
- Smooth animations
- Intuitive navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Socket.IO for real-time communication
- MongoDB for the database
- All the open-source contributors

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**Happy Chatting! 🎉**
