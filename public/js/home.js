// callFunc();
var labs = {
    'img1': 'math',
    'img2': 'physics',
    'img3': 'psychology',
    'img4': 'biology',
    'img5': 'geography',
}
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = windowWidth - 16.0000001;
canvas.height = windowHeight;

var images = [];
var numImages = 5;

// Load the images
function loadImages() {
    var loadedImages = 0;
    var imageSources = [
        'images/mathLabBack.jpg',
        'images/physicsLabBack.jpg',
        'images/psychologyLabBack.jpg',
        'images/biologyLabBack.jpg',
        'images/geographyLabBack.jpg',
    ];

    // Create new image objects and assign the source
    for (var i = 0; i < numImages; i++) {
        var img = new Image();
        img.src = imageSources[i];

        images.push(img);
        img.addEventListener('load', function() {
            loadedImages++;
            if (loadedImages === numImages) {
                startAnimating(30);
            }
        });
    }
}
loadImages();

var imgs = {
    'img1': [],
    'img2': [],
    'img3': [],
    'img4': [],
    'img5': [],
}

var imageParams = {
    'imageWidth': 250,
    'imageHeight': 150,
    'borderWidth': 5,
    'margin': 30,
}

function drawImages() {
    var totalWidth = (imageParams.imageWidth + imageParams.margin * 2 + imageParams.borderWidth) * images.length;
    var startX = (canvas.width - totalWidth) / 2;

    for (var i = 0; i < images.length; i++) {
        var index = 'img' + (i + 1);
        var image = images[i];
        var x = startX + (imageParams.imageWidth + imageParams.margin * 2 + imageParams.borderWidth) * i + imageParams.margin;
        var y = imageParams.margin + 100;

        // Draw the border
        context.strokeStyle = '#6c757d';
        context.lineWidth = imageParams.borderWidth;
        context.strokeRect(x, y, imageParams.imageWidth, imageParams.imageHeight);

        // Draw the image inside the border
        context.drawImage(image, x + imageParams.borderWidth, y + imageParams.borderWidth, imageParams.imageWidth - imageParams.borderWidth * 2, imageParams.imageHeight - imageParams.borderWidth * 2);
        imgs['img'+(i+1)]['i'] = i + 1;
        imgs['img'+(i+1)]['x'] = x + imageParams.borderWidth;
        imgs['img'+(i+1)]['y'] = y + imageParams.borderWidth;
        imgs['img'+(i+1)]['w'] = imageParams.imageWidth - imageParams.borderWidth * 2;
        imgs['img'+(i+1)]['h'] = imageParams.imageHeight - imageParams.borderWidth * 2;

        // Set the text style
        context.font = "14px Arial";
        context.fillStyle = "black";
        context.textAlign = "center";

        // Calculate the text position
        var textX = x + imageParams.imageWidth / 2;
        var textY = y - 10;

        // Draw the text
        var labelText = (labs[index]).charAt(0).toUpperCase() + (labs[index]).slice(1) + ' lab';
        context.fillText(labelText, textX, textY);
    }
}

var keys = [];
var player = {
    x: 10,
    y: 10,
    width: 65,
    height: 64,
    frameX: 0,
    frameY: 0,
    speed: 5,
    moving: false,
};
var loading = false;

var playerSprite = new Image();
playerSprite.src = 'images/goblinsword.png';

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    context.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
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
    if (keys[38] && player.y > 0) {                             //top
        player.y -= player.speed;
        player.frameY = 2;
        player.moving = true;
    }
    if (keys[37] && player.x > 0) {                             //left
        player.x -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    if (keys[40] && player.y < canvas.height - player.height) { // bottom
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if (keys[39] && player.x < canvas.width - player.width) {   //right
        player.x += player.speed;
        player.frameY = 1;
        player.moving = true;
    }

    for (const key in imgs) {
        if ((player.x >= (imgs[key].x + imageParams.margin - player.width) && player.x <= (imgs[key].x + imgs[key].w - player.width + imageParams.margin)) &&
            (player.y >= (imgs[key].y - player.height) && player.y <= (imgs[key].y + imgs[key].h - player.height)) &&
            (!loading)) {
            loading = true;
            $.ajax({
                url: 'lab/' + labs[key],
                type: 'GET',
                success: function(response) {
                    $(this).addClass('active');
                    $('#container').html(response);

                    loading = false;
                },
                error: function() {
                    alert('An error occurred while fetching the content.');
                }
            });

        }
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

        context.clearRect(0, 0, canvas.width, canvas.height);
        drawImages();
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
