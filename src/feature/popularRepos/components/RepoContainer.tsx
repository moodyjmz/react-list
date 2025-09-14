import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { refreshData } from '@/utils/appRefresh';
import usePopularRepos from '../hooks/usePopularRepos';
import RepoExplorer from './RepoExplorer';

const ErrorFallback = ({ resetErrorBoundary }: { resetErrorBoundary: () => void }) => (
  <div role="alert">
    <p>Error loading repositories.</p>
    <button onClick={resetErrorBoundary}>Retry</button>
  </div>
);

export default function RepoContainer() {
  const { data, error, isError, isLoading, refetch } = usePopularRepos();
  const appTitle = 'Trending GitHub Repos';

  useEffect(() => {
    document.title = appTitle;
  }, []);

  return (
    <main id="main-content">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl m-0 p-5">{appTitle}</h1>
        
        <ErrorBoundary 
          FallbackComponent={ErrorFallback}
          onReset={refreshData}
        >
          {isError ? (
            <>
              <p role="alert">Error loading repositories. {error?.message}</p>
              <button onClick={() => refetch()}>Retry</button>
            </>
          ) : isLoading ? (
            <div className="flex justify-center items-center py-20" role="status" aria-live="polite">
              <span className="text-2xl font-medium text-gray-600 animate-pulse">Loading trending repositories...</span>
              <span className="sr-only">Please wait while we fetch the latest trending GitHub repositories</span>
            </div>
          ) : (
            data && <RepoExplorer repos={data.repos} languages={data.languages} />
          )}
        </ErrorBoundary>
      </div>
    </main>
  );
}
