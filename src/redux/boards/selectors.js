
export const selectAllBoards = (state) => state.boards.boards;

export const selectIsBoardsLoading = (state) => state.boards.isLoading;

export const selectedBoard = (state) => state.boards.selectedBoard;

export const boardError = (state) => state.boards.error;

export const selectFilter = (state) => state.filter;
