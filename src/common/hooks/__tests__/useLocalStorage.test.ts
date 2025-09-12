import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  const TEST_KEY = 'test-key';
  const TEST_VALUE = { name: 'test', id: 1 };

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('returns initial value when no item in localStorage', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));
    
    expect(result.current[0]).toEqual(TEST_VALUE);
  });

  it('returns stored value when item exists in localStorage', () => {
    localStorage.setItem(TEST_KEY, JSON.stringify({ name: 'stored', id: 2 }));
    
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));
    
    expect(result.current[0]).toEqual({ name: 'stored', id: 2 });
  });

  it('sets value to localStorage', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));
    const newValue = { name: 'new', id: 3 };
    
    act(() => {
      result.current[1](newValue);
    });
    
    expect(result.current[0]).toEqual(newValue);
    expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify(newValue));
  });

  it('handles function updates', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, { count: 1 }));
    
    act(() => {
      result.current[1](prev => ({ count: prev.count + 1 }));
    });
    
    expect(result.current[0]).toEqual({ count: 2 });
  });

  it('handles JSON parse errors gracefully', () => {
    localStorage.setItem(TEST_KEY, 'invalid-json');
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));
    
    expect(result.current[0]).toEqual(TEST_VALUE);
    expect(consoleSpy).toHaveBeenCalledWith(`Error reading localStorage key '${TEST_KEY}'`);
    
    consoleSpy.mockRestore();
  });

  it('handles localStorage write errors gracefully', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage full');
    });
    
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));
    
    act(() => {
      result.current[1]({ name: 'new', id: 3 });
    });
    
    expect(consoleSpy).toHaveBeenCalledWith(`Error writing localStorage key '${TEST_KEY}'`);
    
    consoleSpy.mockRestore();
    setItemSpy.mockRestore();
  });
});