import { Tile } from "../Tile/Tile";

export const GameBoard = ({}) => {
  return (
    <div>
      <div className="board-row">
        <Tile tileId={0} />
        <Tile tileId={1} />
        <Tile tileId={2} />
      </div>
      <div className="board-row">
        <Tile tileId={3} />
        <Tile tileId={4} />
        <Tile tileId={5} />
      </div>
      <div className="board-row">
        <Tile tileId={6} />
        <Tile tileId={7} />
        <Tile tileId={8} />
      </div>
    </div>
  );
};
