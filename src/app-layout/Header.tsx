import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const NAV_LINKS = [
    { name: 'Home', href: '/home' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
];

// Design tokens — keep these hex values in sync with AppLayout.jsx, Home.jsx,
// Projects.jsx and About.jsx if you change the palette.
const fontDisplay = { fontFamily: "'Space Grotesk', sans-serif" };
const fontMono = { fontFamily: "'IBM Plex Mono', monospace" };

export default function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const activePath = location.pathname === '/' ? '/home' : location.pathname;

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b transition-colors duration-300 ${scrolled ? 'border-[#C9CFD8]' : 'border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/home"
                        className="flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6772E] focus-visible:ring-offset-2"
                    >
                        <span
                            className="relative flex items-center justify-center w-9 h-9 text-sm font-semibold text-white bg-[#151A24] select-none"
                            style={fontDisplay}
                        >
                            IB
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#C6772E]" />
                        </span>
                        <span className="hidden sm:flex flex-col leading-tight">
                            <span className="text-sm font-medium text-[#151A24]" style={fontDisplay}>
                                Indrasish Banerjee
                            </span>
                            <span className="text-xs text-[#5B6472]" style={fontMono}>
                                full-stack · genAI
                            </span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => {
                            const isActive = activePath === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6772E] ${isActive ? 'text-[#151A24]' : 'text-[#5B6472] hover:text-[#151A24]'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active-indicator"
                                            className="absolute left-4 right-4 -bottom-[1px] h-[2px] bg-[#C6772E]"
                                            transition={
                                                reduceMotion
                                                    ? { duration: 0 }
                                                    : { type: 'spring', stiffness: 380, damping: 32 }
                                            }
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsMenuOpen((v) => !v)}
                        className="md:hidden p-2 -mr-2 text-[#151A24] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6772E]"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile nav panel */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: 'easeInOut' }}
                        className="md:hidden overflow-hidden bg-white border-t border-[#C9CFD8]"
                    >
                        <div className="px-4 py-2">
                            {NAV_LINKS.map((link) => {
                                const isActive = activePath === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className={`flex items-center py-3 px-3 text-base font-medium border-l-2 ${isActive
                                                ? 'text-[#151A24] border-[#C6772E]'
                                                : 'text-[#5B6472] border-transparent'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}