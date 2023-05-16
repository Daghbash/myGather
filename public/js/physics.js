$(document).ready(function () {
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
})
