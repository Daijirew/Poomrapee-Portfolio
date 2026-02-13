'use client';
import { useState, useEffect, useCallback } from 'react';
import './Hero.css';

const titles = ['Software Engineer', 'Full-Stack Developer'];
const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE_DELAY = 1500;

export default function Hero() {
    const [text, setText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const tick = useCallback(() => {
        const current = titles[titleIndex];

        if (!isDeleting) {
            // Typing
            const next = current.slice(0, text.length + 1);
            setText(next);
            if (next === current) {
                // Finished typing — pause then delete
                setTimeout(() => setIsDeleting(true), PAUSE_DELAY);
                return;
            }
        } else {
            // Deleting
            const next = current.slice(0, text.length - 1);
            setText(next);
            if (next === '') {
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % titles.length);
                return;
            }
        }
    }, [text, titleIndex, isDeleting]);

    useEffect(() => {
        const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED;
        const timer = setTimeout(tick, speed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting]);

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
            </div>

            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Open to opportunities
                </div>

                <h1 className="hero-name">
                    <span className="gradient-text">Poomrapee Patum</span>
                </h1>

                <p className="hero-title">
                    <span className="typed-text">{text}</span>
                    <span className="typed-cursor">|</span>
                </p>

                <p className="hero-description">
                    Bridging the gap between high-quality code and robust infrastructure.
                    Specializing in Golang, React, and Automated Systems.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
