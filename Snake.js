class Snake {
    constructor() {
        this.body = [];
        this.body[0] = new Component(20, 20, "blue", 300, 300);
        this.body[1] = new Component(20, 20, "blue", 300, 287);
        this.len = 0;
    }

    // setDir(x, y) {
    //     this.xdir = x;
    //     this.ydir = y;
    // }
    //
    // change() {
    //     let head = JSON.parse(JSON.stringify(this.body[this.body.length-1]));
    //     // this.body.shift();
    //     head.x += this.xdir;
    //     head.y += this.ydir;
    //     console.log(head);
    //     // this.body.push(head);
    // }
    //
    // grow() {
    //     let head = JSON.parse(JSON.stringify(this.body[this.body.length-1]));
    //     this.len++;
    //     this.body.push(head);
    // }
    //
    // endGame() {
    //     var x = this.body[this.body.length-1][0];
    //     var y = this.body[this.body.length-1][1];
    //     if(x > w-1 || x < 0 || y > h-1 || y < 0) {
    //         return true;
    //     }
    //     for(var i = 0; i < this.body.length-1; i++) {
    //         var part = this.body[i];
    //         if(part[0] === x && part[1] === y) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    //
    // eat(posX, posY) {
    //     var x = this.body[this.body.length-1][x];
    //     var y = this.body[this.body.length-1][y];
    //     if(x === posX && y === posY) {
    //         this.grow();
    //         return true;
    //     }
    //     return false;
    // }
    //
    // show() {
    //     for(var i = 0; i < this.body.length; i++) {
    //         fill(0);
    //         noStroke();
    //         rect(this.body[i][0], this.body[i][1], 1, 1)
    //     }
    // }
}