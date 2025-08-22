import React from 'react';

type Props = {
  active: boolean;
  onToggle: (arg0: boolean) => void;
};

function FavouritesFilter({ active, onToggle }: Props) {
  return (
    <div className='button-split'>
      <button
        type="button"
        onClick={() => onToggle(false)}
        aria-pressed={!active}
        aria-label="Show All"
        className={`button-toggle ${!active ? 'active' : ''}`}
      >All</button>
      <button
        type="button"
        onClick={() => onToggle(true)}
        aria-pressed={active}
        aria-label="Show Favourites"
        className={`button-toggle ${active ? 'active' : ''}`}
      >Favourites</button>
    </div>
  );
}

export default React.memo(FavouritesFilter);