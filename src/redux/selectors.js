export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.auth.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectTheme = state => state.auth.theme;

export const selectAllDashboards = state => state.dashboards.dashboards;

export const selectCurrentDashboard = state =>
  state.dashboards.currentDashboard.dashboard;

export const selectColumns = state => state.dashboards.currentDashboard.columns;

export const selectColumnsLength = state => state.dashboards.columnsLength;
