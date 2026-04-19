# Frontend-Backend Integration Setup

## Prerequisites
- Node.js installed
- MongoDB running locally on port 27017

## Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a test user (run seed script or register manually):
```bash
npm run seed
```

4. Start the backend server:
```bash
npm run dev
```
Backend will run on http://localhost:5000

## Frontend Setup

1. Navigate to react-mess-management directory:
```bash
cd react-mess-management
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the React app:
```bash
npm start
```
Frontend will run on http://localhost:3000

## Testing the Integration

1. **Login**: Use credentials from the seeded database or register a new user
   - Default test user (if seed script exists): username/password

2. **Menu Feedback**: 
   - Rate food items with stars
   - Select alternates for each meal
   - Submit feedback (will be saved to MongoDB)

3. **Logout**: Click logout to clear session

## API Endpoints Used

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/feedback/submit` - Submit feedback (requires auth)
- `GET /api/menu/all` - Get all menus
- `GET /api/feedback/all` - Get all feedback (requires auth)

## Features Implemented

✅ JWT token authentication
✅ Token storage in localStorage
✅ Protected routes with authentication check
✅ API service layer for all backend calls
✅ Error handling and loading states
✅ Automatic token inclusion in authenticated requests
✅ Feedback submission to backend
✅ User session persistence across page refreshes

## Environment Variables

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000/api
```

Backend (.env):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mess-management
JWT_SECRET=your_jwt_secret_key_here_change_in_production
```
