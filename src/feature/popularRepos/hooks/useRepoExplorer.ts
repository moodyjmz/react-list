import { useState, useMemo } from 'react';
import { useLocalStorage } from '@common/hooks/useLocalStorage';
import type { Repo } from '../api/fetchPopularRepos';

export interface DisplayRepo {
  id: number;
  payload: Repo;
  isFavourite: boolean;
}

export function useRepoExplorer(repos: Repo[]) {
  const [favourites, setFavourites] = useLocalStorage<number[]>('favourites', []);
  const [showOnlyFavourites, setShowOnlyFavourites] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const toggleFavourite = (id: number) => {
    setFavourites(
      favourites.includes(id)
        ? favourites.filter(favId => favId !== id)
        : [...favourites, id]
    );
  };

  const displayRepos: DisplayRepo[] = useMemo(() => (
    repos
      .filter(repo => (
        (!showOnlyFavourites || favourites.includes(repo.id)) &&
        (!selectedLanguage || repo.language === selectedLanguage)
      ))
      .map(repo => ({
        id: repo.id,
        payload: repo,
        isFavourite: favourites.includes(repo.id)
      }))
  ), [repos, favourites, showOnlyFavourites, selectedLanguage]);

  return {
    displayRepos,
    favourites,
    toggleFavourite,
    showOnlyFavourites,
    setShowOnlyFavourites,
    selectedLanguage,
    setSelectedLanguage,
  };
}
