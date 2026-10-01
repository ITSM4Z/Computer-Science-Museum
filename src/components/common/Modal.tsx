import React, { useEffect, useRef } from 'react';
import { CloseIcon } from './Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleId?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  maxWidth?: string;
}

/**
 * Accessible Modal Dialog Component
 * Implements WCAG 2.1 dialog specifications:
 * 1. Focus Management: Saves trigger element and restores focus upon dismissal.
 * 2. Focus Containment: Cyclic Tab/Shift+Tab trapping prevents focus leakage into background DOM.
 * 3. Keyboard Dismissal: Listens for Escape key.
 * 4. Screen Reader Binding: Connects aria-labelledby directly to the title container ID.
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  titleId = 'modal-title',
  title,
  children,
  maxWidth = '720px'
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      // Focus the dialog or the first focusable element
      setTimeout(() => {
        const focusable = dialogRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable) {
          focusable.focus();
        } else {
          dialogRef.current?.focus();
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
          return;
        }

        if (e.key === 'Tab') {
          const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusableElements || focusableElements.length === 0) return;
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        style={{ maxWidth }}
      >
        <div className="modal-header">
          {title ? (
            <h2 id={titleId} style={{ fontSize: '1.35rem', margin: 0 }}>
              {title}
            </h2>
          ) : <div />}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="btn btn-outline btn-sm"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              padding: '0.4rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CloseIcon size={20} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};
