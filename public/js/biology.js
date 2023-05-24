var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');
var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');
var canvas4 = document.getElementById('canvas4');
var ctx4 = canvas4.getContext('2d');
console.log(ctx, 'asd', ctx2)
canvas1.width = canvas2.width = canvas3.width = canvas4.width = canvas.width/2
canvas1.height = canvas2.height = canvas3.height = canvas4.height = canvas.height/2

var keys = [];
var player = {
    x: 205,
    y: 260,
    width: 65,
    height: 64,
    frameX: 0,
    frameY: 0,
    speed: 5,
    moving: false,
};

var playerSprite = new Image();
playerSprite.src = 'images/goblinsword.png';
// var background = new Image();
// background.src = 'images/biologyLabBack.jpg';

var background1 = new Image();
background1.src = 'images/biologyLabBack.jpg';
var background2 = new Image();
background2.src = 'images/mathLabBack.jpg';
var background3 = new Image();
background3.src = 'images/geographyLabBack.jpg';
var background4 = new Image();
background4.src = 'images/physicsLabBack.jpg';

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
    ctx1.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
    ctx2.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
    ctx3.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
    ctx4.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
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
    if (keys[38] && player.y > 0) { // top
        player.y -= player.speed;
        player.frameY = 2;
        player.moving = true;
    }
    if (keys[37] && player.x > 0) { // left
        player.x -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys[40] && player.y < canvas.height - player.height) { // bottom
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys[39] && player.x < canvas.width - player.width) { // right
        player.x += player.speed;
        player.frameY = 1;
        player.moving = true;
    }

    // if ((player.x >= 645 && player.x <= 725) && (player.y >= 370 && player.y <= 400)) {
    //     $.ajax({
    //         url: 'lab/geography',
    //         type: 'GET',
    //         success: function(response) {
    //             $(this).addClass('active');
    //             $('#container').html(response);
    //
    //             // return false;
    //         },
    //         error: function() {
    //             alert('An error occurred while fetching the content.');
    //         }
    //     });
    //     return false;
    // }
}

function handlePlayerFrame() {
    if (player.frameX < 10 && player.moving) player.frameX++;
    else player.frameX = 0;
}

var fps, fpsInterval, startTime, now, then, elapsed;

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
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
        ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
        // ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx1.drawImage(background1, 0, 0, canvas1.width, canvas1.height);
        ctx2.drawImage(background2, 0, 0, canvas2.width, canvas2.height);
        ctx3.drawImage(background3, 0, 0, canvas3.width, canvas3.height);
        ctx4.drawImage(background4, 0, 0, canvas4.width, canvas4.height);
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
