var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

canvas.width = windowWidth - 16.0000001;
canvas.height = windowHeight;

var keys = [];
var player = {
    x: 1500,
    y: 60,
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
background.src = 'images/mathLabBack.jpg';

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
var loading = false;

var mathTestsButton = document.getElementById('mathTests');
function movePlayer() {
    if (keys[38] && player.y > 0) { //top
        player.y -= player.speed;
        player.frameY = 2;
        player.moving = true;
    }
    if (keys[37] && player.x > 0) { //left
        player.x -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys[40] && player.y < canvas.height - player.height) { // bottom
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys[39] && player.x < canvas.width - player.width) { //right
        player.x += player.speed;
        player.frameY = 1;
        player.moving = true;
    }

    if (((player.x >= 1655 && player.x <= 1790) && (player.y >= 260 && player.y <= 370))) {
        mathTestsButton.classList.remove('d-none');
        mathTestsButton.style.left = (1655 + 1790)/2 + 'px';
        mathTestsButton.style.top = (260 + 370)/2 + 'px';

        mathTestsButton.addEventListener("click", function () {
            if (!loading) {
                loading = true;
                $.ajax({
                    url: 'lab/math/tests',
                    type: 'GET',
                    success: function(response) {
                        $('#mathTestsModal .modal-body').html(response)

                        loading = false;
                    },
                    error: function() {
                        alert('An error occurred while fetching the content.');
                    }
                });
            }
        })
        document.getElementById('mathTestCheck').addEventListener("click", function (e) {
            e.preventDefault();
            if (!loading) {
                loading = true;
                var mathCheckModal = document.getElementById('mathCheckModal');
                var formData = ($('#math_check_test').serializeArray());

                console.log('formData', formData);
                $.ajax({
                    url: 'lab/math/checkTest',
                    type: 'POST',
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    data: formData,
                    success: function (data) {
                        console.log(456, data, formData);
                        mathCheckModal.style.display = 'block';
                        mathCheckModal.classList.add = 'show';
                        mathCheckModal.style.opacity = '1';

                        loading = false;
                    },
                    error: function () {
                        alert('An error occurred while fetching the content.');
                    }
                });
            }
        })
    } else {
        mathTestsButton.classList.add('d-none')
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
        ctx.font = "24px serif";
        var mathTest = 'Math tests';
        ctx.fillText(mathTest, (canvas.width - 200), 100);
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

startAnimating(150);
