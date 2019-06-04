
// var food;
// var lastKey;
// var can;

let food;
let snake;
let scale = 20;
let w = 600;
let h = 600;

//features to implement: score?, can't go back on itself, end screen

function setup() {
    myGameArea.start();

    food = new component(20, 20, "red", foodLocateX(), foodLocateY());
    console.log(food);

    snake = new Snake();
    console.log(snake);
    console.log(snake.body[0].x);
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = w;
        this.canvas.height = h;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 100);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function component(width, height, color, x, y)  {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function foodLocateX(){
    var cols = Math.floor(w/scale);

    return Math.floor(Math.random()*cols) * scale;
}

function foodLocateY(){
    var rows = Math.floor(h/scale);

    return Math.floor(Math.random()*rows) * scale;
}

function updateGameArea() {
    myGameArea.clear();
    food.update();
    snake.body[0].x += 1;
    snake.body[0].update();
}

// function setup() {
//     // can = b.getContext("2d");
//     // can.fillStyle = "#d3d3d3";
//     // can.fillRect(120, 0, 600, 600);
//     // document.body.appendChild(b);
//     draw();
//     w = Math.floor(400 / ratio);
//     h = Math.floor(400 / ratio);
//     //frameRate(10);
//     snake = new Snake();
//     foodLocation();
// }

// function foodLocation() {
//     var x = Math.floor(Math.random(w));
//     var y = Math.floor(Math.random(h));
//     food = [x, y];
//
// }
//
// function keyPressed() {
//     switch(e.keyCode) {
//         //up arrow
//         case '38':
//             if(!lastKey === '40'){
//                 snake.setDir(0, -1);
//                 lastKey = '38';
//             }
//             break;
//         //down arrow
//         case '40':
//             if(!lastKey === '38'){
//                 snake.setDir(0, 1);
//                 lastKey = '40';
//             }
//             break;
//         //right arrow
//         case '39':
//             if(!lastKey === '37'){
//                 snake.setDir(1, 0);
//                 lastKey = '39';
//             }
//             break;
//         //left arrow
//         case '37':
//             if(!lastKey === '39'){
//                 snake.setDir(-1, 0);
//                 lastKey = '37';
//             }
//     }
// }
//
// function draw() {
//     //scale(ratio);
//
//     if (snake.eat(food)) {
//         foodLocation();
//     }
//
//     snake.update();
//     snake.show();
//
//     if (snake.endGame()) {
//         print("END GAME");
//         //background(255, 0, 0);
//         //noLoop();
//     }
//
//     //noStroke();
//     //fill(255, 0, 0);
//     var f = new component(food[0], food[1], 1, 1);
// }