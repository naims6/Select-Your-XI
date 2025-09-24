import React from "react";
import Player from "../../assets/player.png";
const SelectedPlayers = ({
  handleToggle,
  selectedPlayers,
  handleDeletedPlayer,
}) => {
  return (
    <div className="container2 flex flex-col gap-4 py-7">
      {selectedPlayers.map((player, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-md flex items-center justify-between p-2.5"
        >
          <div className="flex gap-3">
            <img className="w-12 rounded-xl" src={player.image} alt="" />
            <figure>
              <h1 className="text-xl">{player.playerName}</h1>
              <span className="">{player.playRole}</span>
            </figure>
          </div>
          <div>
            <span
              onClick={() => handleDeletedPlayer(player)}
              className="text-xl cursor-pointer"
            >
              X
            </span>
          </div>
        </div>
      ))}

      <button
        onClick={() => handleToggle(true)}
        className="btn btn-secondary w-[170px]"
      >
        Add More Players
      </button>
    </div>
  );
};

export default SelectedPlayers;
