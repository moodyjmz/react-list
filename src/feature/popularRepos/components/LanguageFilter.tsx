import React, { memo, useCallback } from 'react';

export interface LanguageFilterProps {
    languages: string[];
    selectedLanguage: string | null;
    setSelectedLanguage: (language: string | null) => void;
    className?: string;
    style?: React.CSSProperties;
    label?: string;
}

const LanguageFilter = memo(function LanguageFilter({
    languages,
    selectedLanguage,
    setSelectedLanguage,
    className,
    style,
    label = 'Filter by language',
}: LanguageFilterProps) {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value || null);
    }, [setSelectedLanguage]);
    return (
        <div className={className} style={style}>
            {label && (
                <label htmlFor="language-filter-select" className="mr-2">
                    {label}:
                </label>
            )}
            <select
                id="language-filter-select"
                aria-label={label}
                value={selectedLanguage || ''}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">All languages</option>
                {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                ))}
            </select>
        </div>
    );
});

export default LanguageFilter;
