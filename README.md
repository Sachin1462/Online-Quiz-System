# Online Quiz System

A modern, interactive quiz application built with React, TypeScript, and Tailwind CSS. The system provides a seamless experience for conducting timed quizzes with instant result displays and progress tracking.

## Features

- 📝 Multiple quiz categories
- ⏱️ Timed quizzes with automatic submission
- 📊 Instant result calculation and display
- 🎯 Points-based scoring system
- 📱 Responsive design for all devices
- ⚡ Real-time progress tracking

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── data/             # Sample quiz data
├── types/            # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Components

- `QuizCard`: Displays quiz information and start button
- `QuizQuestion`: Renders individual quiz questions
- `QuizResult`: Shows quiz completion results
- `Timer`: Countdown timer for quiz duration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Live Demo

Visit the live application at: [https://sunny-gingersnap-7ab3d1.netlify.app](https://sunny-gingersnap-7ab3d1.netlify.app)
