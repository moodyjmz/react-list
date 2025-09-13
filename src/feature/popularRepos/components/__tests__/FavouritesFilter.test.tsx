import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FavouritesFilter from '../FavouritesFilter';
import styles from '@/App.module.css';

describe('FavouritesFilter Component', () => {
    it('renders correctly', () => {
        render(<FavouritesFilter active={true} onToggle={() => {}}/>);
        screen.debug();
        const favourites = screen.getByText('Favourites');
        const all = screen.getByText('All');
        expect(favourites).toBeInTheDocument();
        expect(all).toBeInTheDocument();
    });

    it('Has class name active when Favourite is true', () => {
        render(<FavouritesFilter active={true} onToggle={() => {}}/>);
        const favourites = screen.getByText('Favourites');
        expect(favourites).toHaveClass(styles.active);
        const all = screen.getByText('All');
        expect(all).not.toHaveClass(styles.active);
    });

    it('Has class name active when Favourite is false', () => {
        render(<FavouritesFilter active={false} onToggle={() => {}}/>);
        const all = screen.getByText('All');
        expect(all).toHaveClass(styles.active);
        const favourites = screen.getByText('Favourites');
        expect(favourites).not.toHaveClass(styles.active);
    });
});