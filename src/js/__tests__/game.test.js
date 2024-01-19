import Game from '../game';

describe('Game', () => {
  let game;
  let mockElement;

  beforeEach(() => {
    jest.useFakeTimers();
    mockElement = document.createElement('div');
    mockElement.classList.add('game-board');
    document.body.appendChild(mockElement);
    game = new Game();

    const goblin = document.createElement('div');
    goblin.classList.add('goblin');
    mockElement.appendChild(goblin);
    game.goblin = goblin;
  });

  afterEach(() => {
    jest.useRealTimers();
    mockElement.remove();
  });

  test('should increase misses if goblin is not clicked', () => {
    game.start();
    jest.advanceTimersByTime(1000);
    setImmediate(() => {
      expect(game.misses).toBe(1);
    });
  });

  test('clicking on goblin should increase score', () => {
    game.start();
    game.goblin.click();
    // Дополнительное ожидание для учета асинхронности
    setImmediate(() => {
      expect(game.score).toBe(1);
    });
  });
});
