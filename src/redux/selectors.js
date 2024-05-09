export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.auth.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectColumns = state => state.boards.columns;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectTheme = state => state.theme;
