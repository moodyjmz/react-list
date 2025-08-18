import { test, vi, expect } from 'vitest';
import { fetchPopularRepos } from '../fetchPopularRepos';
import { afterEach } from 'vitest';

test('fetches data successfully from API', async () => {
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);
    const dateStr = lastWeek.toISOString().split('T')[0];
    // Mock the fetch function.
    const mockResponse = {
        items: [
            {
                'id': 1,
                'name': 'Test Name',
                'stargazers_count': 100,
                'language': 'testScript',
                'html_url': 'https://github.com/Test',
                'description': 'Test Description'
            }
        ]
    };

    // Here we tell Vitest to mock fetch on the `window` object.
    global.fetch = vi.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse),
        }),
    );

    // Call the function and assert the result
    const data = await fetchPopularRepos();
    expect(data.repos).toEqual(mockResponse.items);
    expect(data.languages).toEqual(['testScript']);

    // Check that fetch was called exactly once
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`https://api.github.com/search/repositories?q=created:>${dateStr}&sort=stars&order=desc`);
});

afterEach(() => {
    vi.clearAllMocks();
});