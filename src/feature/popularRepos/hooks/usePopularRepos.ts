import { useQuery } from '@tanstack/react-query';
import { fetchPopularRepos } from '../api/fetchPopularRepos';

export default function usePopularRepos() {
  return useQuery({
    queryKey: ['popular-repos'],
    queryFn: fetchPopularRepos
  });
}
