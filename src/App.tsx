import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import SkipLinks from './components/SkipLinks';
import RepoContainer from '@feature/popularRepos/components/RepoContainer';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SkipLinks />
      <RepoContainer />
    </QueryClientProvider>
  );
}
