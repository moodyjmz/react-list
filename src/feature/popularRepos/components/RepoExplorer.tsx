import { useState } from 'react';
import RepoList from './RepoList';
import FavouritesFilter from './FavouritesFilter';
import LanguageFilter from './LanguageFilter';
import { useLocalStorage } from '@common/hooks/useLocalStorage';
import type { PopularReposResponse, Repo } from '../api/fetchPopularRepos';

export interface DisplayRepo {
  id: number;
  payload: Repo;
  isFavourite: boolean;
}
export default function RepoExplorer({ repos, languages }: PopularReposResponse) {
  const [favourites, setFavourites] = useLocalStorage<number[]>('favourites', []);
  const [onlyFavourites, setOnlyFavourites] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const displayRepos: DisplayRepo[] = [];


  const toggleFavourite = (id: number) => {
    setFavourites(
      favourites.includes(id)
        ? favourites.filter((f: number) => f !== id)
        : [...favourites, id]
    );
  };

  // doing this like this because
  // We do one loop for looking up favourite state vs 
  // Lookup favourite state
  // Later look up favourite state again to display that state
  // Due to storing the state, putting the state into the repo object would not make sense
  repos.forEach((item) => {
    const itemIsFavourite = favourites.includes(item.id);
    if (onlyFavourites && !itemIsFavourite) return null;
    if (selectedLanguage && item.language !== selectedLanguage) return null;
    displayRepos.push({
      id: item.id,
      payload: item,
      isFavourite: itemIsFavourite
    });
  });

  return (
      <div className='container'>
        <div aria-label='Filters' className='repo-filters'>

          <LanguageFilter
            languages={languages}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}>
          </LanguageFilter>
          <FavouritesFilter
            active={onlyFavourites}
            onToggle={setOnlyFavourites}
          />

        </div>

        <RepoList repos={displayRepos} toggleFavourite={toggleFavourite} />
      </div>
  );
}
