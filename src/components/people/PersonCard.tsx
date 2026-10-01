import React from 'react';
import { Person } from '../../types';

interface PersonCardProps {
  person: Person;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const domainColorMap: Record<Person['domain'], string> = {
    'Theory & Math': 'var(--accent-violet)',
    'Hardware & Architecture': 'var(--accent-amber)',
    'Software & Systems': 'var(--accent-emerald)',
    'Networking & Web': 'var(--accent-blue)'
  };

  const domainColor = domainColorMap[person.domain] || 'var(--accent-blue)';

  return (
    <article
      className="museum-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderLeft: `4px solid ${domainColor}`
      }}
    >
      <div className="museum-card-content">
        {/* Domain Badge & Period */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.725rem',
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-full)',
            color: domainColor,
            background: `${domainColor}15`,
            border: `1px solid ${domainColor}35`,
            fontWeight: 600
          }}>
            {person.domain}
          </span>

          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)'
          }}>
            {person.period}
          </span>
        </div>

        {/* Pioneer Name */}
        <h3 style={{
          fontSize: '1.3rem',
          marginBottom: '0.35rem',
          color: 'var(--text-highlight)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 700
        }}>
          {person.name}
        </h3>

        {/* Pioneer Field */}
        <div style={{
          fontSize: '0.85rem',
          color: 'var(--accent-blue)',
          fontFamily: 'var(--font-mono)',
          marginBottom: '1rem'
        }}>
          {person.field}
        </div>

        {/* Key Contribution */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
            marginBottom: '0.25rem'
          }}>
            Primary Breakthrough
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.55, color: 'var(--text-primary)' }}>
            {person.contribution}
          </p>
        </div>

        {/* Why this person matters */}
        <div style={{
          padding: '0.85rem 1rem',
          background: 'rgba(245, 158, 11, 0.05)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(245, 158, 11, 0.15)',
          marginBottom: '1rem'
        }}>
          <div style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            color: 'var(--accent-amber)',
            fontWeight: 600,
            marginBottom: '0.25rem'
          }}>
            Why This Pioneer Matters
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
            {person.whyMatters}
          </p>
        </div>

        {/* Quote if available */}
        {person.quote && (
          <blockquote style={{
            fontSize: '0.825rem',
            fontStyle: 'italic',
            color: 'var(--text-muted)',
            borderLeft: '2px solid var(--border-medium)',
            paddingLeft: '0.75rem',
            marginTop: '0.5rem',
            marginBottom: '0.75rem'
          }}>
            “{person.quote}”
          </blockquote>
        )}
      </div>

      {/* Key Work Footer locked to the bottom */}
      <div className="museum-card-footer" style={{
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        <strong style={{ color: 'var(--text-secondary)' }}>Key Work:</strong> {person.keyWork}
      </div>
    </article>
  );
};
