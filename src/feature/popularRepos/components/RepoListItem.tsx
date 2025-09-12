import { memo, useCallback } from 'react';
import type { Repo } from '../api/fetchPopularRepos';
import FavouritesStar from './FavouriteStar';

type RepoListItemProps = {
    repo: Repo;
    isFavourite: boolean;
    onToggleFavourite: (id: number) => void;
};

const RepoListItem = memo(function RepoListItem({ repo, isFavourite, onToggleFavourite }: RepoListItemProps) {
    const handleToggleFavourite = useCallback(() => {
        onToggleFavourite(repo.id);
    }, [onToggleFavourite, repo.id]);
    return (
        <li className="repo-list-item">
            <article className="repo-list-item__article">
                <button
                    className={`favourite-button ${isFavourite ? 'favourite' : ''}`}
                    onClick={handleToggleFavourite}
                    aria-label={isFavourite ? 'Unfavorite repo' : 'Favourite repo'}
                >
                    <FavouritesStar active={isFavourite} />
                </button>
                <h2 className="repo-list-item__header">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </h2>

                <p>{repo.description}</p>
                {repo.language && <span className="repo-list-item__language">{repo.language}</span>}
                &nbsp;<span>{repo.stargazers_count}<span>★</span></span>
            </article>
        </li>
    );
});

export default RepoListItem;
