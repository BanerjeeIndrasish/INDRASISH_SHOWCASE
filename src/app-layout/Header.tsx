import { Menu } from 'antd';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router';

export default function Header() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(location.pathname ?? '/home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        console.log('---', activeSection)
    }, [activeSection]);

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
            href: '/home'
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        {
            name: 'About',
            href: '/about'
        }
    ];


    return (
        // <nav className={`min-h-12 fixed w-full mt-auto z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/65 backdrop-blur-md shadow-lg' : 'bg-slate-900'}`}>
        <nav
            className={`w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/65 backdrop-blur-md shadow-lg' : 'bg-slate-900'
                }`}
        >
            <div className="w-full mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between">
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setActiveSection(link.href)}
                        >
                            <h2
                                className={`text-md font-bold
                                    ${activeSection === link.href
                                        ? 'text-blue-400 underline'
                                        : 'text-gray-400 hover:text-white transition-colors duration-300'}
                                    `}
                            >
                                {link.name}
                            </h2>
                        </Link>
                    ))}
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white p-2"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900/98 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-purple-900/50 rounded-md transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
