import { memo } from 'react';

type Props = {
  active: boolean;
};

const FavouritesStar = memo(function FavouritesStar({ active }: Props) {
  return (
    <span>{active ? '★' : '☆'}</span>
  );
});

export default FavouritesStar;
