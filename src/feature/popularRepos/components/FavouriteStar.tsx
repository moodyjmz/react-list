type Props = {
  active: boolean;
};

export default function FavouritesStar({ active }: Props) {
  return (
    <span>{active ? '★' : '☆'}</span>
  );
}
