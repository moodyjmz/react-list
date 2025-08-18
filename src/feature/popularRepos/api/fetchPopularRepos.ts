export interface ApiRepo {
  [propName: string]: number | string | undefined | object | null | boolean;
}

export interface Repo extends ApiRepo{
  id: number;
  name: string;
  stargazers_count: number;
  description?: string;
  html_url: string;
  language?: string;
}

export interface PopularReposResponse {
  languages: string[];
  repos: Repo[];
}

const extractKeys: string[] = ['id', 'name', 'stargazers_count', 'language', 'html_url', 'description'];

const createRepoItem = (item: ApiRepo, keys: string[]): Repo => {
  const repoItem: ApiRepo = {};
  keys.forEach((key: string) => {
    if (item[key] !== undefined) {
      repoItem[key] = item[key];
    }
  });
  return repoItem as Repo;
}

export async function fetchPopularRepos(): Promise<PopularReposResponse> {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const dateStr = lastWeek.toISOString().split("T")[0];

  const res = await fetch(
    `https://api.github.com/search/repositories?q=created:>${dateStr}&sort=stars&order=desc`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch popular repositories");
  }
  const raw = await res.json();
  // const raw = api;
  // post process data to extract only what we want
  const languagesSet: Set<string> = new Set();
  const repos: Repo[] = [];
  raw?.items.forEach((item) => {
    // get languages and extract item data we care about
    item.language && languagesSet.add(item.language);
    repos.push(createRepoItem(item, extractKeys));
  });
  const languages: string[] = Array.from(languagesSet);
  return {
    languages,
    repos
  };
}
