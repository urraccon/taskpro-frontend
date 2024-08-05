import { useEffect, useState } from "react";
import { selectCurrentBoard } from "../../../redux/board/selectors";
import BoardItem from "./BoardItem";
import { ListBoardStyle } from "./ListBoards.styled";
import { useSelector } from "react-redux";

const ListBoards = ({ boards }) => {
  const [board, setBoard] = useState({});
  const currentBoard = useSelector(selectCurrentBoard);

  useEffect(() => {
    if (currentBoard) {
      setBoard(currentBoard);
    } else {
      const firstBoard = boards[0];
      setBoard(firstBoard);
    }
  }, [currentBoard]);

  return (
    <ListBoardStyle>
      <ul>
        {boards.map(({ title, icon, _id }) => (
          <li key={_id}>
            <BoardItem
              title={title}
              icon={icon}
              isActive={_id === board?._id}
              id={_id}
            />
          </li>
        ))}
      </ul>
    </ListBoardStyle>
  );
};

export default ListBoards;
