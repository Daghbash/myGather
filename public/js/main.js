$(document).ready(function() {

    let labUrls = {
        mathLab: 'lab/math',
        physicsLab: '/lab/physics',
        psychologyLab: '/lab/psychology',
        biologyLab: '/lab/biology',
        geographyLab: '/lab/geography',
    }

    $(".headerButton").on('click', function () {
        let labId = $(this).attr('id');
        let labUrl = labUrls[labId];
        removeClass();

            $.ajax({
                url: labUrl,
                type: 'GET',
                success: function(response) {
                    $(this).addClass('active');
                    $('#container').html(response);
                },
                error: function() {
                    alert('An error occurred while fetching the content.');
                }
            });
    });

    function removeClass ()
    {
        document.querySelectorAll('.headerButton').forEach((element) => {
            element.classList.remove('active');
        });
    }

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = windowWidth - 16.0000001;
    canvas.height = windowHeight;

    var house1Coordinate = {
        x: 50,
        y: 150,
        w: 200,
        h: 100,
    };
    var house1DoorCoordinate = {
        x: 60,
        y: 190,
        w: 40,
        h: 60,
    };
    var house1WindowCoordinate = {
        x: 0,
        y: 0,
        w: 60,
        h: 30,
    };
    var house1TreeCoordinate = {
        x: house1Coordinate.x + house1Coordinate.w + house1Coordinate.h/2,
        y: house1Coordinate.y,
        r: 25,
        w: 10,
    };

    var house2Coordinate = {
        x: 650,
        y: 250,
        w: 300,
        h: 200,
    };
    var house2DoorCoordinate = {
        x: 690,
        y: 320,
        w: 60,
        h: 130,
    };
    var house2WindowCoordinate = {
        x: 0,
        y: 0,
        w: 90,
        h: 50,
    };

    function drawHouses(context)
    {
//The frame for the canvas
        context.strokeStyle = "#ССCС";
        context.strokeRect(0, 0, canvas.width, canvas.height);

//////////////////////house1
// The house
        context.fillStyle = "royalblue";
        context.fillRect(house1Coordinate.x, house1Coordinate.y, house1Coordinate.w, house1Coordinate.h);
// The door
        context.fillStyle = 'rgba(255, 255, 255, 0.9)';
        context.fillRect(house1DoorCoordinate.x, house1DoorCoordinate.y, house1DoorCoordinate.w, house1DoorCoordinate.h);
// The window
        context.save();

        context.translate(house1Coordinate.x + house1Coordinate.w/2, house1DoorCoordinate.y);
        context.fillRect(house1WindowCoordinate.x, house1WindowCoordinate.y, house1WindowCoordinate.w, house1WindowCoordinate.h);
        context.restore();
// The roof
        context.beginPath();
        context.moveTo(house1Coordinate.x, house1Coordinate.y);
        context.lineTo(house1Coordinate.x + house1Coordinate.w, house1Coordinate.y);
        context.lineTo(house1Coordinate.x + house1Coordinate.w/2, house1Coordinate.h/1.5);
        context.fillStyle = '#A52A2A';
        context.fill();
// The tree
        context.beginPath();
        context.linewidth = house1TreeCoordinate.w;
        context.strokeStyle = 'brown';
        context.moveTo(house1TreeCoordinate.x, house1TreeCoordinate.y);
        context.lineTo(house1TreeCoordinate.x, house1TreeCoordinate.y + house1Coordinate.h);
        context.stroke();
        context.beginPath();
        context.fillStyle = 'green';
        context.arc(house1TreeCoordinate.x,house1Coordinate.y, house1TreeCoordinate.r,0,Math. PI * 2);
        context.fill();

//////////////////////house2
// The house
        context.fillStyle = "orange";
        context.fillRect(house2Coordinate.x, house2Coordinate.y,house2Coordinate.w, house2Coordinate.h);
// The door
        context.fillStyle = 'rgba(255, 255, 255, 8)';
        context.fillRect(house2DoorCoordinate.x, house2DoorCoordinate.y, house2DoorCoordinate.w, house2DoorCoordinate.h);
// The window
        context.save();

        context.translate(house2Coordinate.x + house2Coordinate.w/2, house2DoorCoordinate.y);
        context.fillRect(house2WindowCoordinate.x, house2WindowCoordinate.y, house2WindowCoordinate.w, house2WindowCoordinate.h);

        context.restore();
    //window lines
        context.beginPath();
        context.linewidth = 4;
        context.strokeStyle = 'green';
        context.moveTo(house2Coordinate.x + house2Coordinate.w/2, house2Coordinate.y + (house2Coordinate.h - house2WindowCoordinate.h) - house2WindowCoordinate.h); //x-800, y-350
        context.lineTo(house2Coordinate.x + house2Coordinate.w/2 + house2WindowCoordinate.w, house2Coordinate.y + (house2Coordinate.h - house2WindowCoordinate.h) - house2WindowCoordinate.h); //x-890, y-350

        context.moveTo(house2Coordinate.x + house2Coordinate.w/2 + house2WindowCoordinate.h/2, house2DoorCoordinate.y); //x-825, y-320
        context.lineTo(house2Coordinate.x + house2Coordinate.w/2 + house2WindowCoordinate.h/2, house2DoorCoordinate.y + house2WindowCoordinate.h); //x-825, y-370
        context.stroke();
// The roof
        context.beginPath();
        context.moveTo(house2Coordinate.x, house2Coordinate.y);
        context.lineTo(house2Coordinate.x + house2Coordinate.w, house2Coordinate.y);
        context.lineTo(house2Coordinate.x + house2Coordinate.w/2, house2Coordinate.h/2);
        context.fillStyle = '#A52A2A';
        context.fill();
// The tree
        context.beginPath();
        context.linewidth = 20;
        context.strokeStyle = 'brown';
        context.moveTo(house2Coordinate.x + 1.5*house2Coordinate.w, house2Coordinate.y); //x-1100, y-250
        context.lineTo(house2Coordinate.x + 1.5*house2Coordinate.w, house2Coordinate.y + house2Coordinate.h); //x-1100 y-450
        context.stroke();
        context.beginPath();
        context.fillStyle = 'green';

        context.moveTo(1000, 300);
        context.lineTo(1200, 300);
        context.lineTo(1000 + 200/2, 100);
        context.closePath();
        context.fillStyle = 'green';
        context.fill();
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

        // if ((player.x >= 855 && player.x <= 935) && (player.y >= 265 && player.y <= 330)) {
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

            context.clearRect(0, 0, canvas.width, canvas.height);
            drawHouses(context);
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
})

