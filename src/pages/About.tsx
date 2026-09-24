import { Github, Linkedin, Mail, MapPin, GraduationCap } from 'lucide-react';
import { myImages } from '../utils';
import { ReactNode } from 'react';

const display = { fontFamily: "'Bricolage Grotesque', 'Inter', system-ui, sans-serif" };

const experience = [
    {
        role: 'Full Stack Developer',
        company: 'Webguru Infosystems Pvt Ltd, Kolkata',
        period: 'April 2026 – Present',
        current: true,
        points: [
            'Develop full-stack applications using React/Next.js, Node.js/Express, MySQL and MongoDB across e-commerce and enterprise administration workflows',
            'Built customer-facing and administrative interfaces, integrating REST APIs for catalog, order and business-management modules',
        ],
    },
    {
        role: 'Frontend Developer (React.js)',
        company: 'WebStep Technologies Pvt Ltd, Kolkata',
        period: 'October 2024 – March 2026',
        points: [
            'Built enterprise React/TypeScript applications including CRM and ERP workflows with role-based access control, reusable components and responsive architecture',
            'Designed dynamic forms, conditional validation, multi-step workflows and data tables, improving project delivery speed by ~30%',
            'Developed Node.js/Express REST APIs with JWT authentication and structured error handling; integrated APIs through RTK Query with caching and automatic refetching',
            'Built reusable React Hooks and Context-based state layers for authentication, settings and data-fetching workflows',
        ],
    },
    {
        role: 'Frontend Developer',
        company: 'Biswa Games Pvt Ltd, Kolkata',
        period: 'April 2022 – July 2024',
        points: [
            'Developed responsive React applications and integrated REST APIs for client feedback, CMS and dynamic content-management workflows',
        ],
    },
];

const skills = {
    Languages: ['JavaScript', 'TypeScript', 'SQL'],
    Frontend: ['React.js', 'Next.js', 'Redux', 'RTK Query', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Responsive UI', 'Dynamic Forms'],
    Backend: ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'MongoDB', 'JWT Auth', 'Middleware'],
    'Generative AI': ['Google Gemini API', 'LLM Integration', 'Function / Tool Calling', 'Structured JSON Outputs', 'RAG'],
    'Tools & Cloud': ['Git', 'Postman', 'Vercel', 'Render', 'Oracle Cloud VM', 'Production Configuration'],
};

const education = [
    { degree: 'B.Tech in Computer Science', institution: 'Techno India University, Kolkata', period: 'Aug 2019 – Jul 2022', grade: 'CGPA 8.1' },
    { degree: 'Diploma in Computer Science', institution: 'Kalna Polytechnic, Bardhaman', period: 'Jul 2016 – Jun 2019', grade: '69%' },
];

const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/BanerjeeIndrasish' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/indrasish-banerjee-a61225191' },
    { icon: Mail, label: 'Email', href: 'mailto:indrasish820@gmail.com' },
];

const Heading = ({ children }: { children: ReactNode }) => (
    <h2 style={display} className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B1F3B] mb-8">{children}</h2>
);

const About = () => (
    <section className="min-h-screen bg-[#F4F6FB] text-[#1B1F3B] py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h1 style={display} className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none mb-12 lg:mb-16">
                About me
            </h1>

            <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
                {/* Sticky profile rail */}
                <aside className="lg:sticky lg:top-8 self-start">
                    <div className="rounded-3xl bg-[#1B1F3B] p-6 text-white">
                        <img
                            src={myImages.myImg}
                            alt="Indrasish Banerjee"
                            className="w-full aspect-square rounded-2xl object-cover"
                        />
                        <h3 style={display} className="mt-5 text-2xl font-bold">Indrasish Banerjee</h3>
                        <p className="text-indigo-200">Full Stack Developer</p>
                        <p className="mt-3 flex items-center gap-1.5 text-sm text-indigo-200">
                            <MapPin size={14} /> Kolkata, West Bengal
                        </p>
                        <div className="mt-6 flex gap-3">
                            {socials.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:bg-amber-300 hover:text-[#1B1F3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>

                <div className="min-w-0 space-y-20">
                    {/* Bio */}
                    <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-slate-700">
                        <p style={display} className="text-2xl sm:text-3xl font-semibold leading-snug text-[#1B1F3B]">
                            I'm a full stack developer with 4+ years of experience turning business problems into
                            fast, dependable web applications.
                        </p>
                        <p>
                            My work covers CRM systems, ERP platforms, AI-powered project management tools, e-commerce
                            workflows and government portals. I build role-based dashboards, dynamic forms and JWT-secured APIs,
                            and add generative AI features such as LLM function calling, structured JSON outputs and RAG.
                        </p>
                        <p>
                            I started on the frontend and grew into the backend with Express.js, MySQL and MongoDB. I also
                            deploy what I build, on Oracle Cloud VM, Vercel and Render.
                        </p>
                    </div>

                    {/* Experience: a real sequence, so it gets a timeline */}
                    <div>
                        <Heading>Experience</Heading>
                        <ol className="relative border-l-2 border-slate-300 ml-2">
                            {experience.map((exp) => (
                                <li key={exp.role + exp.period} className="relative pl-8 pb-12 last:pb-0">
                                    <span
                                        className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-[#F4F6FB] ${exp.current ? 'bg-indigo-600 ring-4 ring-indigo-600/20' : 'bg-slate-400'
                                            }`}
                                    />
                                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                                        <h3 style={display} className="text-xl font-bold">{exp.role}</h3>
                                        <span className="text-sm font-medium text-slate-500">{exp.period}</span>
                                    </div>
                                    <p className="mt-0.5 font-medium text-indigo-600">{exp.company}</p>
                                    <ul className="mt-4 space-y-2.5 text-slate-600 leading-relaxed max-w-2xl">
                                        {exp.points.map((p) => (
                                            <li key={p} className="flex gap-3">
                                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Skills */}
                    <div>
                        <Heading>Skills</Heading>
                        <div className="border-t border-slate-300">
                            {Object.entries(skills).map(([cat, items]) => (
                                <div key={cat} className="grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-6 border-b border-slate-300 py-5">
                                    <h3 style={display} className="font-bold">{cat}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((s) => (
                                            <span key={s} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium ring-1 ring-slate-200 transition hover:ring-indigo-500 hover:text-indigo-700">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <Heading>Education</Heading>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {education.map((e) => (
                                <div key={e.degree} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                                    <GraduationCap className="mb-4 text-indigo-600" size={24} />
                                    <h3 style={display} className="text-lg font-bold leading-snug">{e.degree}</h3>
                                    <p className="mt-1 text-slate-600">{e.institution}</p>
                                    <div className="mt-4 flex items-center justify-between text-sm">
                                        <span className="text-slate-500">{e.period}</span>
                                        <span className="rounded-full bg-amber-200 px-3 py-1 font-semibold">{e.grade}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;