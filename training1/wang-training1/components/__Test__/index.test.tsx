import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages";

describe("Integration test: ", () => {
  test("Play game witout restarting or withdrawing moves", () => {
    // Arrangement
    const { queryByText, getByTestId, queryAllByText } = render(<Home />);
    const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((tileId) =>
      getByTestId(tileId)
    );
    // Action & Assertion
    fireEvent.click(tiles[0]);
    fireEvent.click(tiles[1]);
    fireEvent.click(tiles[2]);
    fireEvent.click(tiles[3]);
    fireEvent.click(tiles[4]);
    fireEvent.click(tiles[5]);
    fireEvent.click(tiles[6]);
    const victoryMessage = queryByText(/congratulations/i);
    expect(victoryMessage).not.toBeNull();
    const historyButtons = queryAllByText(/Back to No./i);
    expect(historyButtons.length).toBe(7);
  });

  test("Able to tie the game", () => {
    // Arrangement
    const { queryByText, getByTestId, queryAllByText } = render(<Home />);
    const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((tileId) =>
      getByTestId(tileId)
    );
    // Action & Assertion
    fireEvent.click(tiles[0]);
    fireEvent.click(tiles[1]);
    fireEvent.click(tiles[2]);
    fireEvent.click(tiles[4]);
    fireEvent.click(tiles[3]);
    fireEvent.click(tiles[5]);
    fireEvent.click(tiles[7]);
    fireEvent.click(tiles[6]);
    fireEvent.click(tiles[8]);
    const victoryMessage = queryByText(/congratulations/i);
    expect(victoryMessage).toBeNull();
    const historyButtons = queryAllByText(/Back to No./i);
    expect(historyButtons.length).toBe(9);
  });

  test("Able to reset the game", () => {
    // Arrangement
    const { queryByText, getByTestId, queryAllByText, getByText } = render(
      <Home />
    );
    const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((tileId) =>
      getByTestId(tileId)
    );
    // Action & Assertion
    fireEvent.click(tiles[0]);
    fireEvent.click(tiles[1]);
    fireEvent.click(tiles[2]);
    const restartButton = getByText(/restart/i);
    fireEvent.click(restartButton);
    const historyButtons = queryAllByText(/Back to No./i);
    expect(historyButtons.length).toBe(0);
  });
});
