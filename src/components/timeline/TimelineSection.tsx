import React, { useState, useMemo } from 'react';
import { Milestone, Category } from '../../types';
import { ERAS } from '../../data/eras';
import { MILESTONES } from '../../data/milestones';
import { TimelineCard } from './TimelineCard';
import { TimelineDetailModal } from './TimelineDetailModal';
import { ProgressTracker } from './ProgressTracker';
import { SearchIcon, CloseIcon, RefreshIcon } from '../common/Icons';

interface TimelineSectionProps {
  exploredIds: string[];
  onToggleExplored: (id: string) => void;
  onResetProgress: () => void;
  selectedEraFilter: string;
  onSelectEraFilter: (eraId: string) => void;
}

const CATEGORIES: Category[] = ['Hardware', 'Software', 'Theory', 'Networking', 'People', 'Society'];

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  exploredIds,
  onToggleExplored,
  onResetProgress,
  selectedEraFilter,
  onSelectEraFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMilestone, setActiveMilestone] = useState<Milestone | null>(null);

  // Filtered Milestones logic
  const filteredMilestones = useMemo(() => {
    return MILESTONES.filter((m) => {
      // Era filter
      if (selectedEraFilter !== 'all' && m.era !== selectedEraFilter) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'All' && m.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = m.title.toLowerCase().includes(query);
        const matchesSummary = m.summary.toLowerCase().includes(query);
        const matchesPioneer = m.pioneer.toLowerCase().includes(query);
        const matchesYear = m.year.toLowerCase().includes(query);
        const matchesTags = m.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSummary && !matchesPioneer && !matchesYear && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [selectedEraFilter, selectedCategory, searchQuery]);

  // Sequential modal navigation
  const activeIndex = activeMilestone
    ? filteredMilestones.findIndex((m) => m.id === activeMilestone.id)
    : -1;
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex >= 0 && activeIndex < filteredMilestones.length - 1;

  const handlePrev = () => {
    if (hasPrev) {
      const prevMilestone = filteredMilestones[activeIndex - 1];
      setActiveMilestone(prevMilestone);
      if (!exploredIds.includes(prevMilestone.id)) {
        onToggleExplored(prevMilestone.id);
      }
    }
  };

  const handleNext = () => {
    if (hasNext) {
      const nextMilestone = filteredMilestones[activeIndex + 1];
      setActiveMilestone(nextMilestone);
      if (!exploredIds.includes(nextMilestone.id)) {
        onToggleExplored(nextMilestone.id);
      }
    }
  };

  const handleCardSelect = (milestone: Milestone) => {
    setActiveMilestone(milestone);
    if (!exploredIds.includes(milestone.id)) {
      onToggleExplored(milestone.id);
    }
  };

  const handleResetFilters = () => {
    onSelectEraFilter('all');
    setSelectedCategory('All');
    setSearchQuery('');
  };

  const activeEraInfo = activeMilestone
    ? ERAS.find((e) => e.id === activeMilestone.era)
    : undefined;

  const hasActiveFilters = selectedEraFilter !== 'all' || selectedCategory !== 'All' || searchQuery !== '';

  return (
    <section id="timeline" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Chronological Museum Vault</div>
          <h2 className="section-title">The Interactive Timeline</h2>
          <p className="section-description">
            Explore 26 pivotal milestones spanning ancient algorithms to deep learning. Filter by era, domain, or search specific innovations to inspect historical artifacts.
          </p>
        </div>

        {/* Exploration Progress Bar */}
        <ProgressTracker
          exploredCount={exploredIds.length}
          totalCount={MILESTONES.length}
          onResetProgress={onResetProgress}
        />

        {/* Filter and Search Toolbar */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem',
          marginBottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          {/* Top row: Search input & Reset */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              position: 'relative',
              flex: '1 1 280px'
            }}>
              <span style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                pointerEvents: 'none',
                display: 'flex'
              }}>
                <SearchIcon size={18} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search milestones, people, concepts (e.g., Turing, ENIAC, C, GPU)..."
                aria-label="Search timeline milestones"
                style={{
                  width: '100%',
                  padding: '0.75rem 2.5rem 0.75rem 2.75rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.925rem',
                  fontFamily: 'var(--font-sans)'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search text"
                  style={{
                    position: 'absolute',
                    right: '0.5rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    minWidth: '44px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CloseIcon size={16} />
                </button>
              )}
            </div>

            {/* Show All / Reset Button */}
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="btn btn-outline btn-sm"
                style={{
                  borderColor: 'var(--accent-blue)',
                  color: 'var(--accent-blue)',
                  whiteSpace: 'nowrap'
                }}
              >
                <RefreshIcon size={14} />
                <span>Show All (Reset Filters)</span>
              </button>
            )}
          </div>

          {/* Era Filter Selector (Responsive Scrolling Bar with Fade) */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)'
              }}>
                Filter By Era:
              </span>
              <span
                aria-live="polite"
                aria-atomic="true"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                Showing {filteredMilestones.length} of {MILESTONES.length}
              </span>
            </div>

            <div className="scroll-fade-wrap">
              <div
                className="scroll-track-smooth"
                style={{
                  display: 'flex',
                  gap: '0.45rem',
                  overflowX: 'auto',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.2rem'
                }}
              >
                <button
                  onClick={() => onSelectEraFilter('all')}
                  className="btn btn-sm"
                  aria-pressed={selectedEraFilter === 'all'}
                  style={{
                    background: selectedEraFilter === 'all' ? 'var(--accent-blue)' : 'var(--bg-card)',
                    color: selectedEraFilter === 'all' ? '#000' : 'var(--text-secondary)',
                    border: `1px solid ${selectedEraFilter === 'all' ? 'var(--accent-blue)' : 'var(--border-subtle)'}`,
                    whiteSpace: 'nowrap',
                    fontWeight: selectedEraFilter === 'all' ? 700 : 500,
                    flexShrink: 0
                  }}
                >
                  All Eras ({MILESTONES.length})
                </button>

                {ERAS.map((era) => {
                  const isSelected = selectedEraFilter === era.id;
                  const count = MILESTONES.filter((m) => m.era === era.id).length;
                  return (
                    <button
                      key={era.id}
                      onClick={() => onSelectEraFilter(era.id)}
                      className="btn btn-sm"
                      aria-pressed={isSelected}
                      style={{
                        background: isSelected ? `${era.color}25` : 'var(--bg-card)',
                        color: isSelected ? era.color : 'var(--text-secondary)',
                        borderColor: isSelected ? era.color : 'var(--border-subtle)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        whiteSpace: 'nowrap',
                        fontWeight: isSelected ? 700 : 500,
                        flexShrink: 0
                      }}
                    >
                      <span>{era.name}</span>
                      <span style={{
                        fontSize: '0.7rem',
                        opacity: 0.8,
                        marginLeft: '0.25rem',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        ({count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Category Filter Selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            paddingTop: '0.5rem',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-muted)',
              marginRight: '0.5rem'
            }}>
              Category:
            </span>

            <button
              onClick={() => setSelectedCategory('All')}
              className="btn btn-sm"
              aria-pressed={selectedCategory === 'All'}
              style={{
                background: selectedCategory === 'All' ? 'var(--bg-elevated)' : 'transparent',
                color: selectedCategory === 'All' ? 'var(--text-highlight)' : 'var(--text-muted)',
                borderColor: selectedCategory === 'All' ? 'var(--border-medium)' : 'transparent',
                padding: '0.25rem 0.65rem'
              }}
            >
              All Categories
            </button>

            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="btn btn-sm"
                  aria-pressed={isSelected}
                  style={{
                    background: isSelected ? 'var(--bg-elevated)' : 'transparent',
                    color: isSelected ? 'var(--accent-blue)' : 'var(--text-muted)',
                    borderColor: isSelected ? 'var(--border-accent)' : 'transparent',
                    padding: '0.25rem 0.65rem'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Grid or Empty State */}
        {filteredMilestones.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 1.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: 'var(--text-muted)'
            }}>
              🔍
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              No Milestones Found
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
              No historical milestones matched your active query “<strong>{searchQuery}</strong>” under the chosen filters.
            </p>
            <button onClick={handleResetFilters} className="btn btn-primary">
              <RefreshIcon size={16} />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: '1.5rem'
          }}>
            {filteredMilestones.map((milestone) => {
              const eraInfo = ERAS.find((e) => e.id === milestone.era);
              const isExplored = exploredIds.includes(milestone.id);

              return (
                <TimelineCard
                  key={milestone.id}
                  milestone={milestone}
                  eraInfo={eraInfo}
                  isExplored={isExplored}
                  onSelect={handleCardSelect}
                />
              );
            })}
          </div>
        )}

        {/* Milestone Detail Modal */}
        <TimelineDetailModal
          milestone={activeMilestone}
          eraInfo={activeEraInfo}
          isOpen={activeMilestone !== null}
          onClose={() => setActiveMilestone(null)}
          isExplored={activeMilestone ? exploredIds.includes(activeMilestone.id) : false}
          onToggleExplored={onToggleExplored}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      </div>
    </section>
  );
};
