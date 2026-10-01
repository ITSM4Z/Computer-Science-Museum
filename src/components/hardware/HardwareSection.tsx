import React, { useState } from 'react';
import { HARDWARE_EPOCHS } from '../../data/hardware';

export const HardwareSection: React.FC = () => {
  const [selectedEpochIndex, setSelectedEpochIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'inspector' | 'matrix'>('inspector');

  const activeEpoch = HARDWARE_EPOCHS[selectedEpochIndex];

  return (
    <section id="hardware" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Physical Architecture & Silicon</div>
          <h2 className="section-title">Hardware Evolution</h2>
          <p className="section-description">
            From 15-ton geared engines and room-sized vacuum tubes to billions of nanometer transistors etched onto pocket-sized silicon. Inspect how physical limits shaped computing capabilities.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2rem'
        }}>
          <button
            onClick={() => setViewMode('inspector')}
            className={`btn btn-sm ${viewMode === 'inspector' ? 'btn-primary' : 'btn-outline'}`}
          >
            Epoch Inspector
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`btn btn-sm ${viewMode === 'matrix' ? 'btn-primary' : 'btn-outline'}`}
          >
            Comparative Matrix
          </button>
        </div>

        {viewMode === 'inspector' ? (
          <div>
            {/* Epoch Navigation Tabs with Horizontal Scroll Cues */}
            <div className="scroll-fade-wrap" style={{ marginBottom: '1.5rem' }}>
              <div
                className="scroll-track-smooth"
                role="tablist"
                aria-label="Hardware Epochs"
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  overflowX: 'auto',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {HARDWARE_EPOCHS.map((epoch, index) => {
                  const isSelected = index === selectedEpochIndex;
                  return (
                    <button
                      key={epoch.id}
                      id={`epoch-tab-${epoch.id}`}
                      role="tab"
                      aria-selected={isSelected}
                      aria-controls={`epoch-panel-${epoch.id}`}
                      onClick={() => setSelectedEpochIndex(index)}
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
                      <span>{epoch.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Epoch Feature Inspector Card */}
            <div
              role="tabpanel"
              id={`epoch-panel-${activeEpoch.id}`}
              aria-labelledby={`epoch-tab-${activeEpoch.id}`}
              className="museum-card"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1rem'
              }}>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-cyan)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}>
                    Epoch {selectedEpochIndex + 1} of {HARDWARE_EPOCHS.length}
                  </span>
                  <h3 style={{ fontSize: '1.85rem', marginTop: '0.25rem', color: 'var(--text-highlight)' }}>
                    {activeEpoch.name}
                  </h3>
                </div>

                <div style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--accent-amber)'
                }}>
                  {activeEpoch.period}
                </div>
              </div>

              {/* Grid of Key Technical Attributes */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.75rem'
              }}>
                {/* Physical Scale */}
                <div style={{
                  padding: '1.25rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--accent-blue)',
                    marginBottom: '0.4rem'
                  }}>
                    Physical Scale & Weight
                  </div>
                  <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {activeEpoch.physicalScale}
                  </div>
                </div>

                {/* Core Technology */}
                <div style={{
                  padding: '1.25rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--accent-cyan)',
                    marginBottom: '0.4rem'
                  }}>
                    Core Switching Technology
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {activeEpoch.mainTechnology}
                  </div>
                </div>

                {/* Performance Rate */}
                <div style={{
                  padding: '1.25rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--accent-violet)',
                    marginBottom: '0.4rem'
                  }}>
                    Operational Speed & Clock Rate
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                    {activeEpoch.clockSpeedOrRate}
                  </div>
                </div>

                {/* Storage Medium */}
                <div style={{
                  padding: '1.25rem',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--accent-amber)',
                    marginBottom: '0.4rem'
                  }}>
                    Primary Memory / Storage Medium
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {activeEpoch.storageMedium}
                  </div>
                </div>
              </div>

              {/* Typical Use & Major Bottleneck */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  padding: '1.25rem',
                  background: 'rgba(56, 189, 248, 0.05)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(56, 189, 248, 0.15)'
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    color: 'var(--accent-blue)',
                    marginBottom: '0.5rem'
                  }}>
                    Typical Use Cases
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                    {activeEpoch.typicalUse}
                  </p>
                </div>

                <div style={{
                  padding: '1.25rem',
                  background: 'rgba(244, 63, 94, 0.06)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(244, 63, 94, 0.2)'
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    color: 'var(--accent-rose)',
                    marginBottom: '0.5rem'
                  }}>
                    Major Bottleneck & Limitation
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                    {activeEpoch.majorLimitation}
                  </p>
                </div>
              </div>

              {/* Archetypal Machines */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.85rem'
              }}>
                <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Archetypal Systems:
                </span>
                {activeEpoch.keyExamples.map((example) => (
                  <span
                    key={example}
                    style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem'
                    }}
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Comparative Matrix Table */
          <div style={{
            overflowX: 'auto',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              fontSize: '0.875rem'
            }}>
              <thead>
                <tr style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-medium)' }}>
                  <th style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)' }}>Era / Technology</th>
                  <th style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-mono)', color: 'var(--text-highlight)' }}>Period</th>
                  <th style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-mono)', color: 'var(--text-highlight)' }}>Physical Scale</th>
                  <th style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-mono)', color: 'var(--text-highlight)' }}>Primary Use</th>
                  <th style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-rose)' }}>Major Limitation</th>
                </tr>
              </thead>
              <tbody>
                {HARDWARE_EPOCHS.map((epoch, idx) => (
                  <tr
                    key={epoch.id}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)'
                    }}
                  >
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                      {epoch.name}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
                      {epoch.period}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>
                      {epoch.physicalScale}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>
                      {epoch.typicalUse}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>
                      {epoch.majorLimitation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
