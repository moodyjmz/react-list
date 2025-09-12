import { memo, useCallback } from 'react';

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
        className={`button-toggle ${!active ? 'active' : ''}`}
      >All</button>
      <button
        type="button"
        onClick={handleShowFavourites}
        aria-pressed={active}
        aria-label="Show Favourites"
        className={`button-toggle ${active ? 'active' : ''}`}
      >Favourites</button>
    </div>
  );
});

export default FavouritesFilter;