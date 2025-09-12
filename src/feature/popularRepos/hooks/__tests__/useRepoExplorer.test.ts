import { describe, it, expect } from 'vitest';

describe('useRepoExplorer', () => {
  it('exists and can be imported', async () => {
    const { useRepoExplorer } = await import('../useRepoExplorer');
    expect(useRepoExplorer).toBeDefined();
    expect(typeof useRepoExplorer).toBe('function');
  });

  it('exports DisplayRepo type', async () => {
    const module = await import('../useRepoExplorer');
    expect(module.useRepoExplorer).toBeDefined();
  });
});