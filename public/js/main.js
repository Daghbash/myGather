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
                    $('#container').html('<div>' + response + '</div>');

                    let movingIcon = $("#" + labId + "Content").find('img');
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
    window.isGameReady = true;

    function moveIcon(e) {
        if (window.isGameReady) {
            let movingIcon = $('#person')
            let lab = $('#lab');
            let position = movingIcon.position();

            switch (e.which) {
                case 37: //left arrow key
                    if (position.left >= 0)    {
                        movingIcon.finish().animate({
                            left: '-=10',
                        });
                    }
                    break;
                case 38: //up arrow key
                    if (position.top - 10 >= 0) {
                        movingIcon.finish().animate({
                            top: '-=10'
                        });
                    }
                    break;
                case 39: //right arrow key
                    if (position.left + movingIcon.width() < lab.width()) {
                        movingIcon.finish().animate({
                            left: '+=10'
                        });
                    }
                    break;
                case 40: //bottom arrow key
                    if (position.top + movingIcon.height() + 10 < lab.height()) {
                        movingIcon.finish().animate({
                            top: '+=10'
                        });
                    }
                    break;
            }
            $.map($('#doors div'), function( val ) {
                let labId = $(val).attr('lab');
                console.log(position, $(val).position())
                // if (position.left + movingIcon.width() >= $(val).position().left &&
                //     ) {
                //     // console.log($(val))
                // }

                // Do something
            });

            let mathLabDoor = $('.mathLabDoor');

            if (position.left - movingIcon.width() >= mathLabDoor.position().left &&
                position.top - movingIcon.height() >= mathLabDoor.position().top) {
                window.isGameReady = false;
                $.ajax({
                    url: '/lab/physics',  // Replace with your route URL or endpoint
                    type: 'GET',
                    success: function(response) {
                        $('#geographyLab').addClass('active');
                        $('#container').html('<div>' + response + '</div>');

                        let movingIcon = $("#physicsLabContent img");
                        window.isGameReady = true;
                    },
                    error: function() {
                        alert('An error occurred while fetching the content.');
                    }
                });
            }
        }

    }

    $(document).keydown(function(e) {
        moveIcon(e)
    })

    //heto
    // $('.select-avatar-button').click(function() {
    //     let allSameClasses = $('.select-avatar-button').not($(this));
    //     let selectedImage = $(this).parent().siblings('img');
    //     // console.log(selectedImage[0])
    //
    //     allSameClasses.unbind("click");
    //     $(this).addClass('d-none');
    //     ($(this)).parent().find('.selected-button').css('display', 'block')
    // })
})

