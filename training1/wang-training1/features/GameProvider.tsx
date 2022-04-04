import { createContext, useEffect, useState, FC, useContext } from "react";
import type { GameContext, Move, User } from "../types/GameTypes";
import { checkVictory } from "../utils/victory";

const GameContext = createContext<GameContext | undefined>(undefined);

/**
 * GameProvider inject `useGame()` hooks as well as its context into the dom tree.
 */
export const GameProvider: FC = ({ children }) => {
  // These two useState hooks below represent the single truth of our game state.
  const [moves, _setMoves] = useState<Move[]>([]);
  const [currentUser, _setCurrentUser] = useState<User>("X");

  // Derived states
  const [winner, _setWinner] = useState<User | undefined>(undefined);

  useEffect(() => {
    // Toggle user here an only here based on the length of moves.
    _setCurrentUser(moves.length % 2 == 0 ? "X" : "O");

    // Check win
    const tilesSelectedByUserX = moves
      .filter((move) => move.user == "X")
      .map((move) => move.tileId);
    const tilesSelectedByUserO = moves
      .filter((move) => move.user == "O")
      .map((move) => move.tileId);
    _setWinner(undefined);
    if (checkVictory(tilesSelectedByUserX)) _setWinner("X");
    if (checkVictory(tilesSelectedByUserO)) _setWinner("O");
  }, [moves]);

  const makeMove = (tileId: number) => {
    // If tileId already exists, shall ignore this move
    if (moves.filter((move) => move.tileId == tileId).length > 0) return;

    // If winner exists, shall ignore this move
    if (winner) return;

    // Otherwise, toggle user and make a move
    _setMoves((currentMoves) => [
      ...currentMoves,
      { tileId, user: currentUser, order: currentMoves.length },
    ]);
  };

  const goBackToMove = (destination: number) => {
    _setMoves((currentMoves) =>
      [...currentMoves].filter((move) => move.order <= destination)
    );
  };

  const reset = () => _setMoves([]);

  return (
    <GameContext.Provider
      value={{ currentUser, makeMove, moves, goBackToMove, reset, winner }}
    >
      {children}
    </GameContext.Provider>
  );
};

/**
 * `useGame()` hook exposes the game state and provides functions to interact with it.
 */
export const useGame = () => {
  const gameContext = useContext(GameContext);
  if (gameContext === undefined) {
    throw new Error("No context found");
  }
  return gameContext;
};
