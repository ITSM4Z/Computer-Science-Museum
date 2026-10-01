import React from 'react';
import { Modal } from '../common/Modal';
import { SparklesIcon } from '../common/Icons';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId="about-project-title" maxWidth="760px">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SparklesIcon size={22} color="var(--accent-blue)" />
          <h2 id="about-project-title" style={{ fontSize: '1.6rem', margin: 0 }}>
            About This Educational Project
          </h2>
        </div>

        {/* Project Statement */}
        <section>
          <h3 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            color: 'var(--accent-blue)',
            letterSpacing: '0.06em',
            marginBottom: '0.5rem'
          }}>
            1. Purpose & Scope
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-primary)' }}>
            <strong>Computer Science Museum: Computing Through Time</strong> is a comprehensive final project created for the Pathy AI Program as an interactive digital museum exhibit. Its mission is to make the rich, two-and-a-half-millennium arc of computer science accessible, historically accurate, and engaging for students, educators, and curious minds.
          </p>
        </section>

        {/* AI-Assisted Development Statement */}
        <section style={{
          padding: '1.25rem',
          background: 'rgba(56, 189, 248, 0.05)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(56, 189, 248, 0.2)'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            color: 'var(--accent-cyan)',
            letterSpacing: '0.06em',
            marginBottom: '0.5rem'
          }}>
            2. AI-Assisted Development & Human Curation
          </h3>
          <p style={{ fontSize: '0.925rem', lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            In alignment with transparent academic methodology, this project utilized AI assistance during the architectural scaffolding, research synthesis, and rapid prototyping phases.
          </p>
          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <li><strong>Content Verification:</strong> Every historical date, pioneer biography, and technical mechanism was independently cross-checked against reputable museum archives and peer-reviewed literature.</li>
            <li><strong>Original Synthesis:</strong> No verbatim passages were copied from external sources; all technical explanations and historical overviews are original summaries.</li>
            <li><strong>Code Integrity:</strong> The frontend was built with clean, modular TypeScript, semantic HTML5, and accessible CSS tokens designed for human maintainability and peer review.</li>
          </ul>
        </section>

        {/* Student Review & Editorial Principles */}
        <section>
          <h3 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            color: 'var(--accent-amber)',
            letterSpacing: '0.06em',
            marginBottom: '0.5rem'
          }}>
            3. Editorial & Diversity Principles
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
            Early computing is often mistakenly portrayed as the exclusive work of a few Western institutions. This project highlights global contributions—from Mesopotamian counting frames and Islamic Golden Age algebra to the women programmers of ENIAC, NASA’s human computers, and modern network architects.
          </p>
        </section>

        {/* Technical Architecture */}
        <section>
          <h3 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            color: 'var(--accent-violet)',
            letterSpacing: '0.06em',
            marginBottom: '0.5rem'
          }}>
            4. Architecture & Standards
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)'
          }}>
            <div style={{ padding: '0.6rem 0.8rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}>
              • React 18 + Vite (TypeScript)
            </div>
            <div style={{ padding: '0.6rem 0.8rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}>
              • WCAG 2.1 AA Compliant
            </div>
            <div style={{ padding: '0.6rem 0.8rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}>
              • Zero Heavy Dependencies
            </div>
            <div style={{ padding: '0.6rem 0.8rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}>
              • Fully Responsive (375px–1440px)
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <div style={{
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button onClick={onClose} className="btn btn-primary btn-sm">
            Close Dialog
          </button>
        </div>
      </div>
    </Modal>
  );
};
