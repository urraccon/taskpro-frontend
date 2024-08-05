import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';

import { selectedBoard } from '../../../redux/boards/selectors';
import sprite from '../../../assets/svgSprite/iconsSprite.svg';
import { replaceCard } from '../../../redux/boards/operationsCards';
import { TooltipButton, TooltipIcon, TooltipText } from './TooltipComp.styled';

const TooltipComp = ({ cardId }) => {
  const dispatch = useDispatch();

  /* -------------------- SELECT COLUMNS DATA --------------------*/

  const { columns } = useSelector(selectedBoard);

  /* -------------------- FILTER COLUMNS --------------------*/

  const filteredColumns = columns.filter(
    column => column.cards && column.cards.every(card => card._id !== cardId)
  );

  /* -------------------- FUNCTIONS --------------------*/

  const moveCard = (cardId, newColumnId) =>
    dispatch(replaceCard([cardId, { newColumnId }]));

  return (
    <Tooltip
      anchorSelect={`[name^='${cardId}']`}
      place="bottom"
      clickable="true"
      opacity={1}
      border="0.6px solid var(--calendar_help)"
      style={{
        backgroundColor: 'var(--background_task_item)',
        borderRadius: 8,
        padding: 18,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      {filteredColumns.length > 0 ? (
        filteredColumns.map(column => (
          <TooltipButton
            key={column._id}
            onClick={() => moveCard(cardId, column._id)}
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
            color: 'var(--light_text)',
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
