import type { NextPage } from "next";
import { CurrentPlayer } from "../components/CurrentPlayer/CurrentPlayer";
import { GameBoard } from "../components/GameBoard/GameBoard";
import { History } from "../components/History/History";
import { GameProvider } from "../features/GameProvider";

const Home: NextPage = () => {
  return (
    <GameProvider>
      <div className="game">
        <div className="game-board">
          <GameBoard />
        </div>
        <div className="game-info">
          <CurrentPlayer />
          <History />
        </div>
      </div>
    </GameProvider>
  );
};

export default Home;
