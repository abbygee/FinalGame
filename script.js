// var food;
// var can;

let food;
let snake;
let scale = 20;
let w = 600;
let h = 600;
let lastKey;
let xDir = 0;
let yDir = 0;

//features to implement: score?, can't go back on itself, end screen

function setup() {
    myGameArea.start();

    food = new Component(20, 20, "red", foodLocateX(), foodLocateY());
    snake = new Snake();

}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = w;
        this.canvas.height = h;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 10);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function Component(width, height, color, x, y)  {
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

function keyPressed(){
    document.addEventListener("keydown", function(event){
        switch(event.which) {
            //up arrow
            case 38:
                yDir = -1;
                xDir = 0;
                lastKey = 38;
                break;
            //down arrow
            case 40:
                yDir = 1;
                xDir = 0;
                lastKey = 40;
                break;
            //right arrow
            case 39:
                xDir = 1;
                yDir = 0;
                lastKey = 39;
                break;
            //left arrow
            case 37:
                xDir = -1;
                yDir = 0;
                lastKey = 37;
        }
    });
}

function updateGameArea() {
    myGameArea.clear();
    food.update();

    keyPressed();
    for(var i = 0; i < snake.body.length; i++){
        snake.body[i].x += xDir;
        snake.body[i].y += yDir;
        snake.body[i].update();

    }

    // if(snake.body[this.body.length - 1].eat(food.x, food.y)){
    //
    // }
    // for(var i = 0; i < snake.body.length; i++){
    //     snake.body[i].update();
    // }
}

// function foodLocation() {
//     var x = Math.floor(Math.random(w));
//     var y = Math.floor(Math.random(h));
//     food = [x, y];
//
// }
//
//
// function draw() {
//     //scale(ratio);
//
//     if (snake.eat(food)) {
//         foodLocation();
//     }
//
//     snake.change();
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