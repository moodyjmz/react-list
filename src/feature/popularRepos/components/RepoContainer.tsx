import { useEffect } from 'react';
import usePopularRepos from '../hooks/usePopularRepos';
import RepoExplorer from './RepoExplorer';


export default function RepoContainer() {
  // This approach does mean that the data can become stale
  // However we could add a timed refetch or so and it should not pollute the list behaviours
  // otherwise a filter action could perform a refetch, would could be odd
  const { data, error, isError, isLoading, refetch } = usePopularRepos();
  const appTitle = 'Trending GitHub Repos';

  useEffect(() => {
    document.title = appTitle;
  }, []);

  // Would like to use suspense and error boundaries here, but time...
  if (isError)
    return (
      <>
        <p role='alert'>Error loading repositories. {error.message}</p>
        <button onClick={() => refetch()}>Retry</button>
      </>
    );
  if (isLoading) return <div className='loader-wrapper'><span className='loader'></span></div>;

  return (
    <main>
      <div className='box'>
        <h1>{appTitle}</h1>

        { data && <RepoExplorer repos={data?.repos} languages={data?.languages} /> }
      </div>
    </main>
  );
}
