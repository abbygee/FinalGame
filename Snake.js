class Snake {
    constructor() {
        this.body = [];
        this.body[0] = new component(20, 20, "blue", 300, 300);
        this.xdir = 0;
        this.ydir = 0;
        //this.len = 0;
        //this.speed = 1
    }

    // setDir(x, y) {
    //     this.xdir = x;
    //     this.ydir = y;
    // }
    //
    // update() {
    //     var head = this.body[this.body.length-1].copy();
    //     this.body.shift();
    //     head[0] += this.xdir;
    //     head[1] += this.ydir;
    //     this.body.push(head);
    // }
    //
    // grow() {
    //     var head = this.body[this.body.length-1].copy();
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
    // eat(pos) {
    //     var x = this.body[this.body.length-1][0];
    //     var y = this.body[this.body.length-1][1];
    //     if(x === pos[0] && y === pos[1]) {
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