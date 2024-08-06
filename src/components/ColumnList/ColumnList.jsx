import css from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import AddColumnButton from "../AddColumnButton/AddColumnButton";
import OpenFiltersButton from "../OpenFiltersBtn/OpenFiltersBtn";
import FilterModal from "../FilterModal/FilterModal";
import { FilteredColumns } from "../FiltredColumns";
import BoardLoader from "../BoardLoader/BoardLoader";
import {
  selectBoardStatus,
  selectCurrentBoard,
  selectSearchTerm,
} from "../../redux/board/selectors";
import ColumnModal from "../modals/column-modal/ColumnModal";
import { fetchBoard } from "../../redux/board/operations/boardOperations";
import { useParams } from "react-router-dom";

const ColumnList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filter = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  const { title, columnList, background } = useSelector(selectCurrentBoard);
  const backgroundList = [
    "flowers",
    "stars",
    "tree",
    "half-moon",
    "leaves",
    "cloud",
    "coast",
    "figure",
    "full-moon",
    "boat",
    "hot-air-ballon",
    "canyon",
    "ocean",
    "hot-air-ballons",
    "northern-lights",
  ];
  const bgNumber = backgroundList.indexOf(background) + 1;
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const toggleAddColumn = () => {
    setIsAddColumnOpen(!isAddColumnOpen);
  };
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const status = useSelector(selectBoardStatus);
  const params = useParams();
  const { boardId } = params;
  const [bgURL, setBgURL] = useState(null);

  useEffect(() => {
    if (boardId) {
      dispatch(fetchBoard(boardId));
    }
  }, [dispatch, boardId]);

  const isRetina = () => {
    if (window.devicePixelRatio > 1) {
      return "@2x";
    } else {
      return "";
    }
  };
  const setDevice = () => {
    if (window.innerWidth <= 375) {
      return "moblie";
    }
    if (window.innerWidth <= 768) {
      return "tablet";
    }
    return "desktop";
  };
  const device = setDevice();
  const ratio = isRetina();

  async function loadBackground() {
    try {
      const background = await import(
        `../../assets/backgrounds/allBg/${device}_background_${
          bgNumber + ratio
        }.jpg`
      );
      setBgURL(background.default);
    } catch (error) {
      console.error("Failed to load background:", error);
    }
  }

  useEffect(() => {
    if (bgNumber && bgNumber !== "0") {
      loadBackground();
    }
  }, [bgNumber, device, ratio]);

  return (
    <>
      {status === "loading" && <BoardLoader />}
      <div
        className={css.task_list_container}
        style={{ backgroundImage: `url(${bgURL})` }}
      >
        <div className={css.headerWrapper}>
          <h4 className={css.board_title}>{title}</h4>
          <OpenFiltersButton click={toggleFilter} />
        </div>
        {columnList && columnList.length > 0 ? (
          <>
            <ul className={css.column_list}>
              <FilteredColumns columns={columnList} filter={filter} />
              <li className={css.addColumnBtn}>
                <AddColumnButton click={toggleAddColumn} />
              </li>
            </ul>
          </>
        ) : (
          <AddColumnButton click={toggleAddColumn} />
        )}
        {isAddColumnOpen && (
          <ColumnModal boardId={boardId} close={toggleAddColumn} />
        )}
        {isFilterOpen && (
          <Modal onClose={toggleFilter}>
            <FilterModal onClose={toggleFilter} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default ColumnList;
