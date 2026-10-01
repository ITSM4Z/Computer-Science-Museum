import React from 'react';

interface RibbonNode {
  title: string;
  eraId: string;
  year: string;
  icon: string;
}

const NODES: RibbonNode[] = [
  { title: 'Algorithm', eraId: 'foundations', year: 'c. 825 CE', icon: '∑' },
  { title: 'Mechanical', eraId: 'mechanical', year: '1642', icon: '⚙' },
  { title: 'Mainframe', eraId: 'early-electronic', year: '1945', icon: '⌸' },
  { title: 'PC', eraId: 'personal-computing', year: '1977', icon: '⌨' },
  { title: 'Internet', eraId: 'internet-web', year: '1989', icon: '🌐' },
  { title: 'Smartphone', eraId: 'mobile-cloud', year: '2007', icon: '📱' },
  { title: 'AI', eraId: 'ai-emerging', year: '2017+', icon: '✦' }
];

interface EvolutionRibbonProps {
  onSelectEra: (eraId: string) => void;
}

export const EvolutionRibbon: React.FC<EvolutionRibbonProps> = ({ onSelectEra }) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '920px',
      margin: '2.5rem auto 0 auto',
      padding: '1.25rem 1.25rem',
      background: 'rgba(17, 24, 39, 0.75)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      backdropFilter: 'blur(8px)',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '0.4rem'
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-muted)'
        }}>
          The Arc of Computation
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--accent-blue)'
        }}>
          Click any paradigm to filter timeline
        </span>
      </div>

      {/* Horizontal Scroll Area with Visual Edge Gradient */}
      <div className="scroll-fade-wrap">
        <div
          className="ribbon-track scroll-track-smooth"
          style={{
            position: 'relative',
            paddingBottom: '0.5rem',
            paddingTop: '0.25rem',
            gap: '0.5rem',
            justifyContent: 'space-between'
          }}
        >
          {/* Horizontal connecting line (Desktop only) */}
          <div style={{
            position: 'absolute',
            top: '22px',
            left: '32px',
            right: '32px',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.5), rgba(56, 189, 248, 0.5), rgba(129, 140, 248, 0.5), rgba(244, 63, 94, 0.5))',
            zIndex: 0
          }} className="ribbon-line" />

          {NODES.map((node) => (
            <button
              key={node.title}
              onClick={() => onSelectEra(node.eraId)}
              className="ribbon-node-btn"
              aria-label={`Filter timeline to ${node.title} paradigm, era: ${node.year}`}
              title={`Filter timeline for: ${node.title} (${node.year})`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1,
                padding: '0 0.35rem',
                minWidth: '76px',
                flexShrink: 0
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-surface)',
                border: '2px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.15rem',
                color: 'var(--text-primary)',
                transition: 'all var(--transition-fast)',
                boxShadow: 'var(--shadow-sm)'
              }} className="ribbon-circle">
                {node.icon}
              </div>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginTop: '0.5rem',
                whiteSpace: 'nowrap'
              }}>
                {node.title}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)'
              }}>
                {node.year}
              </span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .ribbon-node-btn:hover .ribbon-circle {
          border-color: var(--accent-blue) !important;
          transform: scale(1.12);
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.4);
          background: var(--bg-card-hover) !important;
        }
        @media (max-width: 768px) {
          .ribbon-line {
            display: none !important;
          }
          .ribbon-track {
            justify-content: flex-start !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
};
