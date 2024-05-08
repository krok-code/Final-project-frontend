import { createSlice } from '@reduxjs/toolkit';
const {
  addColumn,
  editColumn,
  addBoard,
  editBoard,
} = require('./cardsReducers');

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
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.boards.push(action.payload);
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { _id, name, icon, backgroundURL } = action.payload;

        const boardIndex = state.oards.findIndex(item => item._id === _id);

        state.boards[boardIndex] = {
          ...state.boards[boardIndex],
          name,
          icon,
          backgroundURL,
        };
        state.currentName = name;
        state.currentBg = backgroundURL;
      })

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
      .addMatcher(
        isAnyOf(
          addColumn.pending,
          editColumn.pending,
          addBoard.pending,
          editBoard.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addColumn.rejected,
          editColumn.rejected,
          addBoard.rejected,
          editBoard.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});
export const cardshReducer = boardsSlice.reducer;
