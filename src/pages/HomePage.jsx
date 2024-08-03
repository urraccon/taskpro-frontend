import Home from "../components/home/Home";
import BoardModal from "../components/modals/board-modal/BoardModal";
import { useState } from "react";

const HomePage = () => {
  const id = "66ace37489bf558d9346ca08";
  const [open, setOpen] = useState(true);

  return (
    <Home>{open && <BoardModal id={id} close={() => setOpen(false)} />}</Home>
  );
};

export default HomePage;
