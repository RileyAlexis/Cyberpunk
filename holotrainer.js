const canvas = document.getElementById("playfield");
const ctx = canvas.getContext("2d");

let ballX = canvas.width/2;
let ballY = canvas.height-30;
let sx = 2;
let sy = -2;
const ballRadius = 10;
let rightPressed = false;
let leftPressed = false;


function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius,0,3.14);

    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(ballX-ballRadius, ballY);
    ctx.lineTo(ballX, ballY-ballRadius);
    
    ctx.strokeStyle = "green";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(ballX+ballRadius, ballY);
    ctx.lineTo(ballX, ballY-ballRadius);
    ctx.stroke();

    //ballX += sx;
    //ballY += sy;
}

function rotateBall() {
    if (rightPressed) 
    {
        ctx.rotate(90);
    } 
else if (leftPressed) {
        ctx.rotate(-90);
    }
}

function leftRight() {
if (rightPressed && ballX+ballRadius < canvas.width) 
{
    ballX += 4;
}
else if (leftPressed && ballX-ballRadius > 0) 
{ ballX -= 4;}
}


function draw() {
ctx.clearRect(0,0, canvas.width, canvas.height);
drawBall();
leftRight();

if (ballX + sx > canvas.width - ballRadius|| ballX + sx < ballRadius) {
    sx = -sx;
}
if (ballY + sy > canvas.height - ballRadius|| ballY + sy < ballRadius){
    sy = -sy;
}

}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key ==="Right" || e.key ==="ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key=== "ArrowLeft") {
        leftPressed = true; 
    }
    }

function keyUpHandler(e) {
    if (e.key ==="Right" || e.key ==="ArrowRight") {
        rightPressed = false;
    }
        else if (e.key ==="Left" || e.key === "ArrowLeft") {
            leftPressed = false;
        }
    }


setInterval(draw, 10);



