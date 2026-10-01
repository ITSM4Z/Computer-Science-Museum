import React from 'react';
import { Category } from '../../types';

interface BadgeProps {
  category: Category;
  className?: string;
}

export const CategoryBadge: React.FC<BadgeProps> = ({ category, className = '' }) => {
  const categoryClassMap: Record<Category, string> = {
    Hardware: 'pill-hardware',
    Software: 'pill-software',
    Theory: 'pill-theory',
    Networking: 'pill-networking',
    People: 'pill-people',
    Society: 'pill-society'
  };

  return (
    <span className={`pill ${categoryClassMap[category] || ''} ${className}`}>
      {category}
    </span>
  );
};

export const EraBadge: React.FC<{ eraName: string; color?: string; className?: string }> = ({
  eraName,
  color = 'var(--accent-blue)',
  className = ''
}) => {
  return (
    <span
      className={`pill ${className}`}
      style={{
        color: color,
        background: `${color}18`,
        borderColor: `${color}40`
      }}
    >
      {eraName}
    </span>
  );
};
