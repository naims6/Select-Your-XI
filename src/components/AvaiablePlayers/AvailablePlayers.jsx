import React, { use } from "react";

import PlayerCard from "./PlayerCard";
const AvailablePlayers = ({
  fetcher,
  handlePurchasePlayer,
  selectedPlayers,
}) => {
  const playerData = use(fetcher);
  const players = playerData.players;
  return (
    <div className="container2 grid grid-cols-1 md:grid-cols- lg:grid-cols-3 gap-4 py-5">
      {players.map((player, index) => (
        <PlayerCard
          key={index}
          player={player}
          handlePurchasePlayer={handlePurchasePlayer}
          selectedPlayers={selectedPlayers}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
