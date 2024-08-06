import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import sprite from "../../../assets/svgSprite/iconsSprite.svg";
import { TooltipButton, TooltipIcon, TooltipText } from "./TooltipComp.styled";
import { selectCurrentBoard } from "../../../redux/board/selectors";
import { moveCard } from "../../../redux/board/operations/cardOperations";

const TooltipComp = ({ cardId }) => {
  const dispatch = useDispatch();

  /* -------------------- SELECT COLUMNS DATA --------------------*/

  const { columnList } = useSelector(selectCurrentBoard);

  /* -------------------- FILTER COLUMNS --------------------*/

  const filteredColumns = columnList.filter(
    (column) =>
      column.cardList && column.cardList.every((card) => card._id !== cardId)
  );

  /* -------------------- FUNCTIONS --------------------*/

  const switchColumn = (id, columnId) => dispatch(moveCard({ id, columnId }));

  return (
    <Tooltip
      anchorSelect={`[name^='${cardId}']`}
      place="bottom"
      clickable="true"
      opacity={1}
      border="0.6px solid var(--calendar_help)"
      style={{
        backgroundColor: "var(--background_task_item)",
        borderRadius: 8,
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {filteredColumns.length > 0 ? (
        filteredColumns.map((column) => (
          <TooltipButton
            key={column._id}
            onClick={() => switchColumn(cardId, column._id)}
          >
            <TooltipText>{column.title}</TooltipText>
            <TooltipIcon width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrov_circle`} />
            </TooltipIcon>
          </TooltipButton>
        ))
      ) : (
        <p
          style={{
            color: "var(--light_text)",
            fontSize: 14,
            letterSpacing: 0.6,
          }}
        >
          No columns more
        </p>
      )}
    </Tooltip>
  );
};

export default TooltipComp;
