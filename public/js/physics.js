var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

var keys = [];
var player = {
    x: 320,
    y: 115,
    width: 65,
    height: 64,
    frameX: 0,
    frameY: 0,
    speed: 5,
    moving: false,
};

var playerSprite = new Image();
playerSprite.src = 'images/goblinsword.png'; //'images/C3ZwL.png';
var background = new Image();
background.src = 'images/physicsLabBack.jpg';

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
    if (keys[38] && player.y > 0) { //top
        player.y -= player.speed;
        player.frameY = 2; // 0;
        player.moving = true;
    }
    if (keys[37] && player.x > 0) { //left
        player.x -= player.speed;
        player.frameY = 3; // 1;
        player.moving = true;
    }
    if (keys[40] && player.y < canvas.height - player.height) { // bottom
        player.y += player.speed;
        player.frameY = 0; // 2;
        player.moving = true;
    }
    if (keys[39] && player.x < canvas.width - player.width) { //right
        player.x += player.speed;
        player.frameY = 1; // 3;
        player.moving = true;
    }

    if ((player.x >= 350 && player.x <= 380) && (player.y >= 345 && player.y <= 395)) {
        $.ajax({
            url: 'lab/psychology',
            type: 'GET',
            success: function(response) {
                $(this).addClass('active');
                $('#container').html(response);

            },
            error: function() {
                alert('An error occurred while fetching the content.');
            }
        });
        return false;
    }
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
