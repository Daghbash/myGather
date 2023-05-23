var headerHeight = document.getElementById('header').offsetHeight;

// document.getElementsByClassName('canvasContainer ')
$(".canvasContainer ").top = headerHeight + 'px';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;
canvas.style.top = 0 + "px";
canvas.style.left = 0 + "px";

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
canvas2.width = 1000;
canvas2.height = 500;
canvas2.style.top = 0 + "px";
canvas2.style.left = 1000 + "px";

var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');
canvas3.width = 1000;
canvas3.height = 500;
canvas3.style.top = 500 + "px";
canvas3.style.left = 0 + "px";

var canvas4 = document.getElementById('canvas4');
var ctx4 = canvas4.getContext('2d');
canvas4.width = 1000;
canvas4.height = 500;
canvas4.style.top = 500 + "px";
canvas4.style.left = 1000 + "px";

var keys = [];
var player = {
    x: canvas.width/2,
    y: 0,
    width: 65,
    height: 64,
    frameX: 0,
    frameY: 0,
    speed: 5,
    moving: false,
};

var playerSprite = new Image();
playerSprite.src = 'images/goblinsword.png';
var background = new Image();
background.src = 'images/geographyLabBack.jpg';
var background2 = new Image();
background2.src = 'images/mathLabBack.jpg';
var background3 = new Image();
background3.src = 'images/physicsLabBack.jpg';
var background4 = new Image();
background4.src = 'images/biologyLabBack.jpg';

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    if ((player.x >= 0 && player.x <= canvas.getBoundingClientRect().width + player.width) &&
        (player.y >= 0 && player.y <= canvas.getBoundingClientRect().height + player.height)) {
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
        // if ((player.x >= canvas.width/2 - 20 && player.x <= canvas.width/2 + 20) &&
        //     (player.y >= canvas.height - player.height - 20 && player.y <= canvas.height - player.height + 20)) {
        //     ctx3.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
        // }
    }
    // if ((player.x >= 0 && player.x <= canvas2.getBoundingClientRect().width + player.width) &&
    //     (player.y >= 0 && player.y <= canvas2.getBoundingClientRect().height + player.height)) {
    //     ctx2.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
    // }
    //
    // if ((player.x >= 0 && player.x <= canvas3.getBoundingClientRect().width + player.width) &&
    //     (player.y >= 0 && player.y <= canvas3.getBoundingClientRect().height + player.height)) {
    //     ctx3.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
    // }
    //
    // if ((player.x >= 0 && player.x <= canvas4.getBoundingClientRect().width + player.width) &&
    //     (player.y >= 0 && player.y <= canvas4.getBoundingClientRect().height + player.height)) {
    //     ctx4.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
    // }
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
    //         url: 'lab/physics',
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
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx2.drawImage(background2, 0, 0, canvas2.width, canvas2.height);

        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
        ctx3.drawImage(background3, 0, 0, canvas3.width, canvas3.height);

        ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
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
