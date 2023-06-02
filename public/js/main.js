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
})

function removeClass ()
{
    document.querySelectorAll('.headerButton').forEach((element) => {
        element.classList.remove('active');
    });
}
