import { memo } from 'react';
import { useRepoExplorer } from '../hooks/useRepoExplorer';
import RepoList from './RepoList';
import FavouritesFilter from './FavouritesFilter';
import LanguageFilter from './LanguageFilter';
import type { PopularReposResponse } from '../api/fetchPopularRepos';

const RepoExplorer = memo(function RepoExplorer({ repos, languages }: PopularReposResponse) {
  const {
    displayRepos,
    toggleFavourite,
    showOnlyFavourites,
    setShowOnlyFavourites,
    selectedLanguage,
    setSelectedLanguage
  } = useRepoExplorer(repos);

  return (
    <div className="container">
      <h2 className="sr-only">Repository Filters and Results</h2>
      <div id="filters" aria-label="Filters" className="flex justify-end gap-2.5 p-5">
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
      <div aria-live="polite" aria-label={`Showing ${displayRepos.length} repositories`}>
        <RepoList repos={displayRepos} toggleFavourite={toggleFavourite} />
      </div>
    </div>
  );
});

export default RepoExplorer;
