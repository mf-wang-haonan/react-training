import { FC, useState } from "react";
import { useGame } from "../../features/GameProvider";

type TileProps = { tileId: number };

export const Tile: FC<TileProps> = ({ tileId }) => {
  const { makeMove, moves, winner } = useGame();
  const thisTile = moves.find((value) => value.tileId == tileId);

  return (
    <button
      className="square"
      onClick={() => {
        makeMove(tileId);
      }}
    >
      {thisTile?.user && thisTile?.user == winner && "🥳"}
      {thisTile?.user}
    </button>
  );
};
