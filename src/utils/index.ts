import myImg from '../assets/MyIMG.JPG'

const projects = [
    {
        title: "Team Assist CRM",
        type: "Enterprise CRM Platform (Company Internal)",
        company: "Webstep Technologies Private Limited",
        description: "Comprehensive internal CRM system managing the complete customer lifecycle from initial contact to project delivery. Built to streamline sales operations, opportunity tracking, and project management with real-time collaboration features.",
        features: [
            "Multi-tier CRM flow: User → Account → Contact → Opportunity → Project → Tasks → Task Logs with complete relationship mapping",
            "Dynamic opportunity pipeline with drag-and-drop stage management and win probability tracking",
            "Contact management with hierarchical organization structures and relationship visualization",
            "Project planning module with Gantt-style timelines, milestone tracking, and dependency management",
            "Time logging system with automated timesheet generation and productivity analytics dashboard",
            "Real-time email notification system for task assignments, deadline reminders, and status updates",
            "Granular role-based access control with customizable permission sets for managers, team leads, and employees",
            "Advanced reporting engine with custom filters, data export, and visual analytics",
            "Custom form builder with conditional field logic based on user roles and project types"
        ],
        tech: ["React.js", "TypeScript", "RTK Query", "Tailwind CSS", "Ant Design", "Node.js", "Express.js", "MySQL", "REST API", "Email Integration"],
        period: "2024-Present",
        highlights: [
            "Replaced multiple disconnected tools with unified platform",
            "Reduced opportunity tracking time by 60% with automated pipeline management",
            "Improved team collaboration with real-time updates and centralized communication"
        ]
    },
    {
        title: "JP International ERP",
        type: "Enterprise Resource Planning System",
        company: "Webstep Technologies Private Limited",
        description: "Complete ERP solution for import-export business, digitizing entire procurement and sales workflows. Replaced Excel-based manual processes with automated, real-time system featuring comprehensive inventory, vendor, and logistics management.",
        features: [
            "Master Data Management: Centralized database for Warehouses, Vendors/Customers, Transport/Logistics Partners, and inventory items with bulk import/export",
            "Procurement Workflow: RFQ creation with multi-vendor comparison → Purchase Order generation → Goods Receipt with QC checks → Inbound Logistics tracking → Purchase Invoice reconciliation",
            "Sales Workflow: Sales Order processing → Delivery Note generation with shipping details → Sales Invoice with tax calculations and automated document generation",
            "Inventory Management: Real-time stock tracking across multiple warehouses, low-stock alerts, and automated reorder suggestions",
            "Vendor Portal: Supplier performance tracking, payment history, and automated vendor scorecards",
            "Document Management: Automated PDF generation for PO, invoices, delivery notes with customizable templates",
            "Reporting Dashboard: Real-time analytics for purchase trends, sales performance, inventory turnover, and profit margins",
            "Multi-currency Support: International transaction handling with automatic exchange rate updates",
            "Approval Workflows: Multi-level approval system for purchase orders and payments with email notifications"
        ],
        tech: ["React.js", "TypeScript", "Redux", "Material-UI", "Formik", "Node.js", "Express.js", "MySQL", "REST API", "PDF Generation"],
        period: "2024-2025",
        link: [{ Website: "https://jpi.websteptech.co.uk/" }],
        highlights: [
            "Eliminated Excel-based manual tracking, saving 15+ hours weekly",
            "Reduced order processing errors by 85% with automated validations",
            "Real-time inventory visibility across 5+ warehouses",
            "Generated 1000+ automated documents in first 3 months"
        ]
    },
    {
        title: "Lyfetrip Bookings",
        type: "Flight Booking Platform with Payment Integration",
        company: "Webstep Technologies Private Limited",
        description: "Full-featured flight booking platform integrating Amadeus flight search APIs and Razorpay payment gateway. Complete with responsive booking flow and comprehensive admin dashboard for managing bookings, users, and financial analytics.",
        features: [
            "Flight Search Engine: Real-time flight search with Amadeus API integration supporting multi-city, one-way, and round-trip queries",
            "Advanced Search Filters: Filter by airlines, stops, departure times, price range, and cabin class with live result updates",
            "Seat Selection Interface: Interactive seat map with real-time availability and pricing for different seat categories",
            "Multi-step Booking Flow: Passenger details → Seat selection → Add-ons (meals, baggage) → Payment with progress indicator",
            "Razorpay Payment Gateway: Secure payment processing with webhook notifications for payment status updates",
            "Booking Management: View/modify/cancel bookings with automated refund processing and email confirmations",
            "User Dashboard: Booking history, saved travelers, payment history, and e-ticket downloads",
            "Admin Panel Features: User management with verification status, booking analytics with revenue reports, payment reconciliation dashboard",
            "Financial Reporting: Daily/weekly/monthly revenue reports, payment gateway transaction logs, and commission tracking",
            "Email Automation: Booking confirmations, payment receipts, flight updates, and cancellation notifications",
            "Responsive Design: Optimized mobile and desktop experiences with touch-friendly booking flow"
        ],
        tech: ["React.js", "TypeScript", "RTK Query", "Tailwind CSS", "Amadeus API", "Razorpay", "Node.js", "Express.js", "MySQL", "REST API", "Email Integration"],
        period: "2024-2025",
        highlights: [
            "Integrated complex Amadeus testing APIs with 20+ endpoints",
            "Processed test transactions worth ₹10L+ through Razorpay sandbox",
            "Built complete booking flow from search to confirmation in 6 weeks",
            "Project halted at production stage pending Amadeus enterprise API consolidator approval"
        ]
    },
    {
        title: "Durgapur Municipal Corporation - Solid Waste Management",
        type: "Government Citizen Services Platform",
        company: "Webstep Technologies Private Limited",
        description: "Comprehensive digital solution for municipal solid waste management including Android citizen app, public website, and admin dashboard. Enables citizens to register, pay bills, and book municipal services while providing administrators complete service tracking and analytics.",
        features: [
            "Citizen Registration: Multi-step registration with Aadhaar verification, address proof upload, and mobile OTP verification",
            "Municipal Payment Portal: Pay property tax, water bills, and service charges with payment gateway integration and receipt generation",
            "Garbage Collection Booking: Schedule daily/weekly garbage pickup with preferred time slots and route optimization for collection teams",
            "SWM Vehicle/Bucket Booking: Book waste collection vehicles and community bins for events or bulk waste disposal",
            "Municipal Facility Reservations: Book community halls, auditoriums, and event spaces with availability calendar and payment integration",
            "Complaint Management: Lodge complaints with photo uploads, track resolution status, and receive SMS/email updates",
            "Admin Dashboard: Real-time service request tracking, citizen database management, and collection route planning",
            "Analytics Module: Daily collection statistics, revenue reports, complaint resolution metrics, and citizen engagement analytics",
            "Payment Reconciliation: Track all transactions, generate daily collection reports, and export financial data",
            "Notification System: Push notifications for garbage collection schedules, payment reminders, and important announcements",
            "Multi-role Access: Separate interfaces for citizens, field workers, supervisors, and administrators",
            "Android Application: Native mobile app for Android with offline capability for service requests"
        ],
        tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "REST API", "Android (Java)", "Payment Gateway", "SMS/Email Integration", "Push Notifications"],
        period: "2024-2025",
        link: [
            { Admin: "https://dmc.websteptech.co.uk/" }, 
            { Android: "https://play.google.com/store/apps/details?id=com.dmcsolidwaste&hl=en" }
        ],
        highlights: [
            "Serving 500,000+ residents of Durgapur municipality",
            "Digitized 100% of manual payment processes",
            "Reduced service request processing time from days to hours",
            "Integrated 15+ different municipal services in single platform"
        ]
    },
    {
        title: "Uncommon Christian Dating",
        type: "Faith-Based Dating Application - Admin Panel",
        company: "Webstep Technologies Private Limited",
        description: "Comprehensive web admin panel for faith-based dating platform, enabling content moderation, user management, and platform analytics.",
        features: [
            "User profile moderation with photo/content approval workflow",
            "Match analytics and user interaction tracking",
            "Content management system for faith-based resources",
            "Messaging system oversight and inappropriate content flagging",
            "Subscription management and payment tracking",
            "User verification and background check coordination"
        ],
        tech: ["React.js", "TypeScript", "Ant Design", "REST API", "Chart.js"],
        period: "2024-2025",
        link: [
            { Admin: "https://unc.webstep.in/" },
            { iOS: "https://apps.apple.com/ie/app/uncommon-christian-dating/id1642626538" },
            { Android: "https://play.google.com/store/apps/dev?id=7560027683670294358" }
        ]
    },
    {
        title: "IIM Amritsar Admission Portal",
        type: "Educational Institution Management",
        company: "Webstep Technologies Private Limited",
        description: "Admin portal and admission module for managing student applications, course enrollment, and academic processes at IIM Amritsar.",
        features: [
            "Multi-stage admission workflow with document verification",
            "Application tracking dashboard with status filters",
            "Course and batch management with seat allocation",
            "Automated email notifications for application updates",
            "Interview scheduling and feedback system",
            "Payment integration for application fees"
        ],
        tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "REST API"],
        period: "2024-Present"
    },
    {
        title: "Sundarini Organic",
        type: "E-commerce Platform",
        company: "Webstep Technologies Private Limited",
        description: "Full e-commerce solution with website and Android application for organic product sales.",
        features: [
            "Product catalog with advanced search and category filters",
            "Shopping cart with discount code support",
            "Order management dashboard for vendors",
            "Android mobile application for customers",
            "Payment gateway integration and order tracking",
            "Delivery management with route optimization"
        ],
        tech: ["React.js", "Node.js", "Express.js", "MySQL", "Android", "Payment Gateway"],
        period: "2024"
    },
    {
        title: "Company Website - Biswa Games",
        type: "Corporate Website",
        company: "Biswa Games",
        description: "Company website with client feedback system, FAQ management, and portfolio showcase.",
        features: [
            "Responsive website design with modern UI",
            "Client feedback form with backend integration",
            "Dynamic FAQ section with admin management",
            "Portfolio showcase for published games",
            "Contact form with email notifications"
        ],
        tech: ["React.js", "Node.js", "Express.js", "MySQL", "REST API"],
        period: "2023",
        link: [{ Website: "https://www.biswagames.com/" }]
    }
];

const myImages = {
    myImg: myImg
}

export { projects, myImages };