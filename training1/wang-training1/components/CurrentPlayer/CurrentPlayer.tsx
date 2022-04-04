import { useGame } from "../../features/GameProvider";

export const CurrentPlayer = ({}) => {
  const { currentUser, winner } = useGame();

  return (
    <>
      <h2>👻 Player {currentUser}! Make a move!</h2>
      {winner && <h3>🥳 Congratulations! Player {winner}</h3>}
    </>
  );
};
