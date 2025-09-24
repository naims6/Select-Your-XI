import UserLogo from "../../assets/user1.png";
import Flag from "../../assets/Group.png";
import Player from "../../assets/player.png";

const PlayerCard = ({ player, handlePurchasePlayer, selectedPlayers }) => {
  const isSelected = selectedPlayers.find(
    (item) => item.playerName == player.playerName
  );
  return (
    <div>
      <div className="card bg-base-100 p-4 shadow-md font-sora">
        <figure>
          <img
            className="object-fit w-full"
            src={player.image}
            alt="player photo"
          />
        </figure>
        <div className="mt-3">
          <div className="flex gap-2 mt-3">
            <img className="rounded-lg" src={UserLogo} alt="" />
            <h1>{player.playerName}</h1>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-300 mt-2">
            <p className="flex gap-1.5">
              <img
                className="ml-1 w-10 h-auto"
                src={player.countryFlag}
                alt=""
              />{" "}
              <span>{player.country}</span>
            </p>
            <button className="btn">{player.playRole}</button>
          </div>
          <h1 className="mt-3 font-bold">Rating: {player.rating}</h1>
          <div className="flex items-center justify-between mt-3">
            <h1 className="font-bold">{player.specialty}</h1>
            <p></p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <h1>Price: {player.price}</h1>
            <button
              onClick={() => handlePurchasePlayer(player)}
              className="btn"
            >
              {isSelected ? "Stock Out" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
