import AvailablePlayers from "./components/AvaiablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ToggleBar from "./components/ToggleBar/ToggleBar";
import "./index.css";
import { Suspense, useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";

import { Toaster } from "sonner";
import { toast } from "sonner";

const fetcher = fetch("../public/player.json").then((res) => res.json());

function App() {
  const [isSelectedPlayer, setIsSelectedPlayer] = useState(true);
  const [totalMoney, setTotalMoney] = useState(60);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleToggle = (show) => {
    setIsSelectedPlayer(show);
  };

  const handlePurchasePlayer = (player) => {
    let price = player.price.split("M").join("");

    if (selectedPlayers.length === 6) {
      toast("maximum player reached");
      return;
    }

    const fined = selectedPlayers.findIndex(
      (found) => player.playerName === found.playerName
    );
    if (fined < 0) {
      // if not found in selectedPlayers
      const tempSelectedPlayer = [...selectedPlayers, player];
      setSelectedPlayers(tempSelectedPlayer);
      localStorage.setItem("Player", JSON.stringify(tempSelectedPlayer));

      if (Number(totalMoney) >= Number(price)) {
        const tempTotalMoney = (Number(totalMoney) - Number(price)).toFixed(2);
        setTotalMoney(tempTotalMoney);
        localStorage.setItem("TotalMoney", tempTotalMoney);
      } else {
        toast.error("YOu have no sufficiant balance");
      }
    } else {
      // if player already have in selected player
      toast("You Can't buy one player 2 time");
    }
  };

  const handleDeletedPlayer = (player) => {
    let price = player.price.split("M").join("");

    const filteredPlayer = selectedPlayers.filter(
      (matched) => player.playerName !== matched.playerName
    );
    const tempTotalMoney = (Number(totalMoney) + Number(price)).toFixed(2);
    setTotalMoney(tempTotalMoney);
    localStorage.setItem("TotalMoney", tempTotalMoney);

    setSelectedPlayers(filteredPlayer);
    localStorage.setItem("Player", JSON.stringify(filteredPlayer));
  };

  useEffect(() => {
    const storedPlayer = JSON.parse(localStorage.getItem("Player")) || [];
    const storedMoney = localStorage.getItem("TotalMoney") || 60;
    setSelectedPlayers(storedPlayer);
    setTotalMoney(storedMoney);
  }, []);

  return (
    <>
      <Navbar totalMoney={totalMoney} />
      <HeroSection />

      <ToggleBar
        handleToggle={handleToggle}
        isSelectedPlayer={isSelectedPlayer}
        selectedPlayers={selectedPlayers}
      />

      <Suspense fallback={<Loading />}>
        {isSelectedPlayer ? (
          <AvailablePlayers
            fetcher={fetcher}
            handlePurchasePlayer={handlePurchasePlayer}
            selectedPlayers={selectedPlayers}
          />
        ) : (
          <SelectedPlayers
            handleToggle={handleToggle}
            selectedPlayers={selectedPlayers}
            handleDeletedPlayer={handleDeletedPlayer}
          />
        )}
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
