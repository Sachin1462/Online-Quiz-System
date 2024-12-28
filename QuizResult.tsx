import React from 'react';
import { Trophy, Clock, Target } from 'lucide-react';
import { QuizResult } from '../types';

interface QuizResultProps {
  result: QuizResult;
  onRetry: () => void;
}

export function QuizResult({ result, onRetry }: QuizResultProps) {
  const percentage = Math.round((result.score / result.totalPoints) * 100);
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-center mb-8">
        <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
        <p className="text-gray-600">Here's how you performed</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-500" />
            <span className="text-gray-700">Score</span>
          </div>
          <span className="font-semibold">{result.score}/{result.totalPoints} ({percentage}%)</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-500" />
            <span className="text-gray-700">Time Spent</span>
          </div>
          <span className="font-semibold">
            {Math.floor(result.timeSpent / 60)}m {result.timeSpent % 60}s
          </span>
        </div>
      </div>

      <button
        onClick={onRetry}
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Try Another Quiz
      </button>
    </div>
  );
}
