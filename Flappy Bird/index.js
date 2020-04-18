var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var animframe = window.requestAnimationFrame

var background = new Image();
background.src = "assets/background-night.png";

var pipeTop = new Image();
pipeTop.src = "assets/pipeTop.png";

var pipeBottom = new Image();
pipeBottom.src = "assets/pipeBottom.png";

var bg = new Image();
bg.src = "assets/base.png";

var bird = new Image();
bird.src = "assets/bird.png"

//Bird x and y position 
var bx = 10;
var by = canvas.height / 2


var gap = 80;
var gravity = 1;

document.addEventListener("keydown", function () {
    by -= 25
})


//creating the pipes array
var pipes = [];
pipes.push({
    x: canvas.width,
    y: 0
})



function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0);
    for (let pipe of pipes) {
        ctx.drawImage(pipeTop, pipe.x, pipe.y);
        ctx.drawImage(pipeBottom, pipe.x, pipe.y + pipeTop.height + gap);
        pipe.x--;
        if (pipe.x == 60) {
            pipes.push({
                x: canvas.width,
                y: (Math.random() * pipeTop.height) - pipeTop.height
            })
        }
        //detecting the collision
        if ( ((bx + bird.width >= pipe.x && bx + bird.width <= pipe.x + pipeTop.width) &&
            (by <= pipe.y + pipeTop.height || by + bird.height > pipe.y + pipeTop.height + gap))
            || by + bird.height >= canvas.height - bg.height) {
           console.log("collison")
        }



    }
    ctx.drawImage(bg, 0, canvas.height - bg.height);
    ctx.drawImage(bird, bx, by);
    //updating the birds why position based on  Gravity
    if ((by + bird.height) < (canvas.height - bg.height)) {
        by += gravity
    }
    requestAnimationFrame(draw);
}
draw()