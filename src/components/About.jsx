'use client';
import './About.css';

const highlights = [
    {
        icon: '🧪',
        title: 'Test-First Mindset',
        description: 'Background in QA brings a reliability-focused approach to every line of code.',
    },
    {
        icon: '🐳',
        title: 'Containerized Solutions',
        description: 'Architecting scalable systems with Docker, Docker Compose, and Nginx.',
    },
    {
        icon: '🚀',
        title: 'Automated Pipelines',
        description: 'CI/CD workflows with GitHub Actions for seamless deployment.',
    },
];

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual">
                        <div className="about-visual-card">
                            <div className="about-visual-inner">
                                <div className="about-visual-icon">⚡</div>
                                <div className="about-stats">
                                    <div className="about-stat">
                                        <div className="about-stat-value">3+</div>
                                        <div className="about-stat-label">Projects</div>
                                    </div>
                                    <div className="about-stat">
                                        <div className="about-stat-value">Full-Stack</div>
                                        <div className="about-stat-label">Expertise</div>
                                    </div>
                                    <div className="about-stat">
                                        <div className="about-stat-value">DevOps</div>
                                        <div className="about-stat-label">Integration</div>
                                    </div>
                                    <div className="about-stat">
                                        <div className="about-stat-value">QA</div>
                                        <div className="about-stat-label">Background</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-text">
                        <h2 className="section-title">The Engineering Edge</h2>
                        <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>About Me</p>
                        <p>
                            With a solid foundation in Software Quality Assurance, I bring a unique
                            &quot;test-first&quot; perspective to software engineering. I don&apos;t just build
                            features; I architect scalable, containerized solutions with built-in
                            reliability and automated deployment pipelines.
                        </p>

                        <div className="about-highlights">
                            {highlights.map((item, i) => (
                                <div className="about-highlight" key={i}>
                                    <div className="about-highlight-icon">{item.icon}</div>
                                    <div className="about-highlight-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
