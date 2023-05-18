////////part1
// const canvas = document.getElementById('canvas');
// const context = canvas.getContext("2d");
//
// const image = new Image();
// image.src = 'images/body/body2.png';
//
// image.onload = function() {
//     context.drawImage(image, 0, 0);
// };
//
// let x = 0;
// let y = 0;
// let vx = 0;
// let vy = 0;
//
// document.addEventListener("keydown", handleKeyDown);
// document.addEventListener("keyup", handleKeyUp);
//
// function handleKeyDown(event) {
//     switch (event.key) {
//         case "ArrowUp":
//             vy = -1;
//             break;
//         case "ArrowDown":
//             vy = 1;
//             break;
//         case "ArrowLeft":
//             vx = -1;
//             break;
//         case "ArrowRight":
//             vx = 1;
//             break;
//     }
// }
//
// function handleKeyUp(event) {
//     switch (event.key) {
//         case "ArrowUp":
//         case "ArrowDown":
//             vy = 0;
//             break;
//         case "ArrowLeft":
//         case "ArrowRight":
//             vx = 0;
//             break;
//     }
// }
//
// function update() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     x += vx;
//     y += vy;
//     context.font = "40px FontAwesome";
//
//     // context.fillText("\uf135", x, y); // "rocket" icon code is '\uf135'
//     requestAnimationFrame(update);
// }
//
// update();

////////part2
////////////////////////////////
// let myGamePiece;
// let canvas = document.getElementById('canvas')
//
// function startGame() {
//     // myGamePiece = new _component(30, 30, "red", 225, 225);
//     myGamePiece = new _component(100, 100, "images/body/body2.png", 225, 225);
//     myGameArea.start();
// }
//
// let myGameArea = {
//     canvas : canvas,
//     start : function() {
//         let lab = document.getElementById('lab');
//         console.log($(lab).position().top, this.canvas)
//         this.canvas.width = $(lab).width();
//         this.canvas.height = $(lab).height();
//         this.canvas.style.top = $(lab).position().top + 'px';
//         this.canvas.style.left = $(lab).position().left + 'px';
//         document.getElementById('lab').innerHTML = (this.canvas.innerHTML)
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.frameNo = 0;
//         this.interval = setInterval(updateGameArea, 20);
//         window.addEventListener('keydown', function (e) {
//             e.preventDefault();
//             myGameArea.keys = (myGameArea.keys || []);
//             myGameArea.keys[e.keyCode] = (e.type === "keydown");
//         })
//         window.addEventListener('keyup', function (e) {
//             myGameArea.keys[e.keyCode] = (e.type === "keydown");
//         })
//     },
//     stop : function() {
//         clearInterval(this.interval);
//     },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }
//
// function _component(width, height, imageSrc, x, y, type) {
// // function _component(width, height, color, x, y, type) {
//
//     this.type = type;
//     this.width = width;
//     this.height = height;
//     this.speed = 0;
//     this.angle = 0;
//     this.moveAngle = 0;
//     this.x = x;
//     this.y = y;
//
//     this.image = new Image();
//     this.image.src = imageSrc;
//
//     this.update = function() {
//         ctx = myGameArea.context;
//         ctx.save();
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.angle);
// //// SET SQUARE
//         // ctx.fillStyle = color;
//         // ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
//
// ////SET IMAGE
//         ctx = myGameArea.context;
//         ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//
//         ctx.restore();
//     }
//     this.newPos = function() {
//         this.angle += this.moveAngle / 360;
//         this.x += this.speed * Math.sin(this.angle);
//         this.y -= this.speed * Math.cos(this.angle);
//     }
// }
//
// function updateGameArea() {
//     myGameArea.clear();
//     myGamePiece.moveAngle = 0;
//     myGamePiece.speed = 0;
//     if (myGameArea.keys && myGameArea.keys[37]) { myGamePiece.moveAngle = -1; }
//     if (myGameArea.keys && myGameArea.keys[39]) { myGamePiece.moveAngle = 1; }
//     if (myGameArea.keys && myGameArea.keys[38]) { myGamePiece.speed= 1; }
//     if (myGameArea.keys && myGameArea.keys[40]) { myGamePiece.speed= -1; }
//     myGamePiece.newPos();
//     myGamePiece.update();
// }
//
// startGame();

///////part3

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];
const player = {
    x: 200,
    y: 300,
    width: 65   ,
    height: 64,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false,
};

const playerSprite = new Image();
playerSprite.src = 'images/goblinsword.png';
const background = new Image();
background.src = 'images/background.png';

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    player.moving = true;
})

window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
    player.moving = false;
})

function movePlayer() {
    if (keys[38] && player.y > 100) {
        player.y -= player.speed;
        player.frameY = 2;
        player.moving = true;
    }
    if (keys[37] && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys[40] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += player.speed;
        player.frameY = 1;
        player.moving = true;
    }
}

function handlePlayerFrame() {
    if (player.frameX < 10 && player.moving) player.frameX++;
    else player.frameX = 0;
}

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval)

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawSprite(playerSprite,
            player.width * player.frameX,
            player.height * player.frameY,
            player.width, player.height,
            player.x, player.y,
            player.width, player.height
        );
        movePlayer();
        handlePlayerFrame();
        requestAnimationFrame(animate);
    }
}

startAnimating(30);
