'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@/context/ThemeContext';
import './Navbar.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const rafRef = useRef(null);
    const scrolledRef = useRef(false);

    useEffect(() => {
        const onScroll = () => {
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(() => {
                const isScrolled = window.scrollY > 20;
                if (scrolledRef.current !== isScrolled) {
                    scrolledRef.current = isScrolled;
                    setScrolled(isScrolled);
                }
                rafRef.current = null;
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-inner">
                    <a href="#" className="navbar-logo">{'Poomrapee'}</a>

                    <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={closeMenu}>{link.label}</a>
                            </li>
                        ))}
                        <li>
                            <a href="/resume.pdf" download className="resume-btn-mobile">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Resume
                            </a>
                        </li>
                    </ul>

                    <div className="navbar-actions">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>

                        <a href="/resume.pdf" download className="resume-btn">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Resume
                        </a>

                        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`mobile-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu} />
        </>
    );
}
