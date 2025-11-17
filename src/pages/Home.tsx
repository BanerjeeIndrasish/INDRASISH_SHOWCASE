
import { MapPin } from 'lucide-react';
import { Avatar, Divider } from 'antd';
import { myImages, projects } from '../utils';

// Home Component
const Home = () => {

    return (
        <section className="h-full flex items-center px-4 py-10">
            <div className="mx-auto w-full">
                <div className="flex flex-col items-start gap-6">
                    <div className='w-full flex justify-start items-center gap-6 md:gap-10 lg:gap-14'>
                        <div className="flex items-center gap-4">
                            <Avatar shape='square' size={110} src={myImages.myImg}>IB</Avatar>
                            <div className='flex flex-col justify-start items-start'>
                                <div className="font-bold text-gray-800 text-lg">Indrasish Banerjee</div>
                                <div className="text-gray-600 text-sm flex justify-start items-center gap-1">
                                    <MapPin size={14} />
                                    Kolkata, West Bengal
                                </div>
                                <div className="font-semibold text-gray-800">React Developer</div>
                                <div className="text-sm text-gray-600">WebStep Technologies Private Limited</div>
                                <div className="text-xs text-gray-500 mt-1">Oct 2024 - Present</div>
                            </div>
                        </div>
                    </div>
                    <Divider className='p-0 m-0' />
                    <div className='px-10'>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                            Hi, I'm<br />
                            <span className="text-blue-600">Indrasish Banerjee</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-6">
                            React & TypeScript Developer
                        </p>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            I craft responsive web applications and complex admin panels with modern
                            technologies. From full-stack solutions to immersive VR experiences,
                            I bring ideas to life with clean, scalable code.
                        </p>


                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-blue-600">3.5+</div>
                                <div className="text-sm text-gray-600">Years Exp</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-blue-600">{projects.length}</div>
                                <div className="text-sm text-gray-600">Projects</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-2xl font-bold text-blue-600">10+</div>
                                <div className="text-sm text-gray-600">Tech Stack</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                <div className="text-2xl font-bold text-blue-600">
                                    Available for work
                                </div>
                                <div className="text-sm text-gray-600">Notice Period 60 days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;