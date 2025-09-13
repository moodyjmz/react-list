import { memo } from 'react';
import { useRepoExplorer } from '../hooks/useRepoExplorer';
import RepoList from './RepoList';
import FavouritesFilter from './FavouritesFilter';
import LanguageFilter from './LanguageFilter';
import type { PopularReposResponse } from '../api/fetchPopularRepos';
import styles from '@/App.module.css';

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
      <div aria-label="Filters" className={styles.repoFilters}>
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
});

export default RepoExplorer;
