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
    <main>
      <div className="box">
        <h1>{appTitle}</h1>
        
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
            <div className="loader-wrapper"><span className="loader"></span></div>
          ) : (
            data && <RepoExplorer repos={data.repos} languages={data.languages} />
          )}
        </ErrorBoundary>
      </div>
    </main>
  );
}
