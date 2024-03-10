import React from "react";
import { Html, useProgress } from "@react-three/drei";

const loaderStyles = {
  canvasLoader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 999,
  },
  loaderIcon: {
    /* Add your loader icon styles here */
  },
  loaderText: {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: 800,
    marginTop: 10,
  },
};

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={loaderStyles.canvasLoader}>
        <div style={loaderStyles.loaderIcon}></div>
      </div>
      <p style={loaderStyles.loaderText}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
