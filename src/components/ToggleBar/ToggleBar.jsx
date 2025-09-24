import React from "react";

const ToggleBar = ({ handleToggle, isSelectedPlayer, selectedPlayers }) => {
  return (
    <div className="container2 flex justify-between items-center pt-5">
      <h1 className="text-xl md:text-2xl font-sora font-bold">
        {isSelectedPlayer
          ? "Available Players"
          : `Selected Player (${selectedPlayers.length}/6)`}
      </h1>
      <div className=" flex">
        <button
          onClick={() => handleToggle(true)}
          className={`btn transition-all ${
            isSelectedPlayer ? "btn-primary" : ""
          }`}
        >
          Availabe
        </button>
        <button
          onClick={() => handleToggle(false)}
          className={`btn transition-all ${
            isSelectedPlayer ? "" : "btn-primary"
          }`}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>
    </div>
  );
};

export default ToggleBar;
