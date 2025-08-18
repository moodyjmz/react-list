import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FavouritesFilter from '../FavouritesFilter';

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
        expect(favourites).toHaveClass('active');
        const all = screen.getByText('All');
        expect(all).not.toHaveClass('active');
    });

    it('Has class name active when Favourite is false', () => {
        render(<FavouritesFilter active={false} onToggle={() => {}}/>);
        const all = screen.getByText('All');
        expect(all).toHaveClass('active');
        const favourites = screen.getByText('Favourites');
        expect(favourites).not.toHaveClass('active');
    });
});