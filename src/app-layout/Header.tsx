import { Menu, X, Code2, Home, Info, Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router';

export default function Header() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(location.pathname ?? '/home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setActiveSection(location.pathname)
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'Home',
            href: '/home',
            icon: <Home className='w-4 h-4 text-blue-400' />
        },
        {
            name: 'Projects',
            href: '/projects',
            icon: <Briefcase className='w-4 h-4 text-blue-400' />
        },
        {
            name: 'About',
            href: '/about',
            icon: <Info className='w-4 h-4 text-blue-400' />
        }
    ];

    return (
        <nav
            className={`h-16 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/65 backdrop-blur-md shadow-lg' : 'bg-slate-900'
                }`}
        >
            <div className="w-full h-16 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    {/* Logo/Brand */}
                    <Link to="/home" className="flex items-center gap-2 group">
                        <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                            <Home className="w-5 h-5 text-white" />
                        </div>
                        {/* <div className="hidden sm:block">
                            <h1 className="text-white font-bold text-md">Indrasish Banerjee</h1>
                            <p className="text-gray-400 text-xs">Frontend Developer</p>
                        </div> */}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="h-full hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setActiveSection(link.href)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeSection === link.href
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                <div className='flex items-center gap-1.5'>
                                    {link.icon}
                                    {link.name}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800 transition-colors"
                        aria-label="Toggle menu"
                        style={{
                            backgroundColor: isMenuOpen ? 'red' : ''
                        }}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-800">
                    <div className="px-4 py-3 space-y-1 bg-slate-900/98 backdrop-blur-md">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.href
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                                    }`}
                                onClick={() => {
                                    setActiveSection(link.href);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <div className='flex items-center gap-1'>
                                    {link.icon}
                                    {link.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}