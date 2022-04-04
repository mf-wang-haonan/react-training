import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tile } from "./Tile";
import { GameProvider } from "../../features/GameProvider";
import { GameBoard } from "../GameBoard/GameBoard";

describe("Tile test: ", () => {
  test("Tile initialized with blank text, and able to make a move", () => {
    // Arrangement
    const tileId = 1;
    const { getByTestId } = render(
      <GameProvider>
        <Tile tileId={tileId} />
      </GameProvider>
    );
    const tile = getByTestId(tileId);

    // Assertion
    expect(tile.textContent).toBe("");

    // Action & Assertion
    fireEvent.click(tile);
    expect(tile.textContent).toBe("X");
  });

  test("Click the same tile multiple times will not change the results", () => {
    // Arrangement
    const tileId = 1;
    const { getByTestId } = render(
      <GameProvider>
        <Tile tileId={tileId} />
      </GameProvider>
    );
    const tile = getByTestId(tileId);

    // Action
    fireEvent.click(tile);
    fireEvent.click(tile);

    // Assertion
    expect(tile.textContent).toBe("X");
  });
});
