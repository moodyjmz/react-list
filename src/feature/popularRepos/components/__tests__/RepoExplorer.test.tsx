import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('../hooks/useRepoExplorer', () => ({
  useRepoExplorer: () => ({
    displayRepos: [],
    toggleFavourite: vi.fn(),
    showOnlyFavourites: false,
    setShowOnlyFavourites: vi.fn(),
    selectedLanguage: null,
    setSelectedLanguage: vi.fn()
  })
}));

vi.mock('./RepoList', () => ({
  default: () => <div data-testid="repo-list">RepoList</div>
}));

vi.mock('./FavouritesFilter', () => ({
  default: () => <div data-testid="favourites-filter">FavouritesFilter</div>
}));

vi.mock('./LanguageFilter', () => ({
  default: () => <div data-testid="language-filter">LanguageFilter</div>
}));

describe('RepoExplorer', () => {
  const mockProps = {
    repos: [],
    languages: ['JavaScript', 'Python']
  };

  it('renders component', async () => {
    const RepoExplorer = (await import('../RepoExplorer')).default;
    render(<RepoExplorer {...mockProps} />);

    expect(screen.getByLabelText('Filters')).toBeInTheDocument();
  });
});