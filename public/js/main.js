$(document).ready(function() {

    $('#mathLab').on('click', function () {
        removeClass();
        $.ajax({
            url: '/lab/math',
            type: 'GET',
            success: function(response) {
                $('#mathLab').addClass('active');
                $('#container').html('<div>' + response + '</div>');

                let movingIcon = $("#mathLabContent").find('img');
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
                $('#container').html('<div>' + response + '</div>');

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
                $('#container').html('<div>' + response + '</div>');

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
            let iconHeight = movingIcon.height();
            let iconWidth = movingIcon.width();
            let lab = movingIcon.closest('.mathLab');
            let labTop = lab.position().top;
            let labLeft = lab.position().left;
            let labRight = lab.width() + labLeft;
            let labBottom = lab.height() + labTop;

            switch (e.which) {
                case 37:
                    if (position.left >= labLeft) {
                        movingIcon.finish().animate({
                            left: '-=10',
                        }); //left arrow key
                    }
                    break;
                case 38:
                    if (position.top - 10 >= labTop) {
                        movingIcon.finish().animate({
                            top: '-=10'
                        }); //up arrow key
                    }
                    break;
                case 39:
                    if (position.left + iconWidth < labRight) {
                        movingIcon.finish().animate({
                            left: '+=10'
                        }); //right arrow key
                    }
                    break;
                case 40:
                    if (position.top + iconHeight < labBottom) {
                        movingIcon.finish().animate({
                            top: '+=10'
                        }); //bottom arrow key
                    }
                    break;
            }

            let exitDoor = $('.exitDoor');

            if (position.left - movingIcon.width() >= exitDoor.position().left &&
                position.top - movingIcon.height() >= exitDoor.position().top) {
                $.ajax({
                    url: '/lab/physics',  // Replace with your route URL or endpoint
                    type: 'GET',
                    success: function(response) {
                        $('#geographyLab').addClass('active');
                        $('#container').html('<div>' + response + '</div>');
                    },
                    error: function() {
                        alert('An error occurred while fetching the content.');
                    }
                });
            }
        })
    }

    //heto
    $('.select-avatar-button').click(function() {
        let allSameClasses = $('.select-avatar-button').not($(this));
        let selectedImage = $(this).parent().siblings('img');
        // console.log(selectedImage[0])

        allSameClasses.unbind("click");
        $(this).addClass('d-none');
        ($(this)).parent().find('.selected-button').css('display', 'block')
    })
})
