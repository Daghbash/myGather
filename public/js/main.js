$(document).ready(function() {
    // document.getElementById('mathLab').addEventListener('click', function() {
    $('#mathLab').on('click', function () {
        removeClass();
        $.ajax({
            url: '/lab/math',  // Replace with your route URL or endpoint
            type: 'GET',
            success: function(response) {
                console.log(response.avatar);
                $('#mathLab').addClass('active');
                $('#container').html(response.message);
            },
            error: function() {
                alert('An error occurred while fetching the content.');
            }
        });
    });
    /////////////////////////////////
    document.getElementById('physicsLab').addEventListener('click', function() {
        removeClass();
        $.ajax({
            url: '/lab/physics',  // Replace with your route URL or endpoint
            type: 'GET',
            success: function(response) {
                $('#physicsLab').addClass('active');
                $('#container').html(response.message);
            },
            error: function() {
                alert('An error occurred while fetching the content.');
            }
        });
    });

    document.getElementById('psychologyLab').addEventListener('click', function() {
        removeClass();
        $.ajax({
            url: '/lab/psychology',  // Replace with your route URL or endpoint
            type: 'GET',
            success: function(response) {
                $('#psychologyLab').addClass('active');
                $('#container').html(response.message);
            },
            error: function() {
                alert('An error occurred while fetching the content.');
            }
        });
    });

    document.getElementById('biologyLab').addEventListener('click', function() {
        removeClass();
        $.ajax({
            url: '/lab/biology',  // Replace with your route URL or endpoint
            type: 'GET',
            success: function(response) {
                $('#biologyLab').addClass('active');
                $('#container').html(response.message);
            },
            error: function() {
                alert('An error occurred while fetching the content.');
            }
        });
    });

    document.getElementById('geographyLab').addEventListener('click', function() {
        removeClass();
        $.ajax({
            url: '/lab/geography',  // Replace with your route URL or endpoint
            type: 'GET',
            success: function(response) {
                $('#geographyLab').addClass('active');
                $('#container').html(response.message);
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
})
