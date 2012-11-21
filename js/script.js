$(document).ready(function() {
    (function($) {
        $.fn.tooltip = function() {
            $(this).hover(function() {
                var titleText = $(this).attr('data-hint');
                $(this).data('tipText', titleText).removeAttr('title');
                $('<p class="tooltip"></p>').text(titleText).appendTo('body').fadeIn('slow');
            }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
            }).mousemove(function(e) {
                var mouseX = e.pageX + 20;
                var mouseY = e.pageY + 10; 
                $('.tooltip').css({ top: mouseY, left: mouseX });
            });
        };
    })(jQuery);
    $('div').tooltip();
});
