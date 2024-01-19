export default function moveGoblin(board, goblin) {
  const emptyCells = Array.from(board.children).filter(
    (cell) => !cell.hasChildNodes(),
  );

  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  randomCell.appendChild(goblin);
  return true;
}
