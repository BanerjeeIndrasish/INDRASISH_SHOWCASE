import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
    const experience = [
        {
            role: "React Developer",
            company: "Webstep Technologies Pvt Ltd, Kolkata",
            period: "October 2024 - Present",
            responsibilities: [
                "Developed responsive websites and complex admin panels from scratch using React.js, TypeScript, and modern UI libraries",
                "Built scalable admin dashboards with role-based access control, enabling CRUD operations and analytics visualization",
                "Implemented custom reusable components including dynamic forms with conditional validations and multi-step wizards",
                "Integrated RESTful APIs with comprehensive error handling using RTK Query and Axios",
                "Created custom hooks for form handling, data fetching, and state management"
            ]
        },
        {
            role: "Game & Web Developer",
            company: "Biswa Games Pvt Ltd, Kolkata",
            period: "April 2022 - August 2024",
            responsibilities: [
                "Engineered full-stack web applications handling both frontend (React.js) and backend (Node.js/Express) development",
                "Developed core gameplay mechanics and interactive VR experiences published on Meta Quest Store using Unity and C#",
                "Designed and implemented RESTful APIs with authentication, validation middleware, and structured error handling",
                "Built company website featuring client feedback systems, FAQ modules, and content management capabilities",
                "Maintained and debugged legacy applications, improving performance and resolving critical production issues"
            ]
        }
    ];

    const skills = {
        "Frontend": ["JavaScript", "TypeScript", "React.js", "Redux", "RTK Query", "Tailwind CSS", "Material-UI", "Ant Design"],
        "Backend": ["Node.js", "Express.js", "REST API", "MySQL", "Authentication", "Middleware Development"],
        "Development": ["CRUD Operations", "API Integration", "State Management", "Git", "Agile Methodologies"],
        "Game Dev": ["Unity Engine", "C#", "VR Development", "Meta Quest"]
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
        <section className="min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">About Me</h2>

                {/* Professional Experience */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Experience</h3>
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                                <h4 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h4>
                                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                                <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-600">
                                            <span className="text-blue-600 mt-1">•</span>
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
                                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">
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
                <div className="text-center bg-white rounded-lg p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
                    <p className="text-gray-600 mb-6">
                        Interested in collaboration or have a project in mind? Feel free to reach out!
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/BanerjeeIndrasish" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                            <Github size={32} />
                        </a>
                        <a href="https://linkedin.com/in/indrasish-banerjee-a61225191" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                            <Linkedin size={32} />
                        </a>
                        <a href="mailto:indrasish820@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                            <Mail size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
