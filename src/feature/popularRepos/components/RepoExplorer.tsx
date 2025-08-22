import { useRepoExplorer } from '../hooks/useRepoExplorer';
import RepoList from './RepoList';
import FavouritesFilter from './FavouritesFilter';
import LanguageFilter from './LanguageFilter';
import type { PopularReposResponse } from '../api/fetchPopularRepos';

export default function RepoExplorer({ repos, languages }: PopularReposResponse) {
  const {
    displayRepos,
    toggleFavourite,
    showOnlyFavourites,
    setShowOnlyFavourites,
    selectedLanguage,
    setSelectedLanguage
  } = useRepoExplorer(repos);

  return (
    <div className='container'>
      <div aria-label='Filters' className='repo-filters'>
        <LanguageFilter
          languages={languages}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
        <FavouritesFilter
          active={showOnlyFavourites}
          onToggle={setShowOnlyFavourites}
        />
      </div>
      <RepoList repos={displayRepos} toggleFavourite={toggleFavourite} />
    </div>
  );
}
