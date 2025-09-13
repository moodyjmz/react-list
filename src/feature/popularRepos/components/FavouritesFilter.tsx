import { memo, useCallback } from 'react';
import styles from '@/App.module.css';

type Props = {
  active: boolean;
  onToggle: (arg0: boolean) => void;
};

const FavouritesFilter = memo(function FavouritesFilter({ active, onToggle }: Props) {
  const handleShowAll = useCallback(() => {
    onToggle(false);
  }, [onToggle]);
  
  const handleShowFavourites = useCallback(() => {
    onToggle(true);
  }, [onToggle]);

  return (
    <div className="button-split">
      <button
        type="button"
        onClick={handleShowAll}
        aria-pressed={!active}
        aria-label="Show All"
        className={`${styles.buttonToggle} ${!active ? styles.active : ''}`}
      >All</button>
      <button
        type="button"
        onClick={handleShowFavourites}
        aria-pressed={active}
        aria-label="Show Favourites"
        className={`${styles.buttonToggle} ${active ? styles.active : ''}`}
      >Favourites</button>
    </div>
  );
});

export default FavouritesFilter;