import { memo } from 'react';
import RepoListItem from "./RepoListItem";
import type { DisplayRepo } from '@feature/popularRepos/hooks/useRepoExplorer';

type Props = {
  repos: DisplayRepo[];
  toggleFavourite: (id: number) => void;
};

const RepoList = memo(function RepoList({
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
});

export default RepoList;
