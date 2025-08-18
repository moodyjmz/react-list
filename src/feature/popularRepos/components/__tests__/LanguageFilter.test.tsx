import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LanguageFilter from '../LanguageFilter';

describe('LanguageFilter Component', () => {
    const testLanguages = ['JavaScript', 'Python', 'Java'];
    it('renders correctly', () => {
        render(<LanguageFilter languages={testLanguages} selectedLanguage="JavaScript" setSelectedLanguage={() => {}} />);
        screen.debug();
        const selectElement = screen.getByLabelText('Filter by language');
        expect(selectElement).toBeInTheDocument();
        const allOption = screen.getByText('All languages');
        expect(allOption).toBeInTheDocument();
        testLanguages.forEach(lang => {
            const option = screen.getByText(lang);
            expect(option).toBeInTheDocument();
        });
    });

    it('renders with the correct selected language', () => {
        render(<LanguageFilter languages={testLanguages} selectedLanguage="Python" setSelectedLanguage={() => {}} />);
        const selectElement: HTMLInputElement = screen.getByLabelText('Filter by language');
        expect(selectElement.value).toBe('Python');
    });
});