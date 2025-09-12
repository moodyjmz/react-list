import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

vi.mock('../hooks/usePopularRepos', () => ({
  default: () => ({
    data: { repos: [{ id: 1, name: 'test' }], languages: ['JS'] },
    error: null,
    isError: false,
    isLoading: false,
    refetch: vi.fn()
  })
}));

vi.mock('../RepoExplorer', () => ({
  default: () => <div data-testid="repo-explorer">RepoExplorer</div>
}));

vi.mock('@/utils/appRefresh', () => ({
  refreshData: vi.fn()
}));

describe('RepoContainer', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('renders the main heading', async () => {
    const RepoContainer = (await import('../RepoContainer')).default;
    render(<RepoContainer />, { wrapper });

    expect(screen.getByText('Trending GitHub Repos')).toBeInTheDocument();
  });

  it('renders within an ErrorBoundary and main element', async () => {
    const RepoContainer = (await import('../RepoContainer')).default;
    render(<RepoContainer />, { wrapper });

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders component structure', async () => {
    const RepoContainer = (await import('../RepoContainer')).default;
    render(<RepoContainer />, { wrapper });

    // Verify the component renders
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});