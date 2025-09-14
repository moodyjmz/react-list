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
    <div className="flex">
      <button
        type="button"
        onClick={handleShowAll}
        aria-pressed={!active}
        aria-label="Show All"
        className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          !active ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >All</button>
      <button
        type="button"
        onClick={handleShowFavourites}
        aria-pressed={active}
        aria-label="Show Favourites"
        className={`px-4 py-2 text-sm font-medium border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          active ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >Favourites</button>
    </div>
  );
});

export default FavouritesFilter;