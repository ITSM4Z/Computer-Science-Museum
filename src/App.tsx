import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Hero } from './components/hero/Hero';
import { TimelineSection } from './components/timeline/TimelineSection';
import { PeopleSection } from './components/people/PeopleSection';
import { HardwareSection } from './components/hardware/HardwareSection';
import { SoftwareSection } from './components/software/SoftwareSection';
import { ModernSection } from './components/modern/ModernSection';
import { QuizSection } from './components/quiz/QuizSection';
import { SourcesSection } from './components/sources/SourcesSection';
import { AboutModal } from './components/sources/AboutModal';
import { ERAS } from './data/eras';
import { MILESTONES } from './data/milestones';
import { useLocalStorage } from './hooks/useLocalStorage';

export const App: React.FC = () => {
  const [exploredIds, setExploredIds] = useLocalStorage<string[]>('computing_history_explored_milestones', []);
  const [isHighContrast, setIsHighContrast] = useLocalStorage<boolean>('computing_history_contrast', false);
  const [selectedEraFilter, setSelectedEraFilter] = useState<string>('all');
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);

  // Apply high-contrast class to body
  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const handleToggleExplored = (id: string) => {
    setExploredIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset your explored milestones progress?')) {
      setExploredIds([]);
    }
  };

  const handleSelectEra = (eraId: string) => {
    setSelectedEraFilter(eraId);
    const timelineElem = document.getElementById('timeline');
    if (timelineElem) {
      timelineElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main museum exhibit
      </a>

      {/* Global Header */}
      <Header
        exploredCount={exploredIds.length}
        totalMilestones={MILESTONES.length}
        isHighContrast={isHighContrast}
        toggleHighContrast={() => setIsHighContrast(!isHighContrast)}
      />

      {/* Main Museum Exhibit Hall */}
      <main id="main-content">
        {/* Section 1: Hero */}
        <Hero
          onSelectEra={handleSelectEra}
          totalEras={ERAS.length}
          totalMilestones={MILESTONES.length}
        />

        {/* Section 2: Interactive Timeline */}
        <TimelineSection
          exploredIds={exploredIds}
          onToggleExplored={handleToggleExplored}
          onResetProgress={handleResetProgress}
          selectedEraFilter={selectedEraFilter}
          onSelectEraFilter={setSelectedEraFilter}
        />

        {/* Section 3: Important People */}
        <PeopleSection />

        {/* Section 4: Hardware Evolution */}
        <HardwareSection />

        {/* Section 5: Software & Programming */}
        <SoftwareSection />

        {/* Section 6: Computing Today */}
        <ModernSection />

        {/* Section 7: Interactive Quiz */}
        <QuizSection />

        {/* Section 8: Sources & Project Info */}
        <SourcesSection onOpenAboutModal={() => setIsAboutModalOpen(true)} />
      </main>

      {/* Museum Footer */}
      <Footer onOpenAbout={() => setIsAboutModalOpen(true)} />

      {/* About Project & Methodology Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </div>
  );
};

export default App;
