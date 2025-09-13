import { memo, useCallback } from 'react';
import type { Repo } from '../api/fetchPopularRepos';
import FavouritesStar from './FavouriteStar';
import styles from '@/App.module.css';

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
        <li className={styles.repoListItem}>
            <article className={styles.repoListItemArticle}>
                <button
                    className={styles.favouriteButton}
                    onClick={handleToggleFavourite}
                    aria-label={isFavourite ? 'Unfavorite repo' : 'Favourite repo'}
                >
                    <FavouritesStar active={isFavourite} />
                </button>
                <h2 className={styles.repoListItemHeader}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </h2>

                <p>{repo.description}</p>
                {repo.language && <span className={styles.repoListItemLanguage}>{repo.language}</span>}
                &nbsp;<span>{repo.stargazers_count}<span>★</span></span>
            </article>
        </li>
    );
});

export default RepoListItem;
