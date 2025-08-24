import { createContext } from "react";
import { useState } from "react";

export const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [player1, setPlayer1] = useState(localStorage.getItem("Player1") || "");
  const [player2, setPlayer2] = useState(localStorage.getItem("Player2") || "");
  const [player3, setPlayer3] = useState(localStorage.getItem("Player3") || "");

  const updatePlayer1 = (name) => {
    setPlayer1(name);
    localStorage.setItem("Player1", name);
  };

  const updatePlayer2 = (name) => {
    setPlayer2(name);
    localStorage.setItem("Player2", name);
  };

  const updatePlayer3 = (name) => {
    setPlayer3(name);
    localStorage.setItem("Player3", name);
  };

  return (
    <PlayerContext.Provider
      value={{
        player1,
        player2,
        player3,
        updatePlayer1,
        updatePlayer2,
        updatePlayer3,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}