const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const restartBtn = document.getElementById('restartBtn');
const scoreDisplay = document.getElementById('score');

canvas.width = 400;
canvas.height = 400;

let snake = [{ x: 200, y: 200 }];
let direction = { x: 0, y: -20 };
let food = { x: 120, y: 120 };
let score = 0;

function drawSnake() {
  ctx.fillStyle = 'lime';
  snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));
}

function drawFood() {
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, 20, 20);
}

function moveSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreDisplay.textContent = score;
    placeFood();
  } else {
    snake.pop();
  }
}

function placeFood() {
  food.x = Math.floor((Math.random() * canvas.width) / 20) * 20;
  food.y = Math.floor((Math.random() * canvas.height) / 20) * 20;
}

function isGameOver() {
  const head = snake[0];
  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
    return true;
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      return true;
    }
  }

  return false;
}

function gameLoop() {
  if (isGameOver()) {
    alert('Game Over! Your score: ' + score);
    resetGame();
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFood();
  moveSnake();
  drawSnake();

  setTimeout(gameLoop, 250);
}

function resetGame() {
  snake = [{ x: 200, y: 200 }];
  direction = { x: 0, y: -20 };
  food = { x: 120, y: 120 };
  score = 0;
  scoreDisplay.textContent = score;
  gameLoop();
}

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      if (direction.y === 0) direction = { x: 0, y: -20 };
      break;
    case 'ArrowDown':
      if (direction.y === 0) direction = { x: 0, y: 20 };
      break;
    case 'ArrowLeft':
      if (direction.x === 0) direction = { x: -20, y: 0 };
      break;
    case 'ArrowRight':
      if (direction.x === 0) direction = { x: 20, y: 0 };
      break;
  }
});
restartBtn.addEventListener('click', resetGame);

gameLoop();

// Event listeners untuk kontrol sentuh
document.getElementById('up').addEventListener('click', () => {
  if (direction.y === 0) direction = { x: 0, y: -20 };
});

document.getElementById('down').addEventListener('click', () => {
  if (direction.y === 0) direction = { x: 0, y: 20 };
});

document.getElementById('left').addEventListener('click', () => {
  if (direction.x === 0) direction = { x: -20, y: 0 };
});

document.getElementById('right').addEventListener('click', () => {
  if (direction.x === 0) direction = { x: 20, y: 0 };
});

