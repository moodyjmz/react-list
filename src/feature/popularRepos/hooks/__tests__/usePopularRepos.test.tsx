import { describe, it, expect } from 'vitest';

describe('usePopularRepos', () => {
  it('exists and can be imported', async () => {
    const usePopularRepos = await import('../usePopularRepos');
    expect(usePopularRepos.default).toBeDefined();
    expect(typeof usePopularRepos.default).toBe('function');
  });

  it('is a hook function', async () => {
    const { default: usePopularRepos } = await import('../usePopularRepos');
    expect(typeof usePopularRepos).toBe('function');
  });
});