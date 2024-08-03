import { selectFilteredBoardList } from "../../../redux/board/selectors";
import BoardItem from "./BoardItem";
import { ListBoardStyle } from "./ListBoards.styled";
import { useSelector } from "react-redux";

const ListBoards = ({ boards }) => {
  const currentBoard = useSelector(selectFilteredBoardList);

  return (
    <ListBoardStyle>
      <ul>
        {boards.map(({ title, icon, _id }) => (
          <li key={_id}>
            <BoardItem
              title={title}
              icon={icon}
              isActive={_id === currentBoard._id}
              id={_id}
            />
          </li>
        ))}
      </ul>
    </ListBoardStyle>
  );
};

export default ListBoards;
