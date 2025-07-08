# ISBM College of Engineering - Management System

## About the Project

This is a comprehensive college management system built for ISBM College of Engineering. The system provides various modules for managing academic activities, student information, faculty management, and administrative tasks.

## Features

### 🎓 Academic Management
- Student enrollment and management
- Course and curriculum management  
- Attendance tracking
- Grade and assessment management
- Academic calendar and scheduling

### 👥 User Management
- Multi-role access (Students, Faculty, Admin, etc.)
- Role-based dashboard and permissions
- Profile management and authentication
- Secure login and session management

### 📊 Administrative Tools
- Comprehensive reporting and analytics
- Notification and announcement system
- Hostel and facility management
- Fee collection and financial tracking
- Library management system

### 🏫 Department Management
- Department-wise student and faculty organization
- Course allocation and management
- Resource allocation and tracking
- Department-specific analytics

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Database**: PostgreSQL with Supabase
- **Authentication**: Supabase Auth
- **Build Tool**: Vite
- **State Management**: React Query (TanStack Query)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd isbm-college-management
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Start the development server
```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── admin/          # Admin-specific components
│   └── layouts/        # Layout components
├── pages/              # Page components
│   ├── admin/          # Admin pages
│   └── dashboard/      # Dashboard pages
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
├── lib/                # Utility functions
└── integrations/       # External service integrations
```

## User Roles

- **Super Admin**: Full system access and configuration
- **Admin**: General administrative access
- **Principal**: Academic leadership access
- **HOD**: Department head access
- **Teacher**: Faculty member access
- **Student**: Student portal access
- **Parent**: Parent portal access
- **Staff**: Non-teaching staff access

## Features by Role

### Students
- View academic records and attendance
- Access course materials and assignments
- Check fee status and payment history
- View announcements and notices

### Faculty
- Manage student attendance
- Grade assignments and exams
- Access student information
- Manage course content

### Admin
- Manage user accounts and permissions
- Generate reports and analytics
- Manage college resources
- System configuration

## Support

For technical support or inquiries:
- Email: tech@isbmcoe.edu.in
- Phone: +91-7410769206

## Security

This system implements:
- Role-based access control (RBAC)
- Secure authentication with JWT
- Data encryption and secure storage
- Regular security audits and updates

## License

Copyright © 2024 ISBM College of Engineering. All rights reserved.
