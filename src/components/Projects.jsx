'use client';
import { useState } from 'react';
import './Projects.css';

const projects = [
    {
        icon: '🛒',
        title: 'Pet Food E-commerce Platform',
        subtitle: 'Full-Stack & DevOps Integration',
        type: 'Full-Stack',
        features: [
            { label: 'Engineering Challenge', text: 'Built a production-ready e-commerce system with a Golang (Gin) backend and React (Vite) frontend.' },
            { label: 'DevOps Excellence', text: 'Orchestrated the entire environment using Docker Compose, managing multi-container services.' },
            { label: 'Traffic Management', text: 'Configured Nginx as a Reverse Proxy to secure internal API endpoints and manage routing.' },
            { label: 'Automation', text: 'Developed a CI/CD Pipeline to automate testing and deployment.' },
            { label: 'Reliability', text: 'Implemented JWT Authentication and used Playwright for End-to-End integration testing.' },
        ],
        tags: ['Golang', 'React', 'Docker', 'Nginx', 'GitHub Actions', 'Playwright'],
        github: 'https://github.com/Daijirew/E-commerce-miniproject',
        description: 'A production-ready e-commerce platform built to demonstrate seamless integration between a Golang (Gin) backend and a React (Vite) frontend. The entire environment is orchestrated with Docker Compose, managed through Nginx reverse proxy, and automated with a CI/CD pipeline using GitHub Actions. Features include JWT authentication, role-based access control, shopping cart management, and end-to-end testing with Playwright.',
        images: [
            'https://placehold.co/800x450/0ea5e9/ffffff?text=Pet+Food+E-commerce+Homepage',
            'https://placehold.co/800x450/7c3aed/ffffff?text=Product+Catalog+Page',
            'https://placehold.co/800x450/3b82f6/ffffff?text=Docker+Compose+Architecture',
        ],
    },
    {
        icon: '🔍',
        title: 'eZview Backoffice Test Automation',
        subtitle: 'Internship @ MapPointAsia (MLS)',
        type: 'QA Automation',
        features: [
            { label: 'Architecture', text: 'Developed a scalable E2E Automation Framework using Playwright and Node.js based on Page Object Model (POM).' },
            { label: 'Scalability', text: 'Implemented Data-Driven Testing using JSON to validate complex business logic across multiple modules.' },
            { label: 'Reliability', text: 'Integrated auto-retries and network idle strategies to enhance test stability in dynamic environments.' },
        ],
        tags: ['Playwright', 'Node.js', 'POM', 'JSON', 'E2E Testing'],
        github: 'https://github.com/Daijirew/Portfolio-Software-Tester',
        description: 'A scalable End-to-End Automation Framework built during an internship at MapPointAsia Logistics Solutions (MLS). The framework uses Playwright and Node.js with a Page Object Model (POM) architecture, enabling Data-Driven Testing via JSON configurations. Integrated auto-retries and network idle strategies ensure high test stability across dynamic web environments and multiple business modules.',
        images: [
            'blob:https://gemini.google.com/3c08be22-2aac-429f-8d32-76866374a7eb',
            'blob:https://gemini.google.com/e8a773e9-391d-49d8-b328-72ade99a51f9',
            'blob:https://gemini.google.com/68f2c0c4-2bb7-48da-acca-154e268e3361',
        ],
    },
    {
        icon: '🐱',
        title: 'Cat Sitter App',
        subtitle: 'Cross-platform Mobile Engineering',
        type: 'Mobile',
        features: [
            { label: 'Core Tech', text: 'Developed a real-time mobile application using Flutter and Dart.' },
            { label: 'Integration', text: 'Integrated Stripe API for secure payments and Google Maps API for real-time geolocation services.' },
            { label: 'Cloud Logic', text: 'Utilized Firebase Cloud Functions (Node.js) for serverless backend logic and Firestore for real-time chat.' },
        ],
        tags: ['Flutter', 'Dart', 'Firebase', 'Stripe API', 'Google Maps'],
        github: 'https://github.com/Daijirew/ProjectCs',
        description: 'A cross-platform mobile application for connecting cat owners with trusted sitters. Built with Flutter and Dart for a seamless user experience across iOS and Android. Features real-time chat powered by Firebase Firestore, secure payments via Stripe API, geolocation services via Google Maps API, and serverless backend logic through Firebase Cloud Functions (Node.js).',
        images: [
            'https://placehold.co/800x450/0ea5e9/ffffff?text=Cat+Sitter+App+Home',
            'https://placehold.co/800x450/7c3aed/ffffff?text=Booking+Interface',
            'https://placehold.co/800x450/3b82f6/ffffff?text=Real-time+Chat+Feature',
        ],
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImage(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImage(0);
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImage((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    return (
        <section className="projects section section-alt" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    Production-ready applications showcasing full-stack development, DevOps integration, and quality engineering.
                </p>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <div className="glass-card project-card" key={i}>
                            <div className="project-header">
                                <div className="project-icon">{project.icon}</div>
                                <span className="project-type">{project.type}</span>
                            </div>

                            <h3>{project.title}</h3>
                            <p className="project-subtitle">{project.subtitle}</p>

                            <ul className="project-features">
                                {project.features.map((feat, j) => (
                                    <li key={j}>
                                        <span className="feature-icon">▹</span>
                                        <span><strong>{feat.label}:</strong> {feat.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="project-tags">
                                {project.tags.map((tag, k) => (
                                    <span className="project-tag" key={k}>{tag}</span>
                                ))}
                            </div>

                            <button className="btn btn-primary project-detail-btn" onClick={() => openModal(project)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="project-modal-overlay" onClick={closeModal}>
                    <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal} aria-label="Close">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        {/* Image Carousel */}
                        <div className="modal-carousel">
                            <img
                                src={selectedProject.images[currentImage]}
                                alt={`${selectedProject.title} screenshot ${currentImage + 1}`}
                                className="modal-image"
                            />
                            {selectedProject.images.length > 1 && (
                                <>
                                    <button className="carousel-btn carousel-prev" onClick={prevImage} aria-label="Previous">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6" />
                                        </svg>
                                    </button>
                                    <button className="carousel-btn carousel-next" onClick={nextImage} aria-label="Next">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </button>
                                    <div className="carousel-dots">
                                        {selectedProject.images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                className={`carousel-dot ${idx === currentImage ? 'active' : ''}`}
                                                onClick={() => setCurrentImage(idx)}
                                                aria-label={`Image ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Modal Content */}
                        <div className="modal-body">
                            <div className="modal-header-info">
                                <div className="project-icon">{selectedProject.icon}</div>
                                <div>
                                    <h3 className="modal-title">{selectedProject.title}</h3>
                                    <p className="modal-subtitle">{selectedProject.subtitle}</p>
                                </div>
                                <span className="project-type">{selectedProject.type}</span>
                            </div>

                            <p className="modal-description">{selectedProject.description}</p>

                            <div className="modal-tech">
                                <h4>Tech Stack</h4>
                                <div className="project-tags">
                                    {selectedProject.tags.map((tag, k) => (
                                        <span className="project-tag" key={k}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-features">
                                <h4>Key Highlights</h4>
                                <ul className="project-features">
                                    {selectedProject.features.map((feat, j) => (
                                        <li key={j}>
                                            <span className="feature-icon">▹</span>
                                            <span><strong>{feat.label}:</strong> {feat.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-actions">
                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    View on GitHub
                                </a>
                                <button className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
