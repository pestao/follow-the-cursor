$(document).ready(function() {
    $('[data-hint]').hover(function() {
        var titleText = $(this).attr('data-hint');
        $(this).data('tipText', titleText).removeAttr('title');
        $('<p class="tooltip"></p>').text(titleText).appendTo('body').fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
        var mouseX = e.pageX + 20; //Get X coordinates
        var mouseY = e.pageY + 10; //Get Y coordinates
        $('.tooltip').css({ top: mouseY, left: mouseX });
    });
});