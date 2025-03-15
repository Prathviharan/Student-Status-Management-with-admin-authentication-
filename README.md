# Student-Status-Management-with-admin-authentication

This is a **MERN Stack** project that provides an **Admin Dashboard** for managing students. The admin can perform CRUD operations on students, including adding, viewing, editing, and deleting student details. The application also allows admin authentication via **Google Authentication** and **username/password**.

## Features

- **Admin Authentication**
  - Login and Register using username & password.
  - Google Authentication integration for login.

- **Student CRUD Operations**
  - **Add** new students.
  - **View** added students in a table.
  - **Edit**/Modify student details.
  - **Delete** students with a confirmation prompt.
  
- **Student Status Management**
  - Admin can change the student status to **Active** or **Inactive**.

## Tech Stack

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Google OAuth, Username & Password
- **State Management**: React State (useState, useEffect)
- **API Client**: Axios

## Installation Guide

### Backend

1. Clone the repository:
   - git clone <repo-url>
   - cd <repo-name>

2. Install dependencies:
- npm install

3. Start the backend server:
- npm start

### Frontend
1. Navigate to the frontend folder:
- cd client

2. Install frontend dependencies:
- npm install

3. Start the frontend server:
- npm start

### configure a .env file in the backend folder with the following variables:
- MONGO_URI=<your-mongodb-uri>
- GOOGLE_CLIENT_ID=<your-google-client-id>
- GOOGLE_CLIENT_SECRET=<your-google-client-secret>
- JWT_SECRET=<your-session-secret>
