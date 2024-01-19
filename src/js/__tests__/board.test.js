import Board from '../board';

describe('Board', () => {
  let board;
  const size = 4;

  beforeEach(() => {
    document.body.innerHTML = '<div class="game-board"></div>';
    board = new Board(size);
  });

  test('creates a board with correct number of cells', () => {
    expect(board.cells.length).toBe(size * size);
    expect(document.querySelector('.game-board').children.length).toBe(size * size);
  });
});
