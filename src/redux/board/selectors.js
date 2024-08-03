import { createSelector } from "reselect";

export const selectBoardList = (state) => state.board.list;
export const selectCurrentBoard = (state) => state.board.current;
export const selectColumnList = (state) => state.board.columnList;
export const selectColumn = (state) => state.board.column;
export const selectCardList = (state) => state.board.cardList;
export const selectCard = (state) => state.board.card;
export const selectBoardStatus = (state) => state.board.status;
export const selectBoardError = (state) => state.board.error;
export const selectSearchTerm = (state) => state.board.searchTerm;
export const selectFilteredBoardList = createSelector(
  [selectBoardList, selectSearchTerm],
  (boardList, searchTerm) =>
    boardList.filter((board) =>
      board.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
);
