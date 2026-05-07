# StayEase SaaS MERN — Product-Level Hostel / PG Management System

A sellable, role-based MERN stack Hostel/PG management platform built with React, Node.js, Express, MongoDB, and Mongoose.

## Roles

### Admin
- Full business dashboard
- Room and bed management
- Student onboarding and deactivation
- Room/bed allocation
- Monthly fee generation
- Mark fees as paid
- PDF receipt and CSV export
- Complaint workflow
- Attendance management and QR generation API
- Visitor check-in/check-out
- Notices
- Lease records
- Inventory and asset management
- Maintenance tasks
- Expense tracking
- Reports and audit logs

### Staff
- View rooms/students
- Fee collection / mark paid
- Manage complaints
- Mark attendance
- Visitor check-in/check-out
- Publish notices
- Manage maintenance and inventory
- Cannot delete rooms/students or access expenses/audit logs

### Student
- Own dashboard only
- My profile
- My fees and receipt download
- My lease
- Raise complaints
- My attendance
- My visitors
- Notices and notifications

## Quick Run

### 1. Start MongoDB
Use local MongoDB or Docker:

```bash
docker compose up -d
```

### 2. Backend

```bash
cd backend
npm install
Copy-Item .env.example .env
npm run seed
npm run dev
```

Backend runs on:

```text
http://127.0.0.1:5000
```

### 3. Frontend

```bash
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Demo Logins

```text
Admin: admin@stayease.com / admin123
Staff: staff@stayease.com / staff123
Student: student@stayease.com / student123
```

## Sellable Product Modules

- Authentication and authorization
- Role-specific dashboards
- Room and bed lifecycle
- Student lifecycle
- Fee billing and receipt generation
- Complaint management
- Visitor gate register
- Attendance management
- Lease records
- Notice board
- Inventory management
- Maintenance task management
- Expense tracking
- Notifications
- Audit logs
- CSV/PDF exports

## Production Notes

Before selling or deploying to a real client, add:

- Real payment gateway such as Razorpay/Stripe
- Email/SMS/WhatsApp notifications
- Cloud file uploads for KYC documents
- Strong environment secrets
- HTTPS deployment
- Database backups
- Tenant/company multi-tenancy if selling to multiple PG owners
