export const refreshApp = () => {
  window.location.reload();
};

export const refreshData = () => {
  // Could be extended to invalidate specific queries, clear cache, etc.
  refreshApp();
};