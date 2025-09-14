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

    it('Has active styling when Favourite is true', () => {
        render(<FavouritesFilter active={true} onToggle={() => {}}/>);
        const favourites = screen.getByText('Favourites');
        expect(favourites).toHaveClass('bg-blue-600', 'text-white');
        const all = screen.getByText('All');
        expect(all).toHaveClass('bg-white', 'text-gray-700');
    });

    it('Has active styling when Favourite is false', () => {
        render(<FavouritesFilter active={false} onToggle={() => {}}/>);
        const all = screen.getByText('All');
        expect(all).toHaveClass('bg-blue-600', 'text-white');
        const favourites = screen.getByText('Favourites');
        expect(favourites).toHaveClass('bg-white', 'text-gray-700');
    });
});