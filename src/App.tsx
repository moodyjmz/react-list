import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import RepoContainer from '@feature/popularRepos/components/RepoContainer';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RepoContainer />
    </QueryClientProvider>
  );
}
