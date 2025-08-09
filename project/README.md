# Notes Saver Application

A full-stack MERN application for creating, managing, and organizing personal notes with user authentication and a beautiful UI.

## Features

- **User Authentication**: Secure signup and login system
- **Note Management**: Create, read, update, and delete notes
- **Dark/Light Theme**: Toggle between dark and light modes with persistent storage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Search & Filter**: Search through notes and sort by different criteria
- **File Actions**: Copy, share, and manage notes with intuitive actions
- **Real-time Updates**: Immediate UI updates with Redux state management

## Tech Stack

### Frontend
- React 18 with TypeScript
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons
- Axios for API calls

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT authentication
- bcrypt for password hashing
- CORS enabled

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/notes-app
   JWT_SECRET=your-super-secret-jwt-key
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the project root directory

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Usage

1. **Register/Login**: Create a new account or sign in with existing credentials
2. **Create Notes**: Use the home page form to create new notes with title and content
3. **Manage Notes**: View all notes, search, sort, and perform actions like edit, copy, share, and delete
4. **Theme Toggle**: Switch between light and dark modes using the theme toggle in the navbar
5. **Profile**: View user information and logout from the navbar

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Files/Notes
- `GET /api/files` - Get all user files
- `POST /api/files` - Create new file
- `GET /api/files/:id` - Get single file
- `PUT /api/files/:id` - Update file
- `DELETE /api/files/:id` - Delete file

## Project Structure

```
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   └── App.tsx
├── public/
└── package.json
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Created with ❤️ by Tushar Dharmik