import React from 'react';
import { SparklesIcon } from './Icons';

interface FooterProps {
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout }) => {
  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-medium)',
      paddingTop: '4rem',
      paddingBottom: '3rem',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Column 1: Museum Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)'
              }}>
                <SparklesIcon size={16} />
              </div>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.15rem',
                color: 'var(--text-highlight)'
              }}>
                Computing Through Time
              </span>
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              From ancient algorithms to artificial intelligence. An interactive educational project exploring the milestones, pioneers, hardware, and software paradigms of computer science.
            </p>
            <div style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-blue)'
            }}>
              Pathy AI Program Project - Computer Science Museum
            </div>
          </div>

          {/* Column 2: Exhibit Sections */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-highlight)',
              marginBottom: '1rem'
            }}>
              Exhibition Halls
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
              <li><a href="#timeline">Interactive Timeline (10 Eras)</a></li>
              <li><a href="#pioneers">Pioneers of Computation</a></li>
              <li><a href="#hardware">Hardware Evolution & Specs</a></li>
              <li><a href="#software">Software Abstraction Layers</a></li>
              <li><a href="#modern-cs">Computing Today & Ethical Frontiers</a></li>
              <li><a href="#quiz">10-Question Knowledge Quiz</a></li>
              <li><a href="#sources">Archival Sources & Citations</a></li>
            </ul>
          </div>

          {/* Column 3: Academic Standards & AI Transparency */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-highlight)',
              marginBottom: '1rem'
            }}>
              Academic Disclosure
            </div>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              Built with AI assistance and verified against primary sources from the Computer History Museum, IEEE Annals, and university archives.
            </p>
            <button
              onClick={onOpenAbout}
              className="btn btn-outline btn-sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Methodology & AI Audit Log
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © Computer Science Museum — Computing Through Time. Pathy AI Program Project. Released under open academic sharing.
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#hero" style={{ color: 'var(--text-secondary)' }}>Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
