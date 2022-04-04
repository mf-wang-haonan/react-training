const victoryConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkVictory = (tileIds: number[]) => {
  const tileIdsSet = new Set(tileIds);
  for (let i = 0; i < victoryConditions.length; i++) {
    const [a, b, c] = victoryConditions[i];
    if (tileIdsSet.has(a) && tileIdsSet.has(b) && tileIdsSet.has(c)) {
      return true;
    }
  }
  return false;
};
