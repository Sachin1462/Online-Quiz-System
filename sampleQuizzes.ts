import { Quiz } from '../types';

export const sampleQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Web Development Basics',
    description: 'Test your knowledge of HTML, CSS, and JavaScript fundamentals',
    timeLimit: 10,
    questions: [
      {
        id: '1-1',
        text: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyper Transfer Markup Language',
          'Home Tool Markup Language'
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: '1-2',
        text: 'Which CSS property is used to change the text color?',
        options: [
          'text-style',
          'font-color',
          'color',
          'text-color'
        ],
        correctAnswer: 2,
        points: 10
      },
      {
        id: '1-3',
        text: 'What is the correct way to declare a JavaScript variable?',
        options: [
          'variable name = value',
          'var name = value',
          'v name = value',
          'variable: value'
        ],
        correctAnswer: 1,
        points: 10
      }
    ]
  },
  {
    id: '2',
    title: 'React Fundamentals',
    description: 'Test your understanding of React core concepts',
    timeLimit: 15,
    questions: [
      {
        id: '2-1',
        text: 'What is JSX?',
        options: [
          'JavaScript XML',
          'Java Syntax Extension',
          'JavaScript Extension',
          'Java XML'
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: '2-2',
        text: 'Which hook is used for side effects in React?',
        options: [
          'useState',
          'useEffect',
          'useContext',
          'useReducer'
        ],
        correctAnswer: 1,
        points: 10
      }
    ]
  }
];
