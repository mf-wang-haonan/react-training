import { useGame } from "../../features/GameProvider";

export const History = () => {
  const { goBackToMove, moves, reset } = useGame();

  return (
    <>
      {moves.length > 0 && <button onClick={reset}>Restart</button>}
      <ol>
        {moves.map((move) => (
          <li key={move.order}>
            <button onClick={() => goBackToMove(move.order)}>
              Back to No. {move.order + 1} move by user {move.user}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};
