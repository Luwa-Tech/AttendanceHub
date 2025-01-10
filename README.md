# AttendanceHub

AttendanceHub is a comprehensive attendance management system designed to streamline the process of tracking employee attendance. Inspired by real-world challenges faced in a refinery setting, this system aims to solve common issues such as misplaced paper records, fraudulent check-ins, and inconsistent attendance tracking. By leveraging a digital platform, AttendanceHub ensures accurate and reliable attendance management, enhancing overall efficiency and accountability.

## Business Case:

This project was inspired by my previous experience as a supervisor/time-keeper at a refinery, where I was responsible for managing employee attendance and coordination. Despite the positive aspects of the job, several challenges made the attendance system inconsistent and frustrating. These challenges included:

- Paper-based records: Attendance sheets were often misplaced or torn due to employee crowding.
- Fraudulent check-ins: Employees would check-in for absent colleagues or check-in without being present at their workstations.
- Simultaneous check-ins and check-outs: Some employees would exploit the crowded area to check-in and out simultaneously with different times.

To address these issues, AttendanceHub replaces paper records with a secure database, preventing the loss or damage of records. The system also includes features such as user authentication, role-based access control, and real-time attendance tracking to ensure accurate and reliable attendance management.

### MVP Approach: 
This project was developed using the Minimum Viable Product (MVP) approach. The current version includes core features to address the primary challenges faced in attendance management of the refinery. While the user interface (UI) may not be the best, it serves its purpose as an MVP. Based on user feedback, additional features and improvements will be added in future updates to enhance the overall user experience and functionality.

## Testing:

[Live link](https://attendancehub-client.onrender.com/)

Login Details: For Admin rights(dashboard access) use
```
ID: 182870
password: johndoe
```

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
