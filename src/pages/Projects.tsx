import { useMemo, useState, type CSSProperties } from 'react';
import { Briefcase, Calendar, ExternalLink, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../utils';
import { Project, ProjectCardProps } from '../types';


const display: CSSProperties = { fontFamily: "'Bricolage Grotesque', 'Inter', system-ui, sans-serif" };
const INITIAL = 6;

const ProjectCard = ({ project, featured }: ProjectCardProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const links: [string, string][] = (project.link ?? []).flatMap((obj) => Object.entries(obj));
    const dark = featured;

    return (
        <motion.article
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`${featured ? 'md:col-span-2 bg-[#1B1F3B] text-white' : 'bg-white ring-1 ring-slate-200'} rounded-3xl p-7 sm:p-8 flex flex-col`}
        >
            <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${dark ? 'bg-amber-300 text-[#1B1F3B]' : 'bg-indigo-50 text-indigo-700'}`}>
                    {project.type}
                </span>
                {featured && <span className="text-xs text-indigo-200">Most recent</span>}
            </div>

            <h3 style={display} className={`${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'} font-extrabold tracking-tight`}>
                {project.title}
            </h3>

            <div className={`mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm ${dark ? 'text-indigo-200' : 'text-slate-500'}`}>
                <span className="flex items-center gap-1.5"><Briefcase size={15} />{project.company}</span>
                <span className="flex items-center gap-1.5"><Calendar size={15} />{project.period}</span>
            </div>

            <p className={`mt-4 leading-relaxed ${dark ? 'text-slate-200 max-w-3xl' : 'text-slate-600'}`}>{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span key={t} className={`rounded-full px-3 py-1 text-xs font-medium ${dark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'}`}>
                        {t}
                    </span>
                ))}
            </div>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <ul className={`mt-6 grid gap-x-8 gap-y-2.5 text-sm ${featured ? 'md:grid-cols-2' : ''} ${dark ? 'text-slate-200' : 'text-slate-600'}`}>
                            {project.features.map((f) => (
                                <li key={f} className="flex gap-2.5">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-3">
                <button
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 ${dark ? 'text-amber-300' : 'text-indigo-600'}`}
                >
                    {open ? 'Hide features' : 'See features'}
                    <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                <div className="flex gap-2">
                    {links.map(([name, href]) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 ${dark ? 'bg-white/10 hover:bg-white/20' : 'bg-slate-100 hover:bg-indigo-600 hover:text-white'
                                }`}
                        >
                            {name.charAt(0).toUpperCase() + name.slice(1)} <ExternalLink size={14} />
                        </a>
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

const Projects = () => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>('All');

    const types = useMemo<string[]>(() => ['All', ...Array.from(new Set(projects.map((p) => p.type)))], []);
    const filtered: Project[] = filter === 'All' ? projects : projects.filter((p) => p.type === filter);
    const visible: Project[] = showAll ? filtered : filtered.slice(0, INITIAL);

    return (
        <section className="min-h-screen bg-[#F4F6FB] text-[#1B1F3B] py-14 lg:py-20">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <h1 style={display} className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none">
                    Projects
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-slate-600 leading-relaxed">
                    Web applications, admin panels and VR experiences I've built for different industries.
                </p>

                <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">
                    {types.map((t) => (
                        <button
                            key={t}
                            onClick={() => { setFilter(t); setShowAll(false); }}
                            aria-pressed={filter === t}
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ring-1 transition-all duration-200
                            focus-visible:none focus-visible:outline-indigo-600
                            ${filter === t
                                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white ring-2 ring-indigo-400 shadow-lg shadow-indigo-500/50'
                                    : 'bg-white text-slate-700 ring-slate-300 hover:ring-indigo-500 hover:text-indigo-700'
                                }`}
                        >
                            {filter === t && <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />}
                            {t}
                        </button>
                    ))}
                </div>

                <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                        {visible.map((p, i) => (
                            <ProjectCard key={p.title} project={p} featured={i === 0} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filtered.length > INITIAL && (
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={() => setShowAll((s) => !s)}
                            className="rounded-xl bg-[#3B1F3B] px-8 py-3.5 font-semibold border-black shadow-md transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {showAll ? 'Show fewer' : `Show all ${filtered.length} projects`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;