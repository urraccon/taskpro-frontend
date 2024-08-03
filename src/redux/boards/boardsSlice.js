import { createSlice } from '@reduxjs/toolkit';

import {
  createBoard,
  deleteBoard,
  fetchAllBoard,
  fetchSingleBoard,
  updateBoard,
} from './operationsBoards';
import { addColumn, deleteColumn, updateColumn } from './operationsColumns';
import {
  createCard,
  deleteCard,
  replaceCard,
  updateCard,
} from './operationsCards';

const initialState = {
  boards: [],
  selectedBoard: {},
  isLoading: false,
  error: null,
};
const hadlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const allBoardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchAllBoard.pending, hadlePending)
      .addCase(fetchAllBoard.fulfilled, (state, action) => {
        state.boards = [...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchAllBoard.rejected, (state, payload) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchSingleBoard.pending, hadlePending)
      .addCase(fetchSingleBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.columns[0].hasOwnProperty('_id')) {
          state.selectedBoard = action.payload;

          return;
        }
        state.selectedBoard = action.payload;
        state.selectedBoard.columns = [];
      })

      .addCase(fetchSingleBoard.rejected, handleError)
      .addCase(createBoard.pending, hadlePending)
      .addCase(createBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards.push(action.payload);
      })
      .addCase(createBoard.rejected, handleError)
      .addCase(updateBoard.pending, hadlePending)
      .addCase(updateBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedBoard.title = action.payload.title;
        state.selectedBoard.icon = action.payload.icon;
        state.selectedBoard.background = action.payload.background;
        const idx = state.boards.findIndex(el => el._id === action.payload._id);
        state.boards[idx] = action.payload;
      })
      .addCase(updateBoard.rejected, handleError)
      .addCase(deleteBoard.pending, hadlePending)

      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.boards.findIndex(el => el._id === action.payload);
        state.boards.splice(idx, 1);
        if (state.selectedBoard._id === action.payload) {
          state.selectedBoard = {};
        }
      })
      .addCase(deleteBoard.rejected, handleError)
      .addCase(addColumn.pending, hadlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        const column = { ...action.payload, cards: [] };
        state.selectedBoard.columns.push(column);
      })
      .addCase(addColumn.rejected, handleError)
      .addCase(updateColumn.pending, hadlePending)
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.selectedBoard.columns.findIndex(
          el => el._id === action.payload._id
        );
        state.selectedBoard.columns[idx] = {
          ...state.selectedBoard.columns[idx],
          ...action.payload,
        };
      })
      .addCase(updateColumn.rejected, handleError)
      .addCase(deleteColumn.pending, hadlePending)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        const idx = state.selectedBoard.columns.findIndex(
          el => el._id === action.payload
        );
        if (idx === -1) return state;
        state.selectedBoard.columns.splice(idx, 1);
      })
      .addCase(deleteColumn.rejected, handleError)
      .addCase(createCard.pending, hadlePending)
      .addCase(createCard.fulfilled, (state, action) => {
        state.isLoading = false;
        const { payload } = action;
        const idx = state.selectedBoard.columns.findIndex(
          el => el._id === payload.cardOwner
        );

        if (idx === -1) {
          return state;
        }
        if (state.selectedBoard.columns[idx].hasOwnProperty('cards')) {
          state.selectedBoard.columns[idx].cards.push(payload);
          return;
        }
        state.selectedBoard.columns[idx].cards = [];
        state.selectedBoard.columns[idx].cards.push(action.payload);
      })
      .addCase(createCard.rejected, handleError)
      .addCase(updateCard.pending, hadlePending)
      .addCase(updateCard.fulfilled, (state, action) => {
        state.isLoading = false;
        const { payload } = action;
        const columnToUpdate = state.selectedBoard.columns.findIndex(
          el => el._id === payload.cardOwner
        );
        if (columnToUpdate === -1) return state;
        const idxCard = state.selectedBoard.columns[
          columnToUpdate
        ].cards.findIndex(el => el._id === payload._id);
        if (idxCard === -1) return state;
        state.selectedBoard.columns[columnToUpdate].cards.splice(
          idxCard,
          1,
          payload
        );
      })
      .addCase(updateCard.rejected, handleError)
      .addCase(deleteCard.pending, hadlePending)
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        const { payload } = action;
        // ! ______________________________________________
        state.selectedBoard.columns.forEach(column => {
          const cardIdx = column.cards.findIndex(card => card._id === payload);
          if (cardIdx !== -1) {
            column.cards.splice(cardIdx, 1);
          }
        });
      })
      .addCase(deleteCard.rejected, handleError)
      .addCase(replaceCard.pending, hadlePending)
      .addCase(replaceCard.fulfilled, (state, action) => {
        state.isLoading = false;
        const {
          payload: { data },
        } = action;
        // remove old card
        state.selectedBoard.columns.forEach(column => {
          const cardIdx = column.cards.findIndex(card => card._id === data._id);
          if (cardIdx !== -1) {
            column.cards.splice(cardIdx, 1);
          }
        });
        // !___________________________________________________
        const columnToUpdate = state.selectedBoard.columns.findIndex(
          el => el._id === data.cardOwner
        );
        if (columnToUpdate === -1) return state;

        state.selectedBoard.columns[columnToUpdate].cards.push(data);
      })
      .addCase(replaceCard.rejected, handleError),
});

export const boardsReducer = allBoardsSlice.reducer;
