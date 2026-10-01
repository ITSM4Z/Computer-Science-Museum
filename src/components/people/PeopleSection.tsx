import React, { useState, useMemo } from 'react';
import { PIONEERS } from '../../data/people';
import { PersonCard } from './PersonCard';
import { Person } from '../../types';
import { SearchIcon, CloseIcon } from '../common/Icons';

export const PeopleSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [peopleSearch, setPeopleSearch] = useState<string>('');

  const domains = ['All', 'Theory & Math', 'Hardware & Architecture', 'Software & Systems', 'Networking & Web'];

  const filteredPioneers = useMemo(() => {
    return PIONEERS.filter((person: Person) => {
      if (selectedDomain !== 'All' && person.domain !== selectedDomain) {
        return false;
      }
      if (peopleSearch.trim() !== '') {
        const query = peopleSearch.toLowerCase();
        const matchesName = person.name.toLowerCase().includes(query);
        const matchesField = person.field.toLowerCase().includes(query);
        const matchesWork = person.keyWork.toLowerCase().includes(query);
        const matchesWhy = person.whyMatters.toLowerCase().includes(query);
        return matchesName || matchesField || matchesWork || matchesWhy;
      }
      return true;
    });
  }, [selectedDomain, peopleSearch]);

  return (
    <section id="pioneers" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Gallery of Visionaries</div>
          <h2 className="section-title">Pioneers of Computation</h2>
          <p className="section-description">
            Computer science was shaped by mathematicians, engineers, cryptanalysts, and architects across centuries and continents. Explore the diverse thinkers who bridged theory and machine reality.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
          background: 'var(--bg-surface)',
          padding: '1rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)'
        }}>
          {/* Domain Pills */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {domains.map((domain) => {
              const isSelected = selectedDomain === domain;
              return (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className="btn btn-sm"
                  aria-pressed={isSelected}
                  style={{
                    background: isSelected ? 'var(--accent-blue)' : 'var(--bg-card)',
                    color: isSelected ? '#000' : 'var(--text-secondary)',
                    borderColor: isSelected ? 'var(--accent-blue)' : 'var(--border-subtle)',
                    fontWeight: isSelected ? 700 : 500
                  }}
                >
                  {domain}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span
              aria-live="polite"
              aria-atomic="true"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)'
              }}
            >
              Showing {filteredPioneers.length} of {PIONEERS.length}
            </span>

            {/* Search box */}
            <div style={{ position: 'relative', flex: '1 1 200px', maxWidth: '280px' }}>
              <span style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
                display: 'flex'
              }}>
                <SearchIcon size={16} />
              </span>
              <input
                type="text"
                value={peopleSearch}
                onChange={(e) => setPeopleSearch(e.target.value)}
                placeholder="Search pioneers, fields..."
                aria-label="Search computing pioneers"
                style={{
                  width: '100%',
                  padding: '0.5rem 2.25rem 0.5rem 2.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem'
                }}
              />
              {peopleSearch && (
                <button
                  onClick={() => setPeopleSearch('')}
                  aria-label="Clear pioneer search"
                  style={{
                    position: 'absolute',
                    right: '0.25rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    minWidth: '44px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CloseIcon size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Pioneers Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem'
        }}>
          {filteredPioneers.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
};
