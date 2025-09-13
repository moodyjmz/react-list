# React List - Trending GitHub Repos

A high-performance React application that displays trending GitHub repositories with favorites functionality. Built with modern React patterns, TanStack Query, and comprehensive testing.

## 🚀 Live Demo

The application is automatically deployed to GitHub Pages: [View Demo](https://moodyjmz.github.io/react-list/)

## ✨ Features

- 📊 **Trending Repositories**: Displays popular GitHub repos from the past week
- ⭐ **Favorites**: Save your favorite repos to local storage
- 🔍 **Filtering**: Filter by programming language and show only favorites
- 🎯 **Performance**: Optimized with React.memo, useCallback, and useMemo
- 🛡️ **Error Handling**: Robust error boundaries and retry functionality
- ♿ **Accessibility**: Full ARIA support and semantic HTML
- 📱 **Responsive**: Works great on all device sizes

## 🏗️ Tech Stack

- **React 19** with latest features (Suspense, Error Boundaries)
- **TypeScript** for type safety
- **TanStack Query** for data fetching and caching
- **Vite** for fast development and building
- **Vitest + RTL** for comprehensive testing (92% coverage)
- **ESLint** for code quality
- **GitHub Actions** for CI/CD

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
git clone https://github.com/moodyjmz/react-list.git
cd react-list
npm install
```

### Available Scripts
```bash
# Development server
npm run dev

# Build for production  
npm run build

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Lint code
npm run lint

# Preview production build
npm run preview
```

## 🧪 Testing

The project maintains **92% test coverage** with comprehensive test suites:

- **Component Tests**: All React components with user interactions
- **Hook Tests**: Custom hooks with edge cases and error handling  
- **Integration Tests**: End-to-end functionality testing
- **Accessibility Tests**: ARIA compliance and semantic HTML

```bash
# Run all tests with coverage report
npm test -- --coverage
```

## 🚀 Deployment

### Automatic Deployment
The project automatically deploys to GitHub Pages when code is pushed to the `main` branch.

### Manual Deployment
```bash
npm run build
# Upload the `dist` folder to your hosting provider
```

### GitHub Pages Setup
1. Go to your repository Settings → Pages
2. Source: GitHub Actions
3. The workflow will automatically deploy on push to main

## 🏛️ Architecture

```
src/
├── components/          # Shared components
├── common/hooks/        # Reusable hooks
├── feature/             # Feature-based modules
│   └── popularRepos/
│       ├── api/         # API calls
│       ├── components/  # Feature components
│       └── hooks/       # Feature hooks
├── utils/               # Utility functions
└── __tests__/           # Test files
```

## 🔧 Configuration

The app follows best practices from `CLAUDE.md`:

- ✅ High performance with latest React features
- ✅ TanStack Query for data management
- ✅ Modular, testable architecture
- ✅ Comprehensive RTL testing
- ✅ Single quotes for TS, double quotes for HTML
- ✅ Memoization and performance optimizations
- ✅ Accessibility and semantic HTML
- ✅ Simple, reusable code patterns

## 📈 Performance

- **React.memo**: Prevents unnecessary re-renders
- **useCallback**: Stable function references
- **useMemo**: Expensive computation caching
- **TanStack Query**: Intelligent data caching and background updates
- **Error Boundaries**: Graceful error handling without full app crashes

## ✅ Improvements Made

This project has been enhanced to address the original concerns:

- ✅ **Error Boundaries**: Added with react-error-boundary library
- ✅ **Comprehensive Testing**: 92% coverage with 39 tests across 13 test files
- ✅ **GitHub Actions**: Automated CI/CD pipeline for testing and deployment
- ✅ **Path Aliases**: Fixed TypeScript configuration for clean imports
- ✅ **Performance**: Added memoization and React optimization patterns
- ✅ **Type Organization**: Consistent TypeScript patterns throughout

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.
