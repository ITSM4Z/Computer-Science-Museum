import React from 'react';
import { Milestone, EraInfo } from '../../types';
import { CategoryBadge } from '../common/Badge';
import { CheckIcon, ChevronRightIcon } from '../common/Icons';

interface TimelineCardProps {
  milestone: Milestone;
  eraInfo?: EraInfo;
  isExplored: boolean;
  onSelect: (milestone: Milestone) => void;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  milestone,
  eraInfo,
  isExplored,
  onSelect
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(milestone);
    }
  };

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`Milestone: ${milestone.title}, Year: ${milestone.year}. Click to open details.`}
      onClick={() => onSelect(milestone)}
      onKeyDown={handleKeyDown}
      className="museum-card"
      style={{
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderColor: isExplored ? 'rgba(16, 185, 129, 0.35)' : 'var(--border-subtle)',
        borderLeft: eraInfo ? `4px solid ${eraInfo.color}` : undefined
      }}
    >
      <div className="museum-card-content">
        {/* Top Meta Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.85rem',
          flexWrap: 'wrap',
          gap: '0.4rem'
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--accent-blue)',
            background: 'var(--accent-blue-glow)',
            padding: '0.2rem 0.55rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-accent)'
          }}>
            {milestone.year}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CategoryBadge category={milestone.category} />
            {isExplored && (
              <span
                title="Explored"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.75rem',
                  color: 'var(--accent-emerald)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600
                }}
              >
                <CheckIcon size={14} color="var(--accent-emerald)" />
                <span className="sr-only">Explored</span>
              </span>
            )}
          </div>
        </div>

        {/* Milestone Title with Human-Readable Typographic Styling */}
        <h3 style={{
          fontSize: '1.2rem',
          lineHeight: 1.35,
          marginBottom: '0.45rem',
          color: 'var(--text-highlight)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 700
        }}>
          {milestone.title}
        </h3>

        {/* Key Pioneer / Institution */}
        <div style={{
          fontSize: '0.825rem',
          color: 'var(--accent-amber)',
          fontFamily: 'var(--font-mono)',
          marginBottom: '0.75rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {milestone.pioneer}
        </div>

        {/* Short Summary with Balanced Multi-line Clamping */}
        <p style={{
          fontSize: '0.925rem',
          lineHeight: 1.6,
          color: 'var(--text-secondary)',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          marginBottom: '1rem'
        }}>
          {milestone.summary}
        </p>
      </div>

      {/* Card Footer locked to the bottom */}
      <div className="museum-card-footer">
        <span style={{
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem'
        }}>
          {eraInfo?.name.split('&')[0]}
        </span>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          color: 'var(--accent-blue)',
          fontWeight: 600,
          fontSize: '0.825rem'
        }}>
          <span>Inspect Details</span>
          <ChevronRightIcon size={14} />
        </span>
      </div>
    </article>
  );
};
