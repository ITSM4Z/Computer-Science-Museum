import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../../data/quiz';
import { QuizQuestion } from '../../types';
import { AwardIcon, CheckIcon, CloseIcon, RefreshIcon, ChevronRightIcon } from '../common/Icons';

export const QuizSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [answers, setAnswers] = useState<{ selectedIndex: number; isCorrect: boolean }[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  // Keyboard shortcut listener for options (1-4) and Enter to submit / next
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input field
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (!quizFinished) {
        if (!isSubmitted) {
          if (['1', '2', '3', '4'].includes(e.key)) {
            const idx = parseInt(e.key, 10) - 1;
            if (idx < currentQ.options.length) {
              setSelectedOption(idx);
            }
          } else if (e.key === 'Enter' && selectedOption !== null) {
            e.preventDefault();
            handleSubmit();
          }
        } else {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleNext();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, selectedOption, isSubmitted, quizFinished, currentQ]);

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctIndex;
    setAnswers((prev) => [...prev, { selectedIndex: selectedOption, isCorrect }]);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setAnswers([]);
    setQuizFinished(false);
  };

  const score = answers.filter((a) => a.isCorrect).length;

  const getEncouragement = (finalScore: number) => {
    if (finalScore >= 8) {
      return {
        badge: 'Excellent Historical Knowledge',
        text: 'Outstanding mastery! You possess a deep, comprehensive command of computing history and technological evolution.',
        color: 'var(--accent-emerald)'
      };
    } else if (finalScore >= 5) {
      return {
        badge: 'Strong Understanding',
        text: 'Impressive work! You have a solid grasp of key paradigms, hardware transitions, and pioneer breakthroughs.',
        color: 'var(--accent-blue)'
      };
    } else {
      return {
        badge: 'Good Start',
        text: 'A commendable effort! Review the interactive timeline and pioneers gallery to strengthen your computing history mastery.',
        color: 'var(--accent-amber)'
      };
    }
  };

  return (
    <section id="quiz" className="section">
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">Self-Paced Knowledge Assessment</div>
          <h2 className="section-title">The Computing History Quiz</h2>
          <p className="section-description">
            Test your understanding across 10 multiple-choice questions grounded directly in the exhibit’s historical records.
          </p>
        </div>

        {!quizFinished ? (
          <div className="museum-card" style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)'
          }}>
            {/* Quiz Progress Header */}
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
                fontSize: '0.85rem',
                color: 'var(--accent-cyan)',
                fontWeight: 600
              }}>
                Question {currentIndex + 1} of {totalQuestions}
              </span>

              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}>
                Press keys 1–4 to pick • Enter to submit
              </span>
            </div>

            {/* Progress Bar */}
            <div
              role="progressbar"
              aria-valuenow={Math.round(((currentIndex + (isSubmitted ? 1 : 0)) / totalQuestions) * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Quiz progress"
              style={{
                width: '100%',
                height: '6px',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
                marginBottom: '2rem'
              }}
            >
              <div style={{
                width: `${((currentIndex + (isSubmitted ? 1 : 0)) / totalQuestions) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))',
                borderRadius: 'var(--radius-full)',
                transition: 'width 250ms ease'
              }} />
            </div>

            {/* Question Text */}
            <h3 style={{
              fontSize: '1.35rem',
              lineHeight: 1.45,
              marginBottom: '1.75rem',
              color: 'var(--text-highlight)'
            }}>
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div
              role="radiogroup"
              aria-label={`Options for question ${currentIndex + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                marginBottom: '1.75rem'
              }}
            >
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectAnswer = idx === currentQ.correctIndex;

                let borderStyle = '1px solid var(--border-subtle)';
                let bgStyle = 'var(--bg-card)';
                let textStyle = 'var(--text-primary)';

                if (isSubmitted) {
                  if (isCorrectAnswer) {
                    borderStyle = '1px solid var(--accent-emerald)';
                    bgStyle = 'rgba(16, 185, 129, 0.12)';
                    textStyle = '#ffffff';
                  } else if (isSelected && !isCorrectAnswer) {
                    borderStyle = '1px solid var(--accent-rose)';
                    bgStyle = 'rgba(244, 63, 94, 0.12)';
                    textStyle = '#ffffff';
                  }
                } else if (isSelected) {
                  borderStyle = '1px solid var(--accent-blue)';
                  bgStyle = 'rgba(56, 189, 248, 0.1)';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    disabled={isSubmitted}
                    onClick={() => setSelectedOption(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: bgStyle,
                      border: borderStyle,
                      cursor: isSubmitted ? 'default' : 'pointer',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isSelected ? 'var(--accent-blue)' : 'var(--bg-surface)',
                      color: isSelected ? '#000' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </span>
                    <span style={{
                      flex: 1,
                      fontSize: '0.95rem',
                      color: textStyle,
                      lineHeight: 1.5
                    }}>
                      {option}
                    </span>
                    {isSubmitted && isCorrectAnswer && (
                      <CheckIcon size={18} color="var(--accent-emerald)" />
                    )}
                    {isSubmitted && isSelected && !isCorrectAnswer && (
                      <CloseIcon size={18} color="var(--accent-rose)" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after submit */}
            {isSubmitted && (
              <div
                role="region"
                aria-live="polite"
                aria-atomic="true"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: selectedOption === currentQ.correctIndex
                    ? 'rgba(16, 185, 129, 0.08)'
                    : 'rgba(244, 63, 94, 0.08)',
                  border: `1px solid ${selectedOption === currentQ.correctIndex ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
                  marginBottom: '1.75rem',
                  animation: 'fadeIn 200ms ease'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: selectedOption === currentQ.correctIndex ? 'var(--accent-emerald)' : 'var(--accent-rose)',
                  marginBottom: '0.4rem'
                }}>
                  {selectedOption === currentQ.correctIndex ? '✓ Correct Answer!' : '✕ Not Quite.'}
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {currentQ.explanation}
                </p>
                <div style={{
                  marginTop: '0.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  Related: {currentQ.relatedMilestone}
                </div>
              </div>
            )}

            {/* Submit / Next Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              {!isSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className="btn btn-primary"
                  style={{ opacity: selectedOption === null ? 0.4 : 1 }}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="btn btn-primary"
                  autoFocus
                >
                  <span>{currentIndex < totalQuestions - 1 ? 'Next Question' : 'View Final Score'}</span>
                  <ChevronRightIcon size={16} />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Finished Score Screen */
          <div className="museum-card" style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '2px solid var(--accent-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <AwardIcon size={36} color="var(--accent-blue)" />
            </div>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.825rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-blue)',
              marginBottom: '0.4rem'
            }}>
              Assessment Complete
            </div>

            <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '0.5rem' }}>
              Final Score: {score} / {totalQuestions}
            </h3>

            {/* Encouraging Feedback Tier */}
            {(() => {
              const tier = getEncouragement(score);
              return (
                <div style={{
                  maxWidth: '540px',
                  margin: '1.25rem auto 2rem auto',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-card)',
                  border: `1px solid ${tier.color}40`,
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: tier.color,
                    marginBottom: '0.4rem'
                  }}>
                    “{tier.badge}”
                  </div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {tier.text}
                  </p>
                </div>
              );
            })()}

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button onClick={handleRestart} className="btn btn-primary">
                <RefreshIcon size={16} />
                <span>Restart Quiz (No Penalty)</span>
              </button>

              <a href="#timeline" className="btn btn-secondary">
                <span>Review Timeline Milestones</span>
              </a>
            </div>

            {/* Question by Question Educational Review */}
            <div style={{
              textAlign: 'left',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '2rem'
            }}>
              <h4 style={{
                fontSize: '1.15rem',
                marginBottom: '1.25rem',
                color: 'var(--text-highlight)'
              }}>
                Detailed Question Review ({score}/{totalQuestions} Correct)
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const userAnswer = answers[idx];
                  const wasCorrect = userAnswer?.isCorrect;
                  const chosenText = userAnswer ? q.options[userAnswer.selectedIndex] : 'Not answered';
                  const correctText = q.options[q.correctIndex];

                  return (
                    <div
                      key={q.id}
                      style={{
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-card)',
                        border: `1px solid ${wasCorrect ? 'rgba(16, 185, 129, 0.25)' : 'rgba(244, 63, 94, 0.25)'}`
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          Question {idx + 1}
                        </span>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: wasCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'
                        }}>
                          {wasCorrect ? (
                            <>
                              <CheckIcon size={14} color="var(--accent-emerald)" />
                              <span>Correct</span>
                            </>
                          ) : (
                            <>
                              <CloseIcon size={14} color="var(--accent-rose)" />
                              <span>Incorrect</span>
                            </>
                          )}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        {q.question}
                      </div>

                      {!wasCorrect && (
                        <div style={{ fontSize: '0.85rem', color: 'var(--accent-rose)', marginBottom: '0.25rem' }}>
                          <strong>Your answer:</strong> {chosenText}
                        </div>
                      )}

                      <div style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>
                        <strong>Correct answer:</strong> {correctText}
                      </div>

                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {q.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
