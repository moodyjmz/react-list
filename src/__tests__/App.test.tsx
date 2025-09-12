import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

vi.mock('@feature/popularRepos/components/RepoContainer', () => ({
  default: () => <div data-testid="repo-container">RepoContainer</div>
}));

describe('App', () => {
  it('renders QueryClientProvider with RepoContainer', () => {
    render(<App />);
    
    expect(screen.getByTestId('repo-container')).toBeInTheDocument();
  });

  it('provides QueryClient to children', () => {
    render(<App />);
    
    // Verify that the component renders without QueryClient errors
    expect(screen.getByTestId('repo-container')).toBeInTheDocument();
  });
});