# StayEase - Hostel & PG Management 

StayEase is a full-stack MERN-based Hostel and PG Management System designed to help hostel owners, PG managers, staff members, and students manage day-to-day operations from a single dashboard.

The platform provides role-based dashboards for Admin, Staff, and Students with features such as room allocation, fee management, complaint tracking, attendance, visitor logs, notices, inventory, maintenance tasks, reports, and audit logs.

---

## 🚀 Project Overview

Managing a hostel or PG manually can be difficult because owners have to handle rooms, tenants, rent payments, complaints, visitors, staff tasks, and records separately.

StayEase solves this problem by providing a centralized web-based system where:

- Admins can manage the entire hostel/PG.
- Staff can handle operational tasks.
- Students can view their own details, fees, complaints, attendance, and notices.

This project is built as a product-level full-stack application and can be used as an internship, final-year, or portfolio project.

---

## ✨ Key Features

### 👨‍💼 Admin Features

- Admin dashboard with analytics
- Manage rooms and beds
- Add, update, and delete students
- Assign students to rooms
- Generate monthly fees
- Mark fees as paid
- Download fee receipts
- Export fee records
- Manage complaints
- Manage attendance
- Manage visitors
- Publish notices
- Manage inventory/assets
- Manage maintenance tasks
- Track hostel expenses
- View reports
- View audit logs

---

### 🧑‍🔧 Staff Features

- Staff dashboard
- View rooms and students
- Manage complaints
- Update complaint status
- Mark attendance
- Handle visitor check-in/check-out
- Manage maintenance tasks
- View notices
- Assist with fee updates based on permission

---

### 👨‍🎓 Student Features

- Student dashboard
- View personal profile
- View assigned room details
- View fee status
- Download payment receipts
- Raise complaints
- Track complaint status
- View attendance history
- View visitor records
- View notices and announcements

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios
- Tailwind CSS
- Lucide React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token authentication
- bcrypt password hashing
- Morgan logging
- CORS
- dotenv

### Database

- MongoDB
- Mongoose ODM

---

## 📂 Project Structure

```bash
stayease/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── dashboardController.js
│   │   │   └── resourceControllers.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── error.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Student.js
│   │   │   ├── Room.js
│   │   │   ├── Fee.js
│   │   │   ├── Complaint.js
│   │   │   ├── Attendance.js
│   │   │   ├── Visitor.js
│   │   │   ├── Notice.js
│   │   │   ├── Inventory.js
│   │   │   ├── Maintenance.js
│   │   │   ├── Expense.js
│   │   │   ├── Lease.js
│   │   │   ├── Notification.js
│   │   │   └── AuditLog.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── appRoutes.js
│   │   │
│   │   ├── utils/
│   │   │   ├── asyncHandler.js
│   │   │   ├── audit.js
│   │   │   └── permissions.js
│   │   │
│   │   ├── seed.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── client.js
│   │   │
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   └── ui.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.css
│   │
│   ├── package.json
│   └── .env.example
│
├── docker-compose.yml
└── README.md
