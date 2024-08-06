import { Backdrop } from "@mui/material";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const BoardLoader = () => {
  return (
    <Backdrop open={true}>
      <div
        style={{
          position: "absolute",
          top: "calc(50% - 20px)",
          right: "calc(50% - 20px)",
          zIndex: 999,
        }}
      >
        <ThreeCircles
          visible={true}
          height="40"
          width="40"
          color="var(--accent)"
          ariaLabel="three-circles-loading"
          wrapperClass=""
        />
      </div>
    </Backdrop>
  );
};

export default BoardLoader;
