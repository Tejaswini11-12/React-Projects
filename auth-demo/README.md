# 🔐 Demo Auth

A simple React authentication demo built to understand authentication state management, protected routes, navigation, and conditional rendering in React.

This project demonstrates how a user can log in, access a protected dashboard, and log out using React Context API and React Router.

## 🚀 Features

- 🔐 Simple login functionality
- 🏠 Home page
- 📊 Protected dashboard
- 🚪 Logout functionality
- 🛡️ Protected routes using a custom `RequireAuth` component
- 🧠 Authentication state management using React Context API
- 🧭 Client-side routing using React Router
- ❌ Custom 404 / Not Found page
- 📱 Responsive and simple user interface

## 🛠️ Tech Stack

- **React**
- **Vite**
- **React Router DOM**
- **Context API**
- **JavaScript**
- **CSS**

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   └── Requireauth.jsx
│
├── context/
│   └── Authcontext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── Notfound.jsx
│
├── App.jsx
├── App.css
└── main.jsx