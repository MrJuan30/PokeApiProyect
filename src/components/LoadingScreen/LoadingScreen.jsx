import React from "react";
import "./LoadingScreen.css";
import GridLoader from "react-spinners/ClipLoader";

const LoadingScreen = () => {
  return (
    <div className="Loading__container">
      <div className="Loading">
        <GridLoader color="#d63636" size={250} />
      </div>
    </div>
  );
};

export default LoadingScreen;
