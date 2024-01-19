import Board from './board';
import moveGoblin from './goblin';
import setCursor from './cursors';

export default class Game {
  constructor() {
    this.board = new Board();
    this.goblin = document.createElement('div');
    this.goblin.classList.add('goblin');
    this.score = 0;
    this.misses = 0;
    this.maxMisses = 5;
    this.setupClickListener();
    this.currentCell = null;
    this.gameOver = false;
  }

  start() {
    this.interval = setInterval(() => this.playGoblin(), 1000);
  }

  playGoblin() {
    if (this.gameOver) return;

    if (this.currentCell && this.currentCell.contains(this.goblin)) {
      this.currentCell.classList.remove('goblin');
    }

    const moved = moveGoblin(this.board.boardElement, this.goblin);

    if (moved) {
      this.currentCell = this.goblin.parentElement;
      this.currentTimeout = setTimeout(() => {
        if (this.currentCell && this.currentCell.contains(this.goblin)) {
          this.currentCell.classList.remove('goblin');
          this.misses += 1;
        }
        if (this.misses >= this.maxMisses) {
          clearInterval(this.interval);
          if (!this.gameOver) {
            // eslint-disable-next-line no-alert
            alert(`Гоблин победил! Ваш счет: ${this.score}`);
            this.gameOver = true;
          }
        }
      }, 1000);
    }
  }

  setupClickListener() {
    this.board.boardElement.addEventListener('click', (event) => {
      setCursor(this.board.boardElement, 'click');
      setTimeout(() => setCursor(this.board.boardElement, 'play'), 500);

      if (event.target.contains(this.goblin)) {
        this.score += 1;
        if (this.currentCell) {
          this.currentCell.classList.remove('goblin');
        }
        clearTimeout(this.currentTimeout);
      }
    });
  }
}
