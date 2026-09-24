import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, ArrowUpRight, Mail, Code2, Cpu, Database, Cloud } from 'lucide-react';
import { myImages, projects } from '../utils';
import { ReactNode } from 'react';
import { RowProps } from '../types';

const display = { fontFamily: "'Bricolage Grotesque', 'Inter', system-ui, sans-serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

const stats = [
    { value: '4+', label: 'Years building for the web' },
    { value: `${projects.length}+`, label: 'Projects shipped' },
    { value: '3', label: 'Cloud platforms deployed to' },
    { value: '30 days', label: 'Notice period' },
];

// Bento content: each tile is a different size on purpose, so the grid has a hierarchy.
const areas = [
    {
        icon: Code2, span: 'md:col-span-4', tone: 'bg-[#1B1F3B] text-white', sub: 'text-indigo-200',
        title: 'Enterprise apps',
        text: 'CRM and ERP products with role-based access, multi-step forms, conditional validation and data-heavy tables.',
        tags: ['React', 'TypeScript', 'Redux', 'RTK Query', 'UI Library'],
    },
    {
        icon: Cpu, span: 'md:col-span-2', tone: 'bg-amber-300 text-[#1B1F3B]', sub: 'text-[#1B1F3B]/70',
        title: 'Generative AI',
        text: 'Assistants that call tools, return structured JSON and answer from your data with RAG.',
        tags: ['Gemini API', 'RAG'],
    },
    {
        icon: Database, span: 'md:col-span-3', tone: 'bg-white text-[#1B1F3B] ring-1 ring-slate-200', sub: 'text-slate-600',
        title: 'APIs and databases',
        text: 'Express REST APIs with JWT auth, clean error handling and MySQL or MongoDB behind them.',
        tags: ['Node.js', 'Express', 'MySQL', 'MongoDB'],
    },
    {
        icon: Cloud, span: 'md:col-span-3', tone: 'bg-white text-[#1B1F3B] ring-1 ring-slate-200', sub: 'text-slate-600',
        title: 'E-commerce and deployment',
        text: 'Catalog, order and payment flows, then shipped to production and kept running.',
        tags: ['Oracle Cloud VM', 'Vercel', 'Render'],
    },
];

const Str = ({ children }: { children: ReactNode }) => <span className="text-emerald-300">"{children}"</span>;
const Key = ({ children }: { children: ReactNode }) => <span className="text-sky-300">"{children}"</span>;
const Row = ({ k, children, last }: RowProps) => (
    <div className="pl-5 sm:pl-6">
        <Key>{k}</Key>
        <span className="text-slate-500">: </span>
        {children}
        {!last && <span className="text-slate-500">,</span>}
    </div>
);
const Arr = ({ items }: any) => (
    <>
        <span className="text-slate-500">[</span>
        {items.map((it: any, i: any) => (
            <span key={it}>
                <Str>{it}</Str>
                {i < items.length - 1 && <span className="text-slate-500">, </span>}
            </span>
        ))}
        <span className="text-slate-500">]</span>
    </>
);

const Home = () => {
    const reduce = useReducedMotion();
    const list = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: reduce ? 0 : 0.25 } } };
    const item = { hidden: { opacity: reduce ? 1 : 0, x: reduce ? 0 : -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.25 } } };

    return (
        <section className="min-h-screen bg-[#F4F6FB] text-[#1B1F3B] overflow-hidden">
            {/* Hero */}
            <div
                className="relative"
                style={{ backgroundImage: 'radial-gradient(#c7cde4 1px, transparent 1px)', backgroundSize: '22px 22px' }}
            >
                <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-16 lg:pt-24 lg:pb-24 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-14 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative shrink-0">
                                <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-amber-300" />
                                <img
                                    src={myImages.myImg}
                                    alt="Indrasish Banerjee"
                                    className="relative h-20 w-20 rounded-2xl object-cover ring-2 ring-white"
                                />
                            </div>
                            <div className="text-sm">
                                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200 font-medium">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                    </span>
                                    Open to new roles
                                </div>
                                <div className="mt-2 flex items-center gap-1 text-slate-600">
                                    <MapPin size={14} /> Kolkata, West Bengal
                                </div>
                            </div>
                        </div>

                        <h1
                            style={display}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.98] tracking-tight"
                        >
                            Indrasish
                            <br />
                            Banerjee
                        </h1>
                        <p style={display} className="mt-5 text-xl sm:text-2xl font-semibold text-indigo-600">
                            Full stack developer who ships AI features
                        </p>
                        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                            I build React and Node.js products for businesses: CRMs, ERPs, e-commerce and government portals.
                            Currently at Webguru Infosystems, adding LLM features that hold up in production.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="/projects"
                                className="group inline-flex items-center gap-2 rounded-xl bg-[#1B1F3B] px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                View projects
                                <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                            <a
                                href="mailto:indrasish820@gmail.com"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold ring-1 ring-slate-300 transition hover:ring-indigo-600 hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <Mail size={18} /> Email me
                            </a>
                        </div>
                    </div>

                    {/* The one memorable moment: profile as a live-typed JSON file */}
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-amber-300/40 blur-2xl" aria-hidden />
                        <div className="relative rounded-2xl bg-[#12142B] shadow-2xl ring-1 ring-white/10">
                            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                                <span className="h-3 w-3 rounded-full bg-rose-400" />
                                <span className="h-3 w-3 rounded-full bg-amber-300" />
                                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                                <span style={mono} className="ml-3 text-xs text-slate-400">indrasish.json</span>
                            </div>
                            <motion.div
                                variants={list}
                                initial="hidden"
                                animate="show"
                                style={mono}
                                className="p-5 text-[13px] sm:text-sm leading-7 text-slate-200 overflow-x-auto"
                            >
                                <motion.div variants={item} className="text-slate-500">{'{'}</motion.div>
                                <motion.div variants={item}><Row k="role"><Str>Full Stack Developer</Str></Row></motion.div>
                                <motion.div variants={item}><Row k="experience"><Str>4+ years</Str></Row></motion.div>
                                <motion.div variants={item}><Row k="frontend"><Arr items={['React', 'Next.js', 'TypeScript']} /></Row></motion.div>
                                <motion.div variants={item}><Row k="backend"><Arr items={['Node.js', 'Express', 'MySQL', 'MongoDB']} /></Row></motion.div>
                                <motion.div variants={item}><Row k="ai"><Arr items={['Gemini API', 'Tool calling', 'RAG']} /></Row></motion.div>
                                <motion.div variants={item}><Row k="deploys"><Arr items={['Oracle Cloud', 'Vercel', 'Render']} /></Row></motion.div>
                                <motion.div variants={item}>
                                    <Row k="available" last><span className="text-amber-300">true</span></Row>
                                </motion.div>
                                <motion.div variants={item} className="text-slate-500">
                                    {'}'}
                                    <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-indigo-400 motion-safe:animate-pulse" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats: one quiet row instead of four coloured cards */}
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px border-y border-slate-300 bg-slate-300">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-[#F4F6FB] px-4 py-7 sm:px-6">
                            <dt style={display} className="text-4xl sm:text-5xl font-extrabold tracking-tight">{s.value}</dt>
                            <dd className="mt-1 text-sm text-slate-600">{s.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* What I build */}
            <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
                <h2 style={display} className="max-w-2xl text-3xl sm:text-4xl font-extrabold tracking-tight">
                    From the interface to the database to the server it runs on
                </h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-4">
                    {areas.map(({ icon: Icon, ...a }) => (
                        <div key={a.title} className={`${a.span} ${a.tone} rounded-3xl p-7 sm:p-8 flex flex-col`}>
                            <Icon className="h-7 w-7 mb-6" />
                            <h3 style={display} className="text-2xl font-bold">{a.title}</h3>
                            <p className={`mt-2 leading-relaxed ${a.sub}`}>{a.text}</p>
                            <div className="mt-6 flex flex-wrap gap-2 pt-2">
                                {a.tags.map((t) => (
                                    <span key={t} className="rounded-full border border-current/25 px-3 py-1 text-xs font-medium opacity-90">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Closing */}
            <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-20">
                <div className="rounded-3xl bg-[#1B1F3B] px-7 py-12 sm:px-14 sm:py-16 text-white flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div className="max-w-xl">
                        <h2 style={display} className="text-3xl sm:text-4xl font-extrabold tracking-tight">Have a product that needs building?</h2>
                        <p className="mt-3 text-indigo-200 leading-relaxed">
                            I'm looking for full stack and AI-driven roles where I can own features from design to deployment.
                        </p>
                    </div>
                    <a
                        href="mailto:indrasish820@gmail.com"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-300 px-7 py-4 font-bold text-[#1B1F3B] transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                    >
                        Email me <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;