'use client';
import { useCallback } from 'react';
import './ResumePopup.css';

const resumeOptions = [
    {
        title: 'Full-Stack Developer | Software Engineer',
        iconPath: (
            <>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
            </>
        ),
        file: '/Resume - Poomrapee Dev.pdf',
        description: 'Development & Engineering focused resume',
    },
    {
        title: 'Quality Assurance',
        iconPath: (
            <>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </>
        ),
        file: '/Resume - Poomrapee QA.pdf',
        description: 'Quality Assurance & Testing focused resume',
    },
];

export default function ResumePopup({ isOpen, onClose }) {
    const handleClose = useCallback(() => {
        document.body.style.overflow = '';
        onClose();
    }, [onClose]);

    if (!isOpen) return null;

    document.body.style.overflow = 'hidden';

    return (
        <div className="resume-popup-overlay" onClick={handleClose}>
            <div className="resume-popup" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={handleClose} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="resume-popup-body">
                    <h3 className="resume-popup-title">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Select Resume
                    </h3>
                    <p className="resume-popup-subtitle">Choose the position you'd like to download:</p>

                    <div className="resume-popup-options">
                        {resumeOptions.map((opt, i) => (
                            <a
                                key={i}
                                href={opt.file}
                                download
                                className="resume-popup-option"
                                onClick={() => setTimeout(handleClose, 400)}
                            >
                                <div className="resume-popup-option-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        {opt.iconPath}
                                    </svg>
                                </div>
                                <div className="resume-popup-option-info">
                                    <span className="resume-popup-option-title">{opt.title}</span>
                                    <span className="resume-popup-option-desc">{opt.description}</span>
                                </div>
                                <svg className="resume-popup-option-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
