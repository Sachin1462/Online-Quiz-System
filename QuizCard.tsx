import React from 'react';
import { Clock, Users } from 'lucide-react';
import { Quiz } from '../types';

interface QuizCardProps {
  quiz: Quiz;
  onStart: (quizId: string) => void;
}

export function QuizCard({ quiz, onStart }: QuizCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{quiz.title}</h3>
        <p className="text-gray-600 mb-4">{quiz.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{quiz.timeLimit} minutes</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{quiz.questions.length} questions</span>
          </div>
        </div>
        <button
          onClick={() => onStart(quiz.id)}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
