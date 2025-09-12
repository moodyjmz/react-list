import { describe, it, expect, vi, beforeEach } from 'vitest';
import { refreshApp, refreshData } from '../appRefresh';

describe('appRefresh', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock window.location.reload
    Object.defineProperty(window, 'location', {
      value: {
        reload: vi.fn()
      },
      writable: true
    });
  });

  describe('refreshApp', () => {
    it('calls window.location.reload', () => {
      const mockReload = vi.fn();
      window.location.reload = mockReload;

      refreshApp();

      expect(mockReload).toHaveBeenCalledOnce();
    });
  });

  describe('refreshData', () => {
    it('calls refreshApp function', () => {
      const mockReload = vi.fn();
      window.location.reload = mockReload;

      refreshData();

      expect(mockReload).toHaveBeenCalledOnce();
    });

    it('provides extension point for future functionality', () => {
      // This test verifies that refreshData exists as a separate function
      // that can be extended in the future without changing all call sites
      expect(typeof refreshData).toBe('function');
      expect(refreshData).toBeDefined();
    });
  });

  describe('function separation', () => {
    it('keeps refreshApp and refreshData as separate functions', () => {
      // Verify that both functions exist and are different
      expect(refreshApp).not.toBe(refreshData);
      expect(typeof refreshApp).toBe('function');
      expect(typeof refreshData).toBe('function');
    });
  });
});