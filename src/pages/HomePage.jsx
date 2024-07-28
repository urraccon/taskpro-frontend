import Home from "../components/home/Home";
import BoardModal from "../components/board-modal/BoardModal";
import { useState } from "react";

const HomePage = () => {
  const [open, setOpen] = useState(true);

  return (
    <Home>
      <BoardModal open={open} handleClose={() => setOpen(false)} />
    </Home>
  );
};

export default HomePage;
