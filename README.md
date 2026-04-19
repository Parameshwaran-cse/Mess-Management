# Hostel Mess Management System - React (Refactored)

A production-ready React application for hostel mess management with clean architecture and best practices.

## 🚀 Quick Start

```bash
npm install
npm start
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Route-level pages
├── layouts/         # Layout wrappers
├── context/         # Global state
├── styles/          # CSS files
├── App.jsx          # Main app
└── main.jsx         # Entry point
```

## ✨ Features

- ✅ Clean folder structure
- ✅ Protected routes with authentication
- ✅ Reusable components (StarRating, MealSection)
- ✅ Context API for state management
- ✅ React Router v6
- ✅ Production-ready architecture

## 🎯 Pages

1. **Login** - User authentication
2. **Menu & Feedback** - Rate meals and suggest alternates
3. **Mess Info** - Timings, rules, and contact

## 🔐 Authentication

- Login sets authentication state
- Protected routes require authentication
- Logout clears state and redirects

## 📦 Tech Stack

- React 18
- React Router v6
- Context API
- CSS (no frameworks)

## 🏗️ Architecture Highlights

- **Separation of Concerns**: Pages, components, layouts separated
- **Reusability**: Common components extracted
- **Scalability**: Easy to extend with new features
- **Best Practices**: Follows React community standards

See [STRUCTURE.md](./STRUCTURE.md) for detailed architecture documentation.
