import React from 'react';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answer: number) => void;
  showResult?: boolean;
}

export function QuizQuestion({ 
  question, 
  selectedAnswer, 
  onSelectAnswer,
  showResult = false 
}: QuizQuestionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{question.text}</h3>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full p-4 text-left rounded-md border transition-all ${
              selectedAnswer === index
                ? showResult
                  ? index === question.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : 'bg-indigo-100 border-indigo-500'
                : 'border-gray-200 hover:border-indigo-500'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && selectedAnswer !== null && (
        <div className="mt-4 text-sm">
          {selectedAnswer === question.correctAnswer ? (
            <p className="text-green-600">Correct! (+{question.points} points)</p>
          ) : (
            <p className="text-red-600">
              Incorrect. The correct answer was: {question.options[question.correctAnswer]}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
