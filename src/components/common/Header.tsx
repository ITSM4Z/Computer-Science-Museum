import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, SparklesIcon, CheckIcon } from './Icons';

interface HeaderProps {
  exploredCount: number;
  totalMilestones: number;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  exploredCount,
  totalMilestones,
  isHighContrast,
  toggleHighContrast
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const percentage = Math.round((exploredCount / totalMilestones) * 100);

  const navLinks = [
    { label: 'Timeline', href: '#timeline', id: 'timeline' },
    { label: 'Pioneers', href: '#pioneers', id: 'pioneers' },
    { label: 'Hardware', href: '#hardware', id: 'hardware' },
    { label: 'Software', href: '#software', id: 'software' },
    { label: 'Modern CS', href: '#modern-cs', id: 'modern-cs' },
    { label: 'Quiz', href: '#quiz', id: 'quiz' },
    { label: 'Sources', href: '#sources', id: 'sources' }
  ];

  // Scroll-spy active section observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      const sectionIds = ['hero', 'timeline', 'pioneers', 'hardware', 'software', 'modern-cs', 'quiz', 'sources'];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sectionIds[i]);
        if (elem && elem.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape and lock body scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(10, 14, 23, 0.94)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'background var(--transition-base)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--nav-height)'
      }}>
        {/* Museum Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            border: '1px solid var(--border-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-blue)',
            flexShrink: 0
          }}>
            <SparklesIcon size={18} />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '1.02rem',
              color: 'var(--text-highlight)',
              lineHeight: 1.15,
              whiteSpace: 'nowrap'
            }}>
              Computing Through Time
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--accent-blue)',
              letterSpacing: '0.04em'
            }}>
              Digital Museum Exhibit
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links with Active State */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: '0.4rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions & Accessibility Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* Progress Tracker Badge */}
          <a
            href="#timeline"
            title={`${exploredCount} of ${totalMilestones} milestones explored (${percentage}%)`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: percentage === 100 ? 'var(--accent-emerald)' : 'var(--accent-blue)',
              textDecoration: 'none',
              transition: 'border-color var(--transition-fast)',
              flexShrink: 0
            }}
          >
            {percentage === 100 ? (
              <CheckIcon size={13} color="var(--accent-emerald)" />
            ) : (
              <span style={{
                display: 'inline-block',
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--accent-blue)'
              }} />
            )}
            <span>
              <strong style={{ color: 'var(--text-highlight)' }}>{exploredCount}</strong>/{totalMilestones}
              <span className="hide-on-mobile"> Explored</span>
            </span>
          </a>

          {/* High Contrast Toggle */}
          <button
            onClick={toggleHighContrast}
            aria-label={isHighContrast ? 'Disable high contrast' : 'Enable high contrast'}
            className="btn btn-outline btn-sm accessibility-btn"
            style={{
              padding: '0.4rem 0.8rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              minHeight: '34px'
            }}
            title="Toggle High Contrast Mode"
          >
            {isHighContrast ? 'Contrast ON' : 'Contrast'}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
            className="btn btn-outline btn-sm mobile-menu-toggle"
            style={{
              padding: '0.4rem',
              minWidth: '44px',
              minHeight: '44px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(4px)',
              zIndex: 48,
              animation: 'fadeIn 180ms ease'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            zIndex: 49,
            boxShadow: 'var(--shadow-lg)',
            animation: 'scaleUp 180ms ease'
          }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid var(--border-subtle)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />}
                </a>
              );
            })}

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem', paddingTop: '0.5rem' }}>
              <button
                onClick={() => {
                  toggleHighContrast();
                }}
                className="btn btn-outline btn-sm"
                style={{ flex: 1, fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
              >
                {isHighContrast ? 'Contrast ON' : 'High Contrast'}
              </button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: inline-flex !important;
          }
        }
        @media (max-width: 520px) {
          .accessibility-btn {
            display: none !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
