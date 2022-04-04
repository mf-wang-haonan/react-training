import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GameProvider } from "../../features/GameProvider";
import { GameBoard } from "../GameBoard/GameBoard";
import { History } from "./History";

describe("History test: ", () => {
  test("Initialized as empty list & without restart button", () => {
    // Arrangement
    const { queryByText } = render(
      <GameProvider>
        <History />
      </GameProvider>
    );
    const restartButton = queryByText(/restart/i);
    const movesHistory = queryByText(/Back to No/i);

    // Assertion
    expect(restartButton).toBeNull();
    expect(movesHistory).toBeNull();
  });
});
