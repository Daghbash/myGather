$(document).ready(function() {

    $('#mathLab').on('click', function () {
        removeClass();
        $.ajax({
            url: '/lab/math',
            type: 'GET',
            success: function(response) {
                console.log(response);
                $('#mathLab').addClass('active');
                $('#container').html('<div id="mathLabContent">' + response + '</div>');

                let movingIcon = $("#mathLabContent");
                moveIcon(movingIcon);
            },
            error: function() {
                alert('An error occurred while fetching the content.');
            }
        });
    });

    $('#physicsLab').on('click', function() {
        removeClass();
        $.ajax({
            url: '/lab/physics',
            type: 'GET',
            success: function(response) {
                $('#physicsLab').addClass('active');
                $('#container').html('<div id="physicsLabContent">' + response + '</div>');

                let movingIcon = $("#physicsLabContent");
                moveIcon(movingIcon);
            },
            error: function() {
                alert('An error occurred while fetching the content.');
            }
        });
    });

    $('#psychologyLab').on('click', function() {
        removeClass();
        $.ajax({
            url: '/lab/psychology',
            type: 'GET',
            success: function(response) {
                $('#psychologyLab').addClass('active');
                $('#container').html('<div id="psychologyLabContent">' + response + '</div>');

                let movingIcon = $("#psychologyLabContent");
                moveIcon(movingIcon);
            },
            error: function() {
                alert('An error occurred while fetching the content.');
            }
        });
    });

    $('#biologyLab').on('click', function() {
        removeClass();
        $.ajax({
            url: '/lab/biology',
            type: 'GET',
            success: function(response) {
                $('#biologyLab').addClass('active');
                $('#container').html('<div id="biologyLabContent">' + response + '</div>');

                let movingIcon = $("#biologyLabContent");
                moveIcon(movingIcon);
            },
            error: function() {
                alert('An error occurred while fetching the content.');
            }
        });
    });

    $('#geographyLab').on('click', function() {
        removeClass();
        $.ajax({
            url: '/lab/geography',  // Replace with your route URL or endpoint
            type: 'GET',
            success: function(response) {
                $('#geographyLab').addClass('active');
                $('#container').html('<div id="geographyLabContent">' + response + '</div>');

                let movingIcon = $("#geographyLabContent");
                moveIcon(movingIcon);
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

    function moveIcon(movingIcon) {
        $(document).keydown(function(e) {
            let position = movingIcon.position();
            let headerHeight = $('header').innerHeight() + $('header').outerHeight() - movingIcon.height();

            switch (e.which) {
                case 37:
                    if (position.left - 10 >= 0) {
                        movingIcon.finish().animate({
                            left: '-=10',
                        }); //left arrow key
                    }
                    break;
                case 38:
                    if (position.top - 10 > 83) {
                        movingIcon.finish().animate({
                            top: '-=10'
                        }); //up arrow key
                    }
                    break;
                case 39:
                    if (position.left + movingIcon.width() < screen.width) {
                        movingIcon.finish().animate({
                            left: '+=10'
                        }); //right arrow key
                    }
                    break;
                case 40:
                    if (position.top + movingIcon.height() + headerHeight < screen.height) {
                        movingIcon.finish().animate({
                            top: '+=10'
                        }); //bottom arrow key
                    }
                    break;
            }
        })
    }

})
