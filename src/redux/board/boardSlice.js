import { createSlice } from "@reduxjs/toolkit";
import {
  addBoard,
  fetchBoard,
  fetchBoardList,
  removeBoard,
  updateBoard,
} from "./operations/boardOperations";
import {
  addColumn,
  fetchColumn,
  fetchColumnList,
  removeColumn,
  updateColumn,
} from "./operations/columnOperations";
import {
  addCard,
  fetchCard,
  fetchCardList,
  moveCard,
  removeCard,
  updateCard,
} from "./operations/cardOperations";

const initialState = {
  list: [],
  current: {},
  columnList: [],
  column: {},
  cardList: [],
  card: {},
  status: "idle",
  error: null,
  searchTerm: "",
};

const pendingHandler = (state) => {
  state.status = "loading";
  state.error = null;
};

const fulfilledHandler = (state) => {
  state.status = "succeeded";
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.status = "failed";
  state.error = action.payload.message;
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardList.pending, pendingHandler)
      .addCase(fetchBoardList.fulfilled, (state, action) => {
        fulfilledHandler(state);
        state.list = action.payload.data;
      })
      .addCase(fetchBoardList.rejected, rejectedHandler)
      .addCase(fetchBoard.pending, pendingHandler)
      .addCase(fetchBoard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        state.current = action.payload.data;
      })
      .addCase(fetchBoard.rejected, rejectedHandler)
      .addCase(addBoard.pending, pendingHandler)
      .addCase(addBoard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        state.list = [...state.list, action.payload.data];
        state.current = action.payload.data;
      })
      .addCase(addBoard.rejected, rejectedHandler)
      .addCase(updateBoard.pending, pendingHandler)
      .addCase(updateBoard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const { _id } = action.payload.data;
        const updatedBoard = action.payload.data;
        state.list = state.list.map((board) =>
          board._id === _id ? updatedBoard : board
        );
        state.current = { ...state.current, ...updatedBoard };
      })
      .addCase(updateBoard.rejected, rejectedHandler)
      .addCase(removeBoard.pending, pendingHandler)
      .addCase(removeBoard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const id = action.payload;
        state.list = state.list.filter((board) => board._id !== id);
        state.current = {};
      })
      .addCase(removeBoard.rejected, rejectedHandler)
      .addCase(fetchColumnList.pending, pendingHandler)
      .addCase(fetchColumnList.fulfilled, (state, action) => {
        fulfilledHandler(state);
        state.columnList = action.payload.data;
      })
      .addCase(fetchColumnList.rejected, rejectedHandler)
      .addCase(fetchColumn.pending, pendingHandler)
      .addCase(fetchColumn.fulfilled, (state, action) => {
        fulfilledHandler(state);
        state.column = action.payload.data;
      })
      .addCase(fetchColumn.rejected, rejectedHandler)
      .addCase(addColumn.pending, pendingHandler)
      .addCase(addColumn.fulfilled, (state, action) => {
        fulfilledHandler(state);
        state.current.columnList = [
          ...state.current.columnList,
          action.payload.data,
        ];
      })
      .addCase(addColumn.rejected, rejectedHandler)
      .addCase(updateColumn.pending, pendingHandler)
      .addCase(updateColumn.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const { _id } = action.payload.data;
        const updatedColumn = action.payload.data;
        state.current.columnList = state.current.columnList.map((column) =>
          column._id === _id ? { ...column, ...updatedColumn } : column
        );
      })
      .addCase(updateColumn.rejected, rejectedHandler)
      .addCase(removeColumn.pending, pendingHandler)
      .addCase(removeColumn.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const id = action.payload;
        state.current.columnList = state.current.columnList.filter(
          (column) => column._id !== id
        );
      })
      .addCase(removeColumn.rejected, rejectedHandler)
      .addCase(fetchCardList.pending, pendingHandler)
      .addCase(fetchCardList.fulfilled, (state, action) => {
        fulfilledHandler(state);
        state.cardList = action.payload.data;
      })
      .addCase(fetchCardList.rejected, rejectedHandler)
      .addCase(fetchCard.pending, pendingHandler)
      .addCase(fetchCard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        state.card = action.payload.data;
      })
      .addCase(fetchCard.rejected, rejectedHandler)
      .addCase(addCard.pending, pendingHandler)
      .addCase(addCard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const { columnId } = action.payload.data;
        state.current.columnList = state.current.columnList.map((column) => {
          if (column.cardList) {
            if (column._id === columnId) {
              const updatedCardList = [...column.cardList, action.payload.data];
              return {
                ...column,
                cardList: updatedCardList,
              };
            }
          } else {
            return {
              ...column,
              cardList: [action.payload.data],
            };
          }

          return column;
        });
      })
      .addCase(addCard.rejected, rejectedHandler)
      .addCase(updateCard.pending, pendingHandler)
      .addCase(updateCard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const { _id, columnId } = action.payload.data;
        state.current.columnList = state.current.columnList.map((column) => {
          if (column._id === columnId) {
            const updatedCardList = column.cardList.map((card) =>
              card._id === _id ? action.payload.data : card
            );
            return {
              ...column,
              cardList: updatedCardList,
            };
          }
          return column;
        });
      })
      .addCase(updateCard.rejected, rejectedHandler)
      .addCase(removeCard.pending, pendingHandler)
      .addCase(removeCard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const id = action.payload;
        state.current.columnList = state.current.columnList.map((column) => {
          const updatedCardList = column.cardList.filter(
            (card) => card._id !== id
          );
          return {
            ...column,
            cardList: updatedCardList,
          };
        });
      })
      .addCase(removeCard.rejected, rejectedHandler)
      .addCase(moveCard.pending, pendingHandler)
      .addCase(moveCard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const movedCard = action.payload.data;
        const { columnId, _id } = movedCard;
        state.current.columnList = state.current.columnList.map((column) => {
          if (column.cardList) {
            const updatedCardList = column.cardList.filter(
              (card) => card._id !== _id
            );
            return {
              ...column,
              cardList: updatedCardList,
            };
          } else {
            return column;
          }
        });
        state.current.columnList = state.current.columnList.map((column) => {
          if (column._id === columnId) {
            if (column.cardList) {
              const updatedCardList = [...column.cardList, movedCard];
              return {
                ...column,
                cardList: updatedCardList,
              };
            } else {
              return {
                ...column,
                cardList: [movedCard],
              };
            }
          }
          return column;
        });
      })
      .addCase(moveCard.rejected, rejectedHandler);
  },
});

export const { setSearchTerm } = boardSlice.actions;

export default boardSlice.reducer;
