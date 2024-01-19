export default class Board {
  constructor(size) {
    this.size = size || 4;
    this.boardElement = document.querySelector('.game-board');
    this.cells = [];
    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < this.size * this.size; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.cells.push(cell);
      this.boardElement.appendChild(cell);
    }
  }
}
