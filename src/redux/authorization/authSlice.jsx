import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registration, signin, currentUser, logoutUser } from './authReducer';

const initialState = {
  token: null,
  userData: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
        state.token = action.payload.token;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
        state.token = action.payload.token;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          registration.pending,
          signin.pending,
          currentUser.pending,
          logoutUser.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registration.rejected,
          signin.rejected,
          currentUser.rejected,
          logoutUser.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
