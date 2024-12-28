import React, { useState } from 'react';
import { QuizCard } from './components/QuizCard';
import { QuizQuestion } from './components/QuizQuestion';
import { Timer } from './components/Timer';
import { QuizResult } from './components/QuizResult';
import { sampleQuizzes } from './data/sampleQuizzes';
import { Quiz, QuizResult as QuizResultType } from './types';

function App() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [quizResult, setQuizResult] = useState<QuizResultType | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const handleStartQuiz = (quizId: string) => {
    const quiz = sampleQuizzes.find(q => q.id === quizId);
    if (quiz) {
      setActiveQuiz(quiz);
      setCurrentQuestionIndex(0);
      setAnswers({});
      setQuizResult(null);
      setStartTime(new Date());
    }
  };

  const handleSelectAnswer = (answer: number) => {
    if (!activeQuiz) return;
    
    setAnswers(prev => ({
      ...prev,
      [activeQuiz.questions[currentQuestionIndex].id]: answer
    }));

    if (currentQuestionIndex < activeQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (!activeQuiz || !startTime) return;

    const timeSpent = Math.floor((new Date().getTime() - startTime.getTime()) / 1000);
    let score = 0;
    let totalPoints = 0;

    activeQuiz.questions.forEach(question => {
      totalPoints += question.points;
      if (answers[question.id] === question.correctAnswer) {
        score += question.points;
      }
    });

    setQuizResult({
      quizId: activeQuiz.id,
      score,
      totalPoints,
      completedAt: new Date(),
      answers,
      timeSpent
    });
  };

  const handleTimeUp = () => {
    finishQuiz();
  };

  const handleRetry = () => {
    setActiveQuiz(null);
    setQuizResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {!activeQuiz && !quizResult && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Quizzes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleQuizzes.map(quiz => (
                <QuizCard
                  key={quiz.id}
                  quiz={quiz}
                  onStart={handleStartQuiz}
                />
              ))}
            </div>
          </div>
        )}

        {activeQuiz && !quizResult && (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{activeQuiz.title}</h2>
              <Timer duration={activeQuiz.timeLimit} onTimeUp={handleTimeUp} />
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
              </span>
            </div>
            <QuizQuestion
              question={activeQuiz.questions[currentQuestionIndex]}
              selectedAnswer={answers[activeQuiz.questions[currentQuestionIndex].id] ?? null}
              onSelectAnswer={handleSelectAnswer}
            />
          </div>
        )}

        {quizResult && (
          <QuizResult result={quizResult} onRetry={handleRetry} />
        )}
      </div>
    </div>
  );
}

export default App;
