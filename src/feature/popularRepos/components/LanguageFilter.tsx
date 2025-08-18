export interface LanguageFilterProps {
    languages: string[];
    selectedLanguage: string | null;
    setSelectedLanguage: (language: string | null) => void;
}

export default function LanguageFilter({ languages, selectedLanguage, setSelectedLanguage }: LanguageFilterProps) {
    return (
        <select
            aria-label='Filter by language'
            value={selectedLanguage || ''}
            onChange={e => setSelectedLanguage(e.target.value || null)}
        >
            <option value=''>All languages</option>
            {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
            ))}
        </select>
    )
}
