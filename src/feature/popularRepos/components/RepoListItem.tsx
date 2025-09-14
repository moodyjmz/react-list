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
        <li className="mb-6">
            <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 m-0">
                        <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
                        >
                            {repo.name}
                        </a>
                    </h4>
                    <button
                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={handleToggleFavourite}
                        aria-label={isFavourite ? 'Unfavorite repo' : 'Favourite repo'}
                    >
                        <FavouritesStar active={isFavourite} />
                    </button>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{repo.description}</p>
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {repo.language && (
                            <span className="text-xs font-medium text-white px-2.5 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                                {repo.language}
                            </span>
                        )}
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                            <span className="text-yellow-500">★</span>
                            <span className="font-medium">{repo.stargazers_count.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    );
});

export default RepoListItem;
