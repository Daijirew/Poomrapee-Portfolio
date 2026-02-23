'use client';
import './Skills.css';

const skillCategories = [
    {
        icon: '💻',
        title: 'Languages',
        skills: ['Golang', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'Python', 'Java'],
    },
    {
        icon: '🎨',
        title: 'Frontend',
        skills: ['React.js', 'Next.js', 'Flutter', 'Dart', 'Vite', 'Zustand', 'Tailwind CSS'],
    },
    {
        icon: '⚙️',
        title: 'Backend',
        skills: ['Gin (Golang)', 'Node.js', 'GORM', 'RESTful APIs', 'Firebase'],
    },
    {
        icon: '☁️',
        title: 'Cloud & Infrastructure',
        skills: ['Docker', 'Docker Compose', 'AWS', 'Openlandscape Cloud', 'Nginx', 'Supabase (PostgreSQL)'],
    },
    {
        icon: '🔄',
        title: 'CI/CD & Tools',
        skills: ['GitHub Actions', 'Git', 'Jira', 'Swagger'],
    },
    {
        icon: '🧪',
        title: 'Quality Engineering',
        skills: ['Playwright', 'Selenium', 'Robot Framework', 'Cypress', 'k6', 'JMeter', 'Postman'],
    },
];

export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">
                    A comprehensive toolkit spanning full-stack development, cloud infrastructure, and quality engineering.
                </p>

                <div className="skills-grid">
                    {skillCategories.map((cat, i) => (
                        <div className="glass-card skill-category" key={i}>
                            <div className="skill-category-header">
                                <div className="skill-category-icon">{cat.icon}</div>
                                <h3>{cat.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {cat.skills.map((skill, j) => (
                                    <span className="skill-tag" key={j}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
