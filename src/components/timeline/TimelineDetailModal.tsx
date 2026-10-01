import React, { useEffect } from 'react';
import { Milestone, EraInfo } from '../../types';
import { Modal } from '../common/Modal';
import { CategoryBadge, EraBadge } from '../common/Badge';
import { ExternalLinkIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon } from '../common/Icons';

interface TimelineDetailModalProps {
  milestone: Milestone | null;
  eraInfo?: EraInfo;
  isOpen: boolean;
  onClose: () => void;
  isExplored: boolean;
  onToggleExplored: (id: string) => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const TimelineDetailModal: React.FC<TimelineDetailModalProps> = ({
  milestone,
  eraInfo,
  isOpen,
  onClose,
  isExplored,
  onToggleExplored,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasPrev, hasNext, onPrev, onNext]);

  if (!milestone) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId="milestone-detail-title" maxWidth="760px">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Header Badges & Date */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--accent-blue)',
              background: 'var(--accent-blue-glow)',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-accent)'
            }}>
              {milestone.year}
            </span>
            <CategoryBadge category={milestone.category} />
            {eraInfo && <EraBadge eraName={eraInfo.name} color={eraInfo.color} />}
          </div>

          {/* Mark as Explored Button */}
          <button
            onClick={() => onToggleExplored(milestone.id)}
            className={`btn btn-sm ${isExplored ? 'btn-secondary' : 'btn-outline'}`}
            style={{
              borderColor: isExplored ? 'var(--accent-emerald)' : 'var(--border-subtle)',
              color: isExplored ? 'var(--accent-emerald)' : 'var(--text-secondary)'
            }}
          >
            <CheckIcon size={16} color={isExplored ? 'var(--accent-emerald)' : 'currentColor'} />
            <span>{isExplored ? 'Explored' : 'Mark as Explored'}</span>
          </button>
        </div>

        {/* Milestone Title */}
        <div>
          <h2 id="milestone-detail-title" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
            {milestone.title}
          </h2>
          <div style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)'
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>Key Figure / Institution:</strong> {milestone.pioneer}
          </div>
        </div>

        {/* Quote if available */}
        {milestone.quote && (
          <blockquote style={{
            margin: '0',
            padding: '1rem 1.25rem',
            background: 'rgba(56, 189, 248, 0.05)',
            borderLeft: '3px solid var(--accent-blue)',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            fontSize: '0.95rem'
          }}>
            “{milestone.quote.text}”
            <footer style={{
              marginTop: '0.5rem',
              fontSize: '0.8rem',
              fontStyle: 'normal',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)'
            }}>
              — {milestone.quote.author}
            </footer>
          </blockquote>
        )}

        {/* Historical Summary */}
        <section aria-labelledby="detail-summary-heading">
          <h3 id="detail-summary-heading" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--accent-cyan)',
            marginBottom: '0.5rem'
          }}>
            Historical Overview
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>
            {milestone.summary}
          </p>
        </section>

        {/* Why it Mattered (Significance) */}
        <section aria-labelledby="detail-significance-heading" style={{
          padding: '1.25rem',
          background: 'rgba(245, 158, 11, 0.06)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(245, 158, 11, 0.2)'
        }}>
          <h3 id="detail-significance-heading" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--accent-amber)',
            marginBottom: '0.5rem'
          }}>
            Why It Mattered
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-primary)' }}>
            {milestone.significance}
          </p>
        </section>

        {/* Technical Detail / Engineering Breakdown */}
        <section aria-labelledby="detail-technical-heading">
          <h3 id="detail-technical-heading" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--accent-violet)',
            marginBottom: '0.5rem'
          }}>
            Technical & Architectural Mechanics
          </h3>
          <p style={{
            fontSize: '0.95rem',
            lineHeight: 1.65,
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-sans)'
          }}>
            {milestone.technicalDetail}
          </p>
        </section>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {milestone.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                background: 'var(--bg-card)',
                padding: '0.2rem 0.55rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Citation & Source Link */}
        <footer style={{
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.825rem'
        }}>
          <div>
            <span style={{ color: 'var(--text-muted)' }}>Verified Archival Source: </span>
            <a
              href={milestone.source.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}
            >
              <span>{milestone.source.title} ({milestone.source.publisher})</span>
              <ExternalLinkIcon size={13} />
            </a>
          </div>

          {/* Sequential Navigation inside Modal */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="btn btn-outline btn-sm"
              style={{ opacity: hasPrev ? 1 : 0.4 }}
              title="Previous Milestone (Left Arrow)"
              aria-label="Previous Milestone"
            >
              <ChevronLeftIcon size={16} />
              <span>Prev</span>
            </button>

            <button
              onClick={onNext}
              disabled={!hasNext}
              className="btn btn-outline btn-sm"
              style={{ opacity: hasNext ? 1 : 0.4 }}
              title="Next Milestone (Right Arrow)"
              aria-label="Next Milestone"
            >
              <span>Next</span>
              <ChevronRightIcon size={16} />
            </button>
          </div>
        </footer>
      </div>
    </Modal>
  );
};
