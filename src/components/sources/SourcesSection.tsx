import React, { useState } from 'react';
import { SOURCES } from '../../data/sources';
import { ExternalLinkIcon, BookOpenIcon } from '../common/Icons';

interface SourcesSectionProps {
  onOpenAboutModal: () => void;
}

export const SourcesSection: React.FC<SourcesSectionProps> = ({ onOpenAboutModal }) => {
  const [filterType, setFilterType] = useState<string>('All');

  const types = ['All', 'Museum Archive', 'University & Academic', 'Professional Organization', 'Primary Historical Document', 'Standards Body & Consortium', 'Peer-Reviewed Journal', 'Peer-Reviewed Conference'];

  const filteredSources = filterType === 'All'
    ? SOURCES
    : SOURCES.filter((s) => s.type === filterType);

  return (
    <section id="sources" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Academic & Archival Provenance</div>
          <h2 className="section-title">Historical Sources & Bibliography</h2>
          <p className="section-description">
            All historical dates, technical mechanisms, and pioneer biographies were synthesized from primary documents, museum archives, and academic encyclopedias.
          </p>
        </div>

        {/* About Project Highlight Box */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9))',
          border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          marginBottom: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--accent-blue)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.5rem'
            }}>
              <BookOpenIcon size={16} />
              <span>Project Background & Methodology</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-highlight)' }}>
              Pathy AI Program Final Project: Computer Science Museum
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              This educational exhibit was created as a final project for the Pathy AI Program exploring the history of computer science. Developed with AI assistance and rigorously reviewed, curated, and validated against reputable historical archives.
            </p>
          </div>

          <button
            onClick={onOpenAboutModal}
            className="btn btn-primary"
            style={{ whiteSpace: 'nowrap' }}
          >
            Read Methodology & AI Log
          </button>
        </div>

        {/* Source Filter Tabs with Smooth Horizontal Scroll */}
        <div className="scroll-fade-wrap" style={{ marginBottom: '1.75rem' }}>
          <div
            className="scroll-track-smooth"
            style={{
              display: 'flex',
              gap: '0.45rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem'
            }}
          >
            {types.map((t) => {
              const isSelected = filterType === t;
              return (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
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
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sources Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem'
        }}>
          {filteredSources.map((source) => (
            <article
              key={source.id}
              className="museum-card"
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="museum-card-content">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent-cyan)',
                    background: 'var(--accent-cyan-subtle)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(6, 182, 212, 0.25)'
                  }}>
                    {source.type}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--text-highlight)' }}>
                  {source.title}
                </h3>

                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--accent-amber)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.85rem'
                }}>
                  {source.institution}
                </div>

                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55,
                  marginBottom: '1rem'
                }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Supported Content:</strong> {source.supportedTopics}
                </div>

                <p style={{
                  fontSize: '0.825rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  fontStyle: 'italic',
                  marginBottom: '1rem'
                }}>
                  {source.annotation}
                </p>
              </div>

              <div className="museum-card-footer">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Visit Authoritative Archive</span>
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
