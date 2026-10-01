import React, { useState } from 'react';
import { SOFTWARE_LAYERS } from '../../data/software';
import { SoftwareLayer } from '../../types';
import { ChevronRightIcon } from '../common/Icons';

export const SoftwareSection: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const activeLayer: SoftwareLayer = SOFTWARE_LAYERS[activeLayerIndex];

  return (
    <section id="software" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">The Tower of Abstraction</div>
          <h2 className="section-title">Software & Programming</h2>
          <p className="section-description">
            Software is the art of layering abstractions. From manual plugboard rewiring and raw binary to human-readable compilers, operating systems, and learned neural weights—see how code evolved to solve human problems.
          </p>
        </div>

        {/* Stepper Navigation / Horizontal Trail */}
        <div
          role="tablist"
          aria-label="Software Abstraction Layers"
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '2rem'
          }}
        >
          {SOFTWARE_LAYERS.map((layer, index) => {
            const isSelected = index === activeLayerIndex;
            return (
              <button
                key={layer.id}
                id={`software-tab-${layer.id}`}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`software-panel-${layer.id}`}
                onClick={() => setActiveLayerIndex(index)}
                className="btn btn-sm"
                style={{
                  background: isSelected ? 'var(--accent-blue)' : 'var(--bg-card)',
                  color: isSelected ? '#000' : 'var(--text-secondary)',
                  borderColor: isSelected ? 'var(--accent-blue)' : 'var(--border-subtle)',
                  fontWeight: isSelected ? 700 : 500,
                  whiteSpace: 'nowrap',
                  padding: '0.45rem 0.85rem'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  opacity: 0.8,
                  marginRight: '0.35rem'
                }}>
                  L{layer.layerNumber}:
                </span>
                <span>{layer.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Layer Deep Dive Grid */}
        <div
          role="tabpanel"
          id={`software-panel-${activeLayer.id}`}
          aria-labelledby={`software-tab-${activeLayer.id}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Conceptual Explanation Card */}
          <div className="museum-card" style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Layer Meta Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}>
                  Abstraction Layer {activeLayer.layerNumber} of 9
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-amber)',
                  background: 'var(--bg-card)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {activeLayer.period}
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: 'var(--text-highlight)' }}>
                {activeLayer.title}
              </h3>

              {/* The Problem Solved */}
              <div style={{
                padding: '1rem 1.25rem',
                background: 'rgba(56, 189, 248, 0.05)',
                borderLeft: '3px solid var(--accent-blue)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBottom: '1.25rem'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--accent-blue)',
                  letterSpacing: '0.05em',
                  marginBottom: '0.3rem'
                }}>
                  The Problem Solved
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {activeLayer.problemSolved}
                </p>
              </div>

              {/* Core Conceptual Breakthrough */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                  marginBottom: '0.4rem'
                }}>
                  Core Abstraction Principle
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {activeLayer.coreConcept}
                </p>
              </div>
            </div>

            {/* Evolutionary Impact */}
            <div style={{
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.85rem'
            }}>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                Historical Impact:
              </span>{' '}
              <span style={{ color: 'var(--text-secondary)' }}>
                {activeLayer.evolutionaryImpact}
              </span>
            </div>
          </div>

          {/* Educational Code / Concept Preview Card */}
          <div style={{
            background: '#090d16',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)'
          }}>
            {/* Terminal / Code Window Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1.25rem',
              background: '#0e1524',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  marginLeft: '0.5rem'
                }}>
                  {activeLayer.codeSnippet.label}
                </span>
              </div>
              <span style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                color: 'var(--accent-blue)',
                background: 'rgba(56, 189, 248, 0.1)',
                padding: '0.15rem 0.5rem',
                borderRadius: 'var(--radius-sm)'
              }}>
                {activeLayer.codeSnippet.language}
              </span>
            </div>

            {/* Code Block */}
            <div style={{
              padding: '1.25rem',
              overflowX: 'auto',
              flex: 1,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              color: '#e2e8f0',
              background: '#090d16'
            }}>
              <pre style={{ margin: 0, whiteSpace: 'pre' }}>
                <code>{activeLayer.codeSnippet.code}</code>
              </pre>
            </div>

            {/* Code Explanation Bar */}
            <div style={{
              padding: '1rem 1.25rem',
              background: '#0e1524',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.825rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.55
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>Educational Insight:</strong>{' '}
              {activeLayer.codeSnippet.explanation}
            </div>
          </div>
        </div>

        {/* Quick Stepper Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <button
            onClick={() => setActiveLayerIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeLayerIndex === 0}
            className="btn btn-outline btn-sm"
            style={{ opacity: activeLayerIndex === 0 ? 0.35 : 1 }}
          >
            ← Previous Layer
          </button>

          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Layer {activeLayerIndex + 1} of {SOFTWARE_LAYERS.length}
          </span>

          <button
            onClick={() => setActiveLayerIndex((prev) => Math.min(SOFTWARE_LAYERS.length - 1, prev + 1))}
            disabled={activeLayerIndex === SOFTWARE_LAYERS.length - 1}
            className="btn btn-outline btn-sm"
            style={{ opacity: activeLayerIndex === SOFTWARE_LAYERS.length - 1 ? 0.35 : 1 }}
          >
            <span>Next Layer</span>
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
