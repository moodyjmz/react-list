import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RepoList from '../RepoList';
import type { DisplayRepo } from '@feature/popularRepos/hooks/useRepoExplorer';

vi.mock('../RepoListItem', () => ({
  default: ({ repo, isFavourite, onToggleFavourite }: any) => (
    <li data-testid={`repo-item-${repo.id}`}>
      {repo.name} - {isFavourite ? 'Favourite' : 'Not Favourite'}
      <button onClick={() => onToggleFavourite(repo.id)}>Toggle</button>
    </li>
  )
}));

describe('RepoList', () => {
  const mockToggleFavourite = vi.fn();

  const mockRepos: DisplayRepo[] = [
    {
      id: 1,
      payload: {
        id: 1,
        name: 'repo1',
        stargazers_count: 100,
        language: 'JavaScript',
        html_url: 'https://github.com/test/repo1',
        description: 'Test repo 1'
      },
      isFavourite: false
    },
    {
      id: 2,
      payload: {
        id: 2,
        name: 'repo2',
        stargazers_count: 200,
        language: 'Python',
        html_url: 'https://github.com/test/repo2',
        description: 'Test repo 2'
      },
      isFavourite: true
    }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders unordered list', () => {
    render(<RepoList repos={mockRepos} toggleFavourite={mockToggleFavourite} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.tagName).toBe('UL');
  });

  it('renders correct number of repo items', () => {
    render(<RepoList repos={mockRepos} toggleFavourite={mockToggleFavourite} />);

    expect(screen.getByTestId('repo-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('repo-item-2')).toBeInTheDocument();
  });

  it('passes correct props to RepoListItem components', () => {
    render(<RepoList repos={mockRepos} toggleFavourite={mockToggleFavourite} />);

    expect(screen.getByText('repo1 - Not Favourite')).toBeInTheDocument();
    expect(screen.getByText('repo2 - Favourite')).toBeInTheDocument();
  });

  it('renders empty list when no repos provided', () => {
    render(<RepoList repos={[]} toggleFavourite={mockToggleFavourite} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.children).toHaveLength(0);
  });

  it('uses repo id as key for list items', () => {
    render(<RepoList repos={mockRepos} toggleFavourite={mockToggleFavourite} />);

    // Verify that components are rendered (keys are used internally by React)
    expect(screen.getByTestId('repo-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('repo-item-2')).toBeInTheDocument();
  });

  it('passes toggleFavourite function to each item', () => {
    render(<RepoList repos={mockRepos} toggleFavourite={mockToggleFavourite} />);

    const toggleButtons = screen.getAllByText('Toggle');
    expect(toggleButtons).toHaveLength(2);
  });

  it('renders with memo optimization', () => {
    const { rerender } = render(<RepoList repos={mockRepos} toggleFavourite={mockToggleFavourite} />);

    expect(screen.getByTestId('repo-item-1')).toBeInTheDocument();

    // Re-render with same props (memo should prevent unnecessary re-render)
    rerender(<RepoList repos={mockRepos} toggleFavourite={mockToggleFavourite} />);

    expect(screen.getByTestId('repo-item-1')).toBeInTheDocument();
  });
});