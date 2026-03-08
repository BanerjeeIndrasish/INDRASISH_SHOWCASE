import { MapPin, Code2, Palette, Zap, Users } from 'lucide-react';
import { myImages, projects } from '../utils';

const Home = () => {
    const highlights = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Frontend Expert",
            description: "React.js & TypeScript specialist"
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "UI/UX Focus",
            description: "Building intuitive interfaces"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Learner",
            description: "Growing backend skills"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Team Player",
            description: "Collaborative development"
        }
    ];

    return (
        <section className="min-h-screen flex items-center px-4 py-10 bg-gradient-to-br from-blue-50 via-white to-gray-50">
            <div className="mx-auto w-full max-w-6xl">
                <div className="flex flex-col items-start gap-8">
                    {/* Profile Header */}
                    <div className='w-full bg-white rounded-lg shadow-sm p-6 border border-gray-100'>
                        <div className='flex flex-col md:flex-row items-start gap-6'>
                            <div className="flex-shrink-0">
                                <img
                                    src={myImages.myImg}
                                    alt="Indrasish Banerjee"
                                    className="w-28 h-28 rounded-lg object-cover border-2 border-blue-200"
                                />
                            </div>
                            <div className='flex flex-col justify-start items-start flex-grow'>
                                <h1 className="font-bold text-gray-800 text-2xl mb-1">Indrasish Banerjee</h1>
                                <div className="text-gray-600 text-sm flex items-center gap-1 mb-2">
                                    <MapPin size={14} />
                                    Kolkata, West Bengal
                                </div>
                                <div className="font-semibold text-blue-600 text-lg">Frontend Developer (React.js)</div>
                                <div className="text-sm text-gray-700 font-medium">WebStep Technologies Private Limited</div>
                                <div className="text-xs text-gray-500 mt-1">Oct 2024 - Present · 3.5+ years experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className='w-full space-y-8'>
                        {/* Introduction */}
                        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                                Building Modern Web
                                <br />
                                <span className="text-blue-600">Experiences</span>
                            </h2>

                            <p className="text-xl text-gray-600 mb-4 font-medium">
                                Frontend Developer specializing in React & TypeScript
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                I create responsive, scalable web applications with a focus on exceptional user experience.
                                From enterprise CRMs and ERP systems to flight booking platforms and government portals,
                                I transform complex requirements into clean, maintainable code.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md">
                                    <div className="text-blue-600 mb-3">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg shadow-md text-white">
                                <div className="text-3xl font-bold mb-1">3.5+</div>
                                <div className="text-sm text-blue-100">Years Experience</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-lg shadow-md text-white">
                                <div className="text-3xl font-bold mb-1">{projects.length}+</div>
                                <div className="text-sm text-green-100">Projects Delivered</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-lg shadow-md text-white">
                                <div className="text-3xl font-bold mb-1">15+</div>
                                <div className="text-sm text-purple-100">Technologies</div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-6 rounded-lg shadow-md text-white">
                                <div className="text-2xl font-bold mb-1">Available</div>
                                <div className="text-sm text-orange-100">60 Days Notice</div>
                            </div>
                        </div>

                        {/* Specializations */}
                        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">What I Build</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-bold text-gray-800 mb-2">Enterprise Applications</h4>
                                    <p className="text-sm text-gray-600">CRM systems, ERP platforms, and complex admin dashboards with role-based access</p>
                                </div>
                                <div className="border-l-4 border-green-600 pl-4">
                                    <h4 className="font-bold text-gray-800 mb-2">E-commerce & Booking</h4>
                                    <p className="text-sm text-gray-600">Payment gateway integration, real-time booking systems, and inventory management</p>
                                </div>
                                <div className="border-l-4 border-purple-600 pl-4">
                                    <h4 className="font-bold text-gray-800 mb-2">Custom Components</h4>
                                    <p className="text-sm text-gray-600">Reusable UI libraries, dynamic forms, multi-step wizards, and data visualizations</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-3">Ready to Build Something Amazing?</h3>
                            <p className="text-blue-100 mb-6">
                                I'm open to frontend development opportunities where I can contribute to meaningful projects and grow my skills.
                            </p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <a href="/projects" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                                    View Projects
                                </a>
                                <a href="mailto:indrasish820@gmail.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;