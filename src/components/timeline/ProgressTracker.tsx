import React from 'react';
import { AwardIcon, RefreshIcon } from '../common/Icons';

interface ProgressTrackerProps {
  exploredCount: number;
  totalCount: number;
  onResetProgress: () => void;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  exploredCount,
  totalCount,
  onResetProgress
}) => {
  const percentage = Math.round((exploredCount / totalCount) * 100);
  const isComplete = exploredCount === totalCount;

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem 1.5rem',
      marginBottom: '2rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AwardIcon size={20} color={isComplete ? 'var(--accent-emerald)' : 'var(--accent-blue)'} />
          <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>
            Museum Exploration Progress
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)'
          }}>
            <strong style={{ color: isComplete ? 'var(--accent-emerald)' : 'var(--text-highlight)' }}>
              {exploredCount}
            </strong> of {totalCount} Milestones ({percentage}%)
          </span>

          {exploredCount > 0 && (
            <button
              onClick={onResetProgress}
              className="btn btn-outline btn-sm"
              style={{ padding: '0.25rem 0.55rem', fontSize: '0.75rem' }}
              title="Reset explored status"
              aria-label="Reset milestone progress"
            >
              <RefreshIcon size={13} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar Container */}
      <div
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Milestone exploration progress"
        style={{
          width: '100%',
          height: '8px',
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)'
        }}
      >
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          background: isComplete
            ? 'linear-gradient(90deg, #10b981, #34d399)'
            : 'linear-gradient(90deg, var(--accent-blue), var(--accent-violet))',
          borderRadius: 'var(--radius-full)',
          transition: 'width 300ms ease'
        }} />
      </div>

      {isComplete && (
        <div style={{
          marginTop: '0.75rem',
          fontSize: '0.85rem',
          color: 'var(--accent-emerald)',
          fontFamily: 'var(--font-mono)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <span>✦ Master Historian! You have explored all milestones across every computing era.</span>
        </div>
      )}
    </div>
  );
};
