'use client';
import './WhyHireMe.css';

const points = [
    {
        icon: '🎯',
        title: 'Edge Cases Expert',
        description: 'Natural focus on edge cases and boundary conditions.',
    },
    {
        icon: '📊',
        title: 'Performance Focus',
        description: 'Performance benchmarks and optimization at the core.',
    },
    {
        icon: '🤖',
        title: 'Automated Testing',
        description: 'Every feature ships with comprehensive test coverage.',
    },
    {
        icon: '✅',
        title: 'Production-Ready',
        description: 'Clean, maintainable code ready for production.',
    },
];

export default function WhyHireMe() {
    return (
        <section className="whyhire section" id="contact">
            <div className="whyhire-bg">
                <div className="whyhire-orb whyhire-orb-1"></div>
                <div className="whyhire-orb whyhire-orb-2"></div>
            </div>

            <div className="container whyhire-content">
                <h2 className="section-title">Why Hire Me?</h2>
                <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
                    The QA Advantage in Engineering
                </p>

                <div className="whyhire-quote">
                    My background as a Software Tester Intern at MapPointAsia gives me a
                    competitive advantage in engineering. I write clean, maintainable code
                    with a natural focus on edge cases, performance benchmarks, and automated
                    testing—ensuring that every line of code I ship is production-ready.
                </div>

                <div className="whyhire-points">
                    {points.map((point, i) => (
                        <div className="glass-card whyhire-point" key={i}>
                            <div className="whyhire-point-icon">{point.icon}</div>
                            <h4>{point.title}</h4>
                            <p>{point.description}</p>
                        </div>
                    ))}
                </div>

                <div className="whyhire-actions">
                    <a href="/Resume - Poomrapee.pdf" download className="btn btn-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Resume
                    </a>
                    <a href="mailto:daijirew123@gmail.com" className="btn btn-secondary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
