import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
    const experience = [
        {
            role: "Frontend Developer (React.js)",
            company: "Webstep Technologies Pvt Ltd, Kolkata",
            period: "October 2024 - Present",
            responsibilities: [
                "Developing responsive enterprise web applications and admin panels using React.js, TypeScript, and modern UI libraries",
                "Built complex CRM interfaces with multi-level user flows and role-based access control",
                "Created complete ERP frontend for import-export business, replacing Excel-based workflows with intuitive digital interfaces",
                "Implemented custom reusable components including dynamic forms with conditional validations, multi-step wizards, and advanced data tables",
                "Integrated RESTful APIs with comprehensive error handling and user-friendly feedback using RTK Query and Axios",
                "Developed custom hooks for form handling, data fetching, and state management to improve code reusability",
                "Collaborated with backend teams to define API requirements and ensure smooth frontend-backend integration",
                "Supported basic backend tasks including API endpoint creation and database queries under senior developer guidance"
            ]
        },
        {
            role: "Frontend Developer",
            company: "Biswa Games Pvt Ltd, Kolkata",
            period: "April 2022 - October 2024",
            responsibilities: [
                "Developed frontend interfaces for web applications using React.js with focus on user experience and responsive design",
                "Built company website featuring client feedback systems, FAQ modules, and content management interfaces",
                "Integrated third-party APIs including Amadeus flight booking and Razorpay payment gateway on the frontend",
                "Collaborated with backend developers to consume REST APIs and implement frontend logic",
                "Maintained and debugged existing applications, improving UI performance and resolving user-facing issues"
            ]
        }
    ];

    const skills = {
        "Frontend (Strong)": ["JavaScript", "TypeScript", "React.js", "Redux", "RTK Query", "Tailwind CSS", "Material-UI", "Ant Design", "Custom Hooks & Contexts", "Form Handling"],
        "Backend (Growing)": ["Node.js", "Express.js", "REST API", "MySQL", "Authentication", "Basic CRUD Operations"],
        "Development Tools": ["Git", "API Integration", "State Management", "Debugging & Testing", "Agile Methodologies"],
        "Deployment": ["Vercel", "Render", "Oracle Cloud VM", "Build Configuration", "Environment Management"]
    };

    const education = [
        {
            degree: "B.Tech in Computer Science",
            institution: "Techno India University, Kolkata",
            period: "August 2019 - July 2022",
            grade: "CGPA: 8.1"
        },
        {
            degree: "Diploma in Computer Science",
            institution: "Kalna Polytechnic, Bardhaman",
            period: "July 2016 - June 2019",
            grade: "69%"
        }
    ];

    return (
        <section className="min-h-screen py-10 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">About Me</h2>

                {/* Bio Section */}
                <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        I'm a Frontend Developer with <span className="font-semibold text-blue-600">3.5+ years of experience</span> building responsive web applications and complex admin panels.
                        I specialize in <span className="font-semibold">React.js and TypeScript</span>, creating intuitive user interfaces that solve real business problems.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        I've worked on everything from <span className="font-semibold">enterprise CRM systems</span> and <span className="font-semibold">ERP platforms</span> to
                        <span className="font-semibold"> flight booking systems</span> and <span className="font-semibold">government portals</span>.
                        While I'm strongest on the frontend, I also have growing backend experience and enjoy collaborating with backend teams to build complete solutions.
                    </p>
                </div>

                {/* Professional Experience */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Experience</h3>
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                                <h4 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h4>
                                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                                <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-600">
                                            <span className="text-blue-600 mt-1 font-bold">•</span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="bg-white rounded-lg p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-4">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill, i) => (
                                        <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-200">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Education</h3>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                                <h4 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h4>
                                <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                                <div className="flex justify-between text-gray-600 text-sm">
                                    <span>{edu.period}</span>
                                    <span className="font-medium">{edu.grade}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 shadow-sm border border-blue-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
                    <p className="text-gray-600 mb-6">
                        Open to frontend development opportunities! Feel free to reach out for collaborations or projects.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/BanerjeeIndrasish" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition transform hover:scale-110">
                            <Github size={32} />
                        </a>
                        <a href="https://linkedin.com/in/indrasish-banerjee-a61225191" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition transform hover:scale-110">
                            <Linkedin size={32} />
                        </a>
                        <a href="mailto:indrasish820@gmail.com"
                            className="text-gray-600 hover:text-blue-600 transition transform hover:scale-110">
                            <Mail size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;