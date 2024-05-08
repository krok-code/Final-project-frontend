import { createSlice, isAnyOf } from '@reduxjs/toolkit';
const { addColumn, editColumn } = require('./cardsReducers');

const initialState = {
  boards: [
    {
      columns: [
        {
          id: '',
          title: '',
          cards: [],
        },
      ],
    },
  ],
  currentColumnId: null,
  currentCardId: null,
  isDeadlineToday: false,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const boardsSlice = createSlice({
  name: 'dashboards',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.boards.columns.push(action.payload);
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        const { _id, text } = action.payload;
        const columnIndex = state.boards.columns.findIndex(
          item => item._id === _id
        );
        state.boards.columns[columnIndex].text = text;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(addColumn.pending, editColumn.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(addColumn.rejected, editColumn.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});
export const cardshReducer = boardsSlice.reducer;
