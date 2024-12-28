export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  timeLimit: number; // in minutes
  questions: Question[];
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalPoints: number;
  completedAt: Date;
  answers: Record<string, number>;
  timeSpent: number; // in seconds
}
