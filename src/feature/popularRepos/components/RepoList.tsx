import RepoListItem from "./RepoListItem";
import type { DisplayRepo } from './RepoExplorer';

type Props = {
  repos: DisplayRepo[];
  toggleFavourite: (id: number) => void;
};

export default function RepoList({
  repos,
  toggleFavourite,
}: Props) {
  return (
    <ul>
      {repos.map((repo) => (
        <RepoListItem
          key={repo.id}
          repo={repo.payload}
          isFavourite={repo.isFavourite}
          onToggleFavourite={toggleFavourite}
        />
      ))}
    </ul>
  );
}
