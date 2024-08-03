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
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  list: [],
  item: {},
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
};

const rejectedHandler = (state, action) => {
  state.status = "failed";
  state.error = action.error.message;
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
        state.item = action.payload.data;
      })
      .addCase(fetchBoard.rejected, rejectedHandler)
      .addCase(addBoard.pending, pendingHandler)
      .addCase(addBoard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        state.list = [...state.list, action.payload.data];
      })
      .addCase(addBoard.rejected, rejectedHandler)
      .addCase(updateBoard.pending, pendingHandler)
      .addCase(updateBoard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const { _id } = action.payload.data;
        state.list = state.list.map((board) =>
          board._id === _id ? action.payload.data : board
        );
      })
      .addCase(updateBoard.rejected, rejectedHandler)
      .addCase(removeBoard.pending, pendingHandler)
      .addCase(removeBoard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const id = action.payload;
        state.list = state.list.filter((board) => board._id !== id);
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
        const { boardId } = action.payload.data;
        state.list = state.list.map((board) => {
          if (board._id === boardId) {
            const updatedColumnList = [
              ...board.columnList,
              action.payload.data,
            ];
            return {
              ...board,
              columnList: updatedColumnList,
            };
          }
          return board;
        });
      })
      .addCase(addColumn.rejected, rejectedHandler)
      .addCase(updateColumn.pending, pendingHandler)
      .addCase(updateColumn.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const { _id, boardId } = action.payload.data;
        state.list = state.list.map((board) => {
          if (board._id === boardId) {
            const updatedColumnList = board.columnList.map((column) =>
              column._id === _id ? action.payload.data : column
            );
            return {
              ...board,
              columnList: updatedColumnList,
            };
          }
          return board;
        });
      })
      .addCase(updateColumn.rejected, rejectedHandler)
      .addCase(removeColumn.pending, pendingHandler)
      .addCase(removeColumn.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const id = action.payload;
        state.list = state.list.map((board) => {
          const updatedColumnList = board.columnList.filter(
            (column) => column._id !== id
          );
          return {
            ...board,
            columnList: updatedColumnList,
          };
        });
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
        const { boardId, columnId } = action.payload.data;
        state.list = state.list.map((board) => {
          if (board._id === boardId) {
            return {
              ...board,
              columnList: board.columnList.map((column) => {
                if (column._id === columnId) {
                  const updatedCardList = [
                    ...column.cardList,
                    action.payload.data,
                  ];
                  return {
                    ...column,
                    cardList: updatedCardList,
                  };
                }
                return column;
              }),
            };
          }
          return board;
        });
      })
      .addCase(addCard.rejected, rejectedHandler)
      .addCase(updateCard.pending, pendingHandler)
      .addCase(updateCard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const { _id, boardId, columnId } = action.payload.data;
        state.list = state.list.map((board) => {
          if (board._id === boardId) {
            return {
              ...board,
              columnList: board.columnList.map((column) => {
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
              }),
            };
          }
          return board;
        });
      })
      .addCase(updateCard.rejected, rejectedHandler)
      .addCase(removeCard.pending, pendingHandler)
      .addCase(removeCard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const id = action.payload;
        state.list = state.list.map((board) => ({
          ...board,
          columnList: board.columnList.map((column) => {
            const updatedCardList = column.cardList.filter(
              (card) => card._id !== id
            );
            return {
              ...column,
              cardList: updatedCardList,
            };
          }),
        }));
      })
      .addCase(removeCard.rejected, rejectedHandler)
      .addCase(moveCard.pending, pendingHandler)
      .addCase(moveCard.fulfilled, (state, action) => {
        fulfilledHandler(state);
        const movedCard = action.payload.data;
        const { boardId, columnId, _id } = movedCard;
        state.list = state.list.map((board) => ({
          ...board,
          columnList: board.columnList.map((column) => {
            const updatedCardList = column.cardList.filter(
              (card) => card._id !== _id
            );
            return {
              ...column,
              cardList: updatedCardList,
            };
          }),
        }));
        state.list = state.list.map((board) => {
          if (board._id === boardId) {
            return {
              ...board,
              columnList: board.columnList.map((column) => {
                if (column._id === columnId) {
                  const updatedCardList = column.cardList.map((card) =>
                    card._id === _id ? movedCard : card
                  );
                  return {
                    ...column,
                    cardList: updatedCardList,
                  };
                }
                return column;
              }),
            };
          }
          return board;
        });
      })
      .addCase(moveCard.rejected, rejectedHandler);
  },
});

const boardReducer = boardSlice.reducer;
const persistBoardConfig = {
  key: "board",
  storage,
};

export const { setSearchTerm } = boardSlice.actions;
export const persistBoardReducer = persistReducer(
  persistBoardConfig,
  boardReducer
);
