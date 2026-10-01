import React from 'react';
import { EvolutionRibbon } from './EvolutionRibbon';
import { SparklesIcon, ChevronRightIcon, AwardIcon } from '../common/Icons';

interface HeroProps {
  onSelectEra: (eraId: string) => void;
  totalEras: number;
  totalMilestones: number;
}

export const Hero: React.FC<HeroProps> = ({ onSelectEra, totalEras, totalMilestones }) => {
  return (
    <section id="hero" style={{
      paddingTop: '4.5rem',
      paddingBottom: '4.5rem',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      {/* Decorative ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(129, 140, 248, 0.05) 50%, transparent 80%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Curated Course Final Project Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 1rem',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(56, 189, 248, 0.08)',
          border: '1px solid var(--border-accent)',
          color: 'var(--accent-blue)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.05em',
          marginBottom: '1.75rem'
        }}>
          <SparklesIcon size={16} />
          <span>PATHY AI PROGRAM • COMPUTER SCIENCE MUSEUM</span>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
          textShadow: '0 2px 20px rgba(0, 0, 0, 0.6)'
        }}>
          Computing Through Time
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.2rem, 2.8vw, 1.65rem)',
          fontFamily: 'var(--font-serif)',
          color: 'var(--accent-blue)',
          fontWeight: 500,
          marginBottom: '1.5rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          From ancient algorithms to artificial intelligence
        </p>

        {/* Concise Description */}
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          maxWidth: '720px',
          margin: '0 auto 2.5rem auto',
          lineHeight: 1.7
        }}>
          Explore an interactive journey through two and a half millennia of human ingenuity—tracing how abstract mathematical logic, clockwork gears, and solid-state silicon culminated in the global digital ecosystem and modern machine learning.
        </p>

        {/* Call to Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          <a href="#timeline" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
            <span>Explore the Timeline</span>
            <ChevronRightIcon size={18} />
          </a>

          <a href="#quiz" className="btn btn-secondary" style={{ padding: '0.85rem 1.6rem', fontSize: '1rem' }}>
            <AwardIcon size={18} color="var(--accent-amber)" />
            <span>Take the Quiz</span>
          </a>

          <a href="#hardware" className="btn btn-outline" style={{ padding: '0.85rem 1.4rem', fontSize: '0.95rem' }}>
            <span>Hardware Evolution</span>
          </a>
        </div>

        {/* Evolution Ribbon (Interactive Stepping Line) */}
        <EvolutionRibbon onSelectEra={onSelectEra} />

        {/* Small Statistic Area */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.5rem',
          maxWidth: '760px',
          margin: '3rem auto 0 auto',
          padding: '1.5rem',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--accent-blue)',
              lineHeight: 1
            }}>
              {totalEras}
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.35rem',
              fontWeight: 500
            }}>
              Historical Eras
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              lineHeight: 1
            }}>
              {totalMilestones}
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.35rem',
              fontWeight: 500
            }}>
              Curated Milestones
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--accent-amber)',
              lineHeight: 1
            }}>
              2,500+
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.35rem',
              fontWeight: 500
            }}>
              Years of Innovation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
