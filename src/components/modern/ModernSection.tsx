import React, { useState } from 'react';
import { MODERN_TOPICS } from '../../data/modern';

export const ModernSection: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(MODERN_TOPICS[0].id);

  const activeTopic = MODERN_TOPICS.find((t) => t.id === selectedTopicId) || MODERN_TOPICS[0];

  return (
    <section id="modern-cs" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">The Contemporary Frontier</div>
          <h2 className="section-title">Computing Today</h2>
          <p className="section-description">
            Modern computer science touches every facet of civilization. Discover how 8 contemporary frontiers evolved from historical milestones, separating current technological reality from speculative research.
          </p>
        </div>

        {/* Domain Navigation Pills with Horizontal Scroll */}
        <div className="scroll-fade-wrap" style={{ marginBottom: '2rem' }}>
          <div
            className="scroll-track-smooth"
            role="tablist"
            aria-label="Contemporary Computing Frontiers"
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.75rem'
            }}
          >
            {MODERN_TOPICS.map((topic) => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  id={`modern-tab-${topic.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`modern-panel-${topic.id}`}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className="btn btn-sm"
                  style={{
                    background: isSelected ? 'var(--accent-blue)' : 'var(--bg-card)',
                    color: isSelected ? '#000' : 'var(--text-secondary)',
                    borderColor: isSelected ? 'var(--accent-blue)' : 'var(--border-subtle)',
                    fontWeight: isSelected ? 700 : 500,
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  {topic.title.split('&')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Domain Deep-Dive Container */}
        <div
          role="tabpanel"
          id={`modern-panel-${activeTopic.id}`}
          aria-labelledby={`modern-tab-${activeTopic.id}`}
          className="museum-card"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)'
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '1.25rem'
          }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-cyan)'
              }}>
                Current Discipline Profile
              </span>
              <h3 style={{ fontSize: 'clamp(1.35rem, 3.5vw, 1.85rem)', color: 'var(--text-highlight)', marginTop: '0.35rem' }}>
                {activeTopic.title}
              </h3>
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--accent-amber)',
              fontFamily: 'var(--font-mono)',
              fontStyle: 'italic'
            }}>
              “{activeTopic.tagline}”
            </div>
          </div>

          {/* 4-Box Dimensional Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '1.75rem'
          }}>
            {/* Box 1: Current Reality */}
            <div style={{
              padding: '1.25rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                color: 'var(--accent-emerald)',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)' }} />
                <span>Current Technological Reality</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.65 }}>
                {activeTopic.currentReality}
              </p>
            </div>

            {/* Box 2: Historical Roots */}
            <div style={{
              padding: '1.25rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                color: 'var(--accent-blue)',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
                <span>Roots in Computing History</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {activeTopic.historicalRoots}
              </p>
            </div>

            {/* Box 3: Speculative Horizons */}
            <div style={{
              padding: '1.25rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                color: 'var(--accent-violet)',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-violet)' }} />
                <span>Speculative Research Horizons</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {activeTopic.speculativeFuture}
              </p>
            </div>

            {/* Box 4: Ethical & Societal Dilemmas */}
            <div style={{
              padding: '1.25rem',
              background: 'rgba(245, 158, 11, 0.05)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(245, 158, 11, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                color: 'var(--accent-amber)',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-amber)' }} />
                <span>Societal & Ethical Frontier</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.65 }}>
                {activeTopic.ethicalConsiderations}
              </p>
            </div>
          </div>

          {/* Related Milestones Ribbon */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.825rem'
          }}>
            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Connected Historical Milestones:
            </span>
            {activeTopic.keyMilestonesTied.map((milestoneName) => (
              <span
                key={milestoneName}
                style={{
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem'
                }}
              >
                {milestoneName}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
