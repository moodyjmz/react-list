import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import RepoListItem from '../RepoListItem'
import styles from '@/App.module.css'

describe('RepoListItem Component', () => {
    const testRepoItem = {
            'id': 1,
            'name': 'Test Name',
            'stargazers_count': 100,
            'language': 'testScript',
            'html_url': 'https://github.com/Test',
            'description': 'Test Description'
    };
    const testIsFavouriteTrue = true;
    const testIsFavouriteFalse = false;
    const testToggle = () => {};
  it('renders correctly', () => {

    render(<RepoListItem repo={testRepoItem} isFavourite={testIsFavouriteTrue} onToggleFavourite={testToggle}/>)
    screen.debug() 
    const header = screen.getByText(testRepoItem.name);
    const language = screen.getByText(testRepoItem.language);
    const description = screen.getByText(testRepoItem.description);
    const stars = screen.getByText(testRepoItem.stargazers_count);
    const url = screen.getByRole('link', { name: testRepoItem.name });

    expect(header).toBeInTheDocument();
    expect(language).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(stars).toBeInTheDocument();
    expect(url.getAttribute('href')).toBe(testRepoItem.html_url);
  });

  it('ruturns the repo id when the favourite button is clicked', () => {
    const mockToggle = (id: number) => {
      expect(id).toBe(testRepoItem.id);
    };
    render(<RepoListItem repo={testRepoItem} isFavourite={testIsFavouriteTrue} onToggleFavourite={mockToggle}/>);
    const button = screen.getByRole('button', { name: 'Unfavorite repo' });
    button.click();
  });

  it('renders with favourite button class when isFavourite is true', () => {
    render(<RepoListItem repo={testRepoItem} isFavourite={testIsFavouriteTrue} onToggleFavourite={testToggle}/>);
    const button = screen.getByRole('button', { name: 'Unfavorite repo' });
    expect(button).toHaveClass(styles.favouriteButton);
  });

  it('renders with favourite button class when isFavourite is false', () => {
    render(<RepoListItem repo={testRepoItem} isFavourite={testIsFavouriteFalse} onToggleFavourite={testToggle}/>);
    const button = screen.getByRole('button', { name: 'Favourite repo' });
    expect(button).toHaveClass(styles.favouriteButton);
  });
});
