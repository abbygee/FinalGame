let s;

function start(){
    const can = document.getElementById("board");
    const c = can.getContext("2d");
    c.beginPath();
    c.fillStyle = "lavender";
    c.fillRect(0,0,can.width,can.height);

    s = new Snake();
}

function key(e){
    e = e || window.event;

    switch(e.keyCode) {
        case '38'
    }
}