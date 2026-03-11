export const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
    { name: 'Github', href: 'https://github.com/hiepnguyen05' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hiệp-nguyễn-2b84093a9' },
    { name: 'Email', href: 'mailto:hiep20122005@gmail.com' },
];

export const PROJECTS = [
    {
        id: 'hotel-booking',
        title: "Zenith Hotel Booking",
        shortDescription: "A high-performance hospitality ecosystem with integrated digital payments.",
        description: "As a Fullstack Developer on the Zenith project, I was responsible for the end-to-end architecture of a modern hotel reservation platform. This involved engineering a high-availability RESTful API server, designing a flexible NoSQL schema for real-time inventory tracking, and implementing a seamless frontend experience that handles complex state for global travelers. A significant milestone was the custom integration of the MoMo API Sandbox, creating a secure and reliable sub-second payment pipeline with automated reconciliation through IPN/Webhook protocols.",
        challenge: "Transmitting real-time room availability across a distributed NoSQL database while ensuring idempotent payment processing for third-party e-wallet integrations.",
        solution: "Developed an optimized MongoDB aggregation pipeline for atomic availability checks and implemented a reliable WebHook/IPN listener system with MoMo API to guarantee transaction consistency.",
        features: [
            { title: "Real-time Booking", description: "Dynamic inventory synchronization with atomic locking.", icon: "Database" },
            { title: "Secured Identity", description: "JWT-based authentication with role-based access control.", icon: "Shield" },
            { title: "Quantum Payment", description: "Integrated MoMo Sandbox for sub-second transaction processing.", icon: "Zap" }
        ],
        tags: ["Node.js", "Express", "MongoDB", "ReactJS", "MoMo API", "JWT"],
        keyFeatures: [
            { title: "RESTful Architecture", description: "Engineered a comprehensive API suite for scalable room and booking management.", icon: "Terminal" },
            { title: "Data Orchestration", description: "Optimized MongoDB queries to provide instant availability updates during peak traffic.", icon: "Database" },
            { title: "Payment Synchronization", description: "Direct MoMo Sandbox integration with robust IPN/Webhook handling for state consistency.", icon: "Zap" },
            { title: "Security Middleware", description: "Advanced middleware layers for Identity Management and Administrative RBAC.", icon: "Shield" }
        ],
        gallery: [
            { title: "Home View", image: "/projects/hotel-booking/trangchu.png" },
            { title: "Room Discovery", image: "/projects/hotel-booking/timphong.png" },
            { title: "Detailed Intel", image: "/projects/hotel-booking/thongtin.png" },
            { title: "Reservation Protocol", image: "/projects/hotel-booking/datphong.png" }
        ],
        technicalSpecs: [
            { label: "Role", value: "Fullstack Developer" },
            { label: "Frontend", value: "ReactJS / Tailwind CSS" },
            { label: "Backend", value: "Node.js / Express" },
            { label: "Database", value: "MongoDB / NoSQL" },
            { label: "Payment", value: "MoMo API Sandbox" },
            { label: "Security", value: "JWT / Middleware" }
        ],
        missionLog: [
            { date: "Oct 2024", event: "Project Initialization & Infrastructure Setup" },
            { date: "Dec 2024", event: "Payment Gateway Integration & MoMo API Sandbox" },
            { date: "Jan 2025", event: "Core Feature Finalization & Deployment" }
        ],
        githubUrl: "https://github.com/hiepnguyen05/hotel_booking_web_project.git",
        demoUrl: "https://hotel-booking-web-project.vercel.app/",
        x: 400, y: 50,
        cardPos: { left: 440, top: 10 },
        anchor: "right"
    },
    {
        id: 'ceiling-fan-store',
        title: "AeroVane Commerce",
        shortDescription: "An industrial-grade e-commerce engine for precision climate control systems.",
        description: "AeroVane is a robust enterprise commerce platform built on the ASP.NET Core MVC framework. As a Fullstack Developer, I architected a highly maintainable system using the Repository Pattern and Entity Framework Core. The project focused on engineering a normalized relational database schema in SQL Server, ensuring absolute data integrity while delivering advanced server-side features such as multi-attribute filtering and a complex inventory-aware commerce pipeline.",
        challenge: "Managing complex product hierarchies and overlapping technical attributes in a relational schema without compromising query performance or data consistency.",
        solution: "Implemented a standardized Repository Pattern with EF Core (Code First) to decouple data access, combined with optimized LINQ expressions and SQL indexing for high-speed attribute-based searching.",
        features: [
            { title: "Relational Core", description: "Normalized SQL schema with strict integrity constraints.", icon: "Database" },
            { title: "Clean Architecture", description: "Repository Pattern implementation for enterprise-level maintenance.", icon: "Shield" },
            { title: "Precision Search", description: "Advanced server-side filtering by technical specifications.", icon: "Zap" }
        ],
        tags: ["ASP.NET Core MVC", "SQL Server", "EF Core", "C#", "Repository Pattern"],
        keyFeatures: [
            { title: "Enterprise Data Schema", description: "Designed a comprehensive SQL Server architecture focused on high-fidelity product data and relational integrity.", icon: "Database" },
            { title: "EF Core Orchestration", description: "Leveraged Code First workflows to maintain a seamless bridge between domain logic and relational storage.", icon: "Cpu" },
            { title: "Server-Side Cart", description: "Engineered a robust shopping cart engine with real-time inventory validation and persistence.", icon: "ShoppingCart" },
            { title: "High-Precision Filtering", description: "Developed a dynamic search engine capable of handling complex multi-attribute queries with low latency.", icon: "Target" }
        ],
        gallery: [],
        technicalSpecs: [
            { label: "Role", value: "Fullstack Developer" },
            { label: "Framework", value: "ASP.NET Core MVC" },
            { label: "ORM", value: "Entity Framework Core" },
            { label: "Database", value: "SQL Server" },
            { label: "Architecture", value: "Repository Pattern" }
        ],
        missionLog: [
            { date: "May 2024", event: "Database Schema Design & Repository Setup" },
            { date: "July 2024", event: "Enterprise-Grade Commerce Pipeline Implementation" },
            { date: "Aug 2024", event: "Final Validation & Performance Optimization" }
        ],
        githubUrl: "https://github.com/hiepnguyen05/Ceiling_Fan_Store_Web_Project.git",
        x: 500, y: 550,
        cardPos: { left: 60, top: 480 },
        anchor: "left"
    }
];
