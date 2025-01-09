# AttendanceHub

AttendanceHub is a comprehensive attendance management system designed to streamline the process of tracking employee attendance. The system includes both a backend and a frontend, providing a complete solution for managing attendance records, employee information, and user authentication.

[Live link](https://attendancehub-client.onrender.com/)

Login Details:

For Admin rights(dashboard access) use:

ID: 182870
password: johndoe

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User authentication and authorization
- Role-based access control
- Employee management
- Attendance tracking (check-in and check-out)
- Attendance filtering by date
- Password reset functionality
- Email notifications for onboarding and password reset

## Technologies Used

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- nodemailer for sending emails


### Frontend

- React
- React Router
- Tailwind CSS
- Material Tailwind
- Axios for HTTP requests


## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- MongoDB

### Installation

1. Clone the repository:

```sh
git clone https://github.com/Luwa-Tech/AttendanceHub.git
cd attendancehub
```
2. Install dependencies:

```
yarn install
```

3. Set up environment variables:

```
DB_URL=your_mongodb_connection_string
ACCESS_KEY=your_jwt_secret_key
USER_EMAIL=your_email_address
APP_PASS=your_email_app_password
CLIENT_URL=http://localhost:5173
PORT=your_backend_port
NODE_ENV=your_environment
```

### Running the application

1. Seed database:

```
yarn backend:seed
```

2. Start the backend server:

```
yarn backend
```

3. Start the frontend development server:

```
yarn frontend
```

4. To run both servers concurrently:

```
yarn start
```

## API Endpoints

### Authentication

- `POST /register` - Register a new employee
- `POST /login` - Login an employee
- `POST /logout` - Logout an employee
- `POST /generate-reset-token` - Generate a password reset token
- `POST /reset-password/:token` - Reset password using the token

### Employee

- `GET /api/v1/employee/get-employee` - Get details of a specific employee
- `GET /api/v1/employee/get-all-employees` - Get details of all employees

### Attendance

- `GET /api/v1/attendance/check` - Get existing attendance record for the current day
- `GET /api/v1/attendance/current` - Get attendance records for the current day
- `GET /api/v1/attendance/filter-by-date` - Get attendance records filtered by date
- `POST /api/v1/attendance/check-in` - Check-in attendance
- `PUT /api/v1/attendance/check-ou`t - Check-out attendance

## license

This project is licensed under the MIT License. See the License file for details.
