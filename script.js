var GAME_SPEED = 100;
var CANVAS_BACKGROUND_COLOUR = "white";
var snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150}
];
var score = 0;
var changingDirection = false;
var foodX;
var foodY;
var dx = 10;
var dy = 0;


var gameCanvas;
var ctx;

function main() {
    gameCanvas = document.getElementById("game");
    ctx = gameCanvas.getContext("2d");
    document.addEventListener("keydown", changeDirection);

    // If the game ended return early to stop game
    if (didGameEnd()) return;
    setTimeout(function eachFrame() {
        changingDirection = false;
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();
        main();
    }, GAME_SPEED)
}

function clearCanvas() {
    ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

function advanceSnake() {
    // Create the new Snake's head
    var head = {x: snake[0].x + dx, y: snake[0].y + dy};
    // Add the new head to the beginning of snake body
    snake.unshift(head);
    var didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        score += 1;
        document.getElementById('score').innerHTML = score;
        createFood();
    } else {
        // Remove the last part of snake body
        snake.pop();
    }
}

function didGameEnd() {
    for (var i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
    }
    var hitLeftWall = snake[0].x < 0;
    var hitRightWall = snake[0].x > gameCanvas.width - 10;
    var hitToptWall = snake[0].y < 0;
    var hitBottomWall = snake[0].y > gameCanvas.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

function randomTen(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function createFood() {
    foodX = randomTen(0, gameCanvas.width - 10);
    foodY = randomTen(0, gameCanvas.height - 10);
    // if the new food location is where the snake currently is, generate a new food location
    snake.forEach(function isFoodOnSnake(part) {
        if (part.x === foodX && part.y === foodY) createFood();
    });
}

function drawSnake() {
    snake.forEach(drawSnakePart)
}

function drawSnakePart(snakePart) {
    var gradient = ctx.createLinearGradient(0, 0, 400, 0);
    gradient.addColorStop(0, "magenta");
    gradient.addColorStop(0.5, "#89a0ed");
    gradient.addColorStop(1.0, "#ff3f8c");

    ctx.fillStyle = gradient;
    ctx.strokestyle = "black";

    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function changeDirection(event) {
    var LEFT_KEY = 37;
    var RIGHT_KEY = 39;
    var UP_KEY = 38;
    var DOWN_KEY = 40;

    if (changingDirection) return;
    changingDirection = true;
    var keyPressed = event.keyCode;
    var goingUp = dy === -10;
    var goingDown = dy === 10;
    var goingRight = dx === 10;
    var goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
}

//oops
