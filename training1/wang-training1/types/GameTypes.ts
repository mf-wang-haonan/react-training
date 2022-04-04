export type User = "X" | "O";

export type Move = {
  user: User;
  tileId: number;
  order: number;
};

export type GameContext = {
  currentUser: User;
  moves: Move[];
  winner: User | undefined;
  makeMove: (tileId: number) => void;
  goBackToMove: (destination: number) => void;
  reset: () => void;
};
