import myImg from '../assets/MyIMG.JPG'

const projects = [
    {
        title: "Team Assist CRM",
        type: "Enterprise CRM Platform(Company Internal)",
        company: "Webstep Technologies Private Limited",
        description: "Full-stack enterprise CRM system for managing customer relationships, sales pipeline, and project workflows with real-time notifications and comprehensive tracking capabilities.",
        features: [
            "Opportunity and account management with sales pipeline tracking",
            "Contact management system with relationship mapping",
            "Project planning and task assignment with status tracking",
            "Time logging and productivity analytics",
            "Email notification system for updates and alerts",
            "Role-based access control and user permissions",
        ],
        tech: ["React.js", "TypeScript", "RTK Query", "Tailwind CSS", "Node.js", "Express.js", "REST API", "Email Integration"],
        period: "2025-Present",
    },
    {
        title: "Lyfetrip Bookings",
        type: "Flight Booking Platform",
        company: "Webstep Technologies Private Limited",
        description: "Comprehensive flight booking platform with integrated admin panel for managing bookings, user accounts, and flight inventory.",
        features: [
            "Real-time flight search and booking system",
            "Admin dashboard with role-based access control",
            "User management and booking analytics",
            "Payment gateway integration",
            "Responsive design for mobile and desktop"
        ],
        tech: ["React.js", "TypeScript", "RTK Query", "Tailwind CSS", "Node.js", "REST API"],
        period: "2025-Present"
    },
    {
        title: "JP International ERP",
        type: "Enterprise Resource Planning",
        company: "Webstep Technologies Private Limited",
        description: "Complete ERP system designed for streamlined business management across multiple departments and workflows.",
        features: [
            "Multi-module system (Inventory, HR, Finance, Sales)",
            "Custom form handling with conditional validations",
            "Advanced data tables with filtering and sorting",
            "Role-based permissions and access control",
            "Real-time data synchronization"
        ],
        tech: ["React.js", "TypeScript", "Redux", "Material-UI", "Node.js"],
        period: "2025",
        link: [{ Website: "https://jpi.websteptech.co.uk/" }]
    },
    {
        title: "Uncommon Christian Dating",
        type: "Dating Application",
        company: "Webstep Technologies Private Limited",
        description: "Faith-based dating platform with comprehensive web admin panel for user moderation and content management.",
        features: [
            "User profile management and matching system",
            "Content moderation dashboard",
            "Analytics and user activity tracking",
            "Messaging system oversight",
            "Multi-step registration with validation"
        ],
        tech: ["React.js", "TypeScript", "Ant Design", "API Integration"],
        period: "2024-2025",
        link: [
            { Admin: "https://unc.webstep.in/" },
            { IOS: "https://apps.apple.com/ie/app/uncommon-christian-dating/id1642626538" },
            { Andriod: "https://play.google.com/store/apps/dev?id=7560027683670294358" }
        ]
    },
    {
        title: "Durgapur Municipal Corporation",
        type: "Government Portal",
        company: "Webstep Technologies Private Limited",
        description: "Complete digital solution for solid waste management and other services including website, mobile application and admin dashboard for municipal services.",
        features: [
            "Mobile app for Android platform",
            "Solid waste collection management system",
            "Citizen services portal with complaint management",
            "Admin dashboard for service tracking and user data management",
            "Billing generation system",
            "Public announcement and notice board",
            "Payment gateway integration"
        ],
        tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Android"],
        period: "2024-2025",
        link: [{ Admin: "https://dmc.websteptech.co.uk/" }, { Android: "https://play.google.com/store/apps/details?id=com.dmcsolidwaste&hl=en" }]
    },
    {
        title: "IIM Amritsar Admission Module",
        type: "Educational Platform",
        company: "Webstep Technologies Private Limited",
        description: "Admin portal and admission module for managing student applications, course enrollment, and academic processes.",
        features: [
            "Student admission workflow management",
            "Document verification system",
            "Course and batch management",
            "Application tracking dashboard",
            "Automated email notifications"
        ],
        tech: ["React.js", "Node.js", "Express.js", "MySQL", "REST API"],
        period: "2024-Present"
    },
    {
        title: "Sundarini Organic",
        type: "E-commerce Platform",
        company: "Webstep Technologies Private Limited",
        description: "Full-stack e-commerce solution with website and Android application for organic product sales.",
        features: [
            "Product catalog with search and filters",
            "Shopping cart and checkout system",
            "Order management dashboard",
            "Android mobile application",
            "Payment integration and order tracking"
        ],
        tech: ["React.js", "Node.js", "Express.js", "MySQL", "Android"],
        period: "2024"
    },
    {
        title: "DraconG",
        type: "VR Game (Meta Quest)",
        company: "Biswa Games",
        description: "Rythmic flying and attacking game in virtual reality with immersive gameplay mechanics.",
        features: [
            "Rythmic flying and attacking gameplay",
            "VR controller integration",
            "Score tracking and leaderboards",
            "Multiple game modes and maps",
            "Immersive 3D environments"
        ],
        tech: ["Unity", "C#", "VR Development", "Meta Quest SDK"],
        period: "2023",
        link: [{ Game: "https://www.meta.com/en-gb/experiences/dracong/6441992099254958/" }]
    },
    {
        title: "Company Website",
        type: "Website",
        company: "Biswa Games",
        description: "Company website design from scratch, user and client feedback form handling.",
        features: [
            "Responsive website design",
            "Client feedback form integration",
            "FAQ section with dynamic content",
            "Content management system"
        ],
        tech: ["Reacj.js", "Node.js", "Express.js", "MySQL", "REST API"],
        period: "2023",
        link: [{ Website: "https://www.biswagames.com/" }]
    },
    {
        title: "The Verse",
        type: "VR Game (Meta Quest)",
        company: "Biswa Games",
        description: "Immersive 3D open-world VR game published on Meta Quest Store featuring interactive gameplay mechanics.",
        features: [
            "Open-world exploration environment",
            "Interactive VR gameplay mechanics",
            "Optimized for Meta Quest hardware",
            "Physics-based interactions",
            "Published on official Quest Store"
        ],
        tech: ["Unity", "C#", "VR Development", "Meta Quest SDK"],
        period: "2022-2023"
    },
    {
        title: "Beyond Putt",
        type: "VR Game",
        company: "Biswa Games",
        description: "Interactive golf game in virtual reality with realistic physics and realtime gameplay with friends.",
        features: [
            "Realistic golf physics simulation",
            "VR controller integration",
            "Score tracking and leaderboards",
            "Multiple game modes",
            "Immersive 3D environments"
        ],
        tech: ["Unity", "C#", "VR Development", "Physics Engine"],
        period: "2023",
        link: [{ Game: "https://www.meta.com/en-gb/experiences/beyond-putt-realistic-physics-mini-golf/7438772032884118/" }]
    },
    {
        title: "Bowling Blitz",
        type: "VR Game",
        company: "Biswa Games",
        description: "Interactive bowling game in virtual reality with realistic physics and engaging gameplay.",
        features: [
            "Realistic bowling physics simulation",
            "VR controller integration",
            "Score tracking and leaderboards",
            "Multiple game modes",
            "Immersive 3D environments"
        ],
        tech: ["Unity", "C#", "VR Development", "Physics Engine"],
        period: "2022",
        link: [{ Game: "https://www.meta.com/experiences/bowling-blitz-celebrate-the-carnival/8918080398254339/" }]
    },
];

const myImages = {
    myImg: myImg
}

export { projects, myImages };