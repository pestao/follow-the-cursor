$(document).ready(function() {
    (function($) {
        
        
        
        $.fn.tooltip = function( options ) {

            var Tooltip = function(){
                this.options = $.extend({}, options);
                this.tip = $('<p class="tooltip"></p>');
            };
            
            Tooltip.prototype.show = function(text, offset){
                offset.top += this.options.offsetY;
                offset.left += this.options.offsetX;
                this
                    .tip
                    .css(offset)
                    .text(this.options.text || text)
                    .appendTo('body')
                    .fadeIn('slow');
            };
            
            Tooltip.prototype.hide = function(){
                this.tip.detach();
            };
            
            var __tip__ = new Tooltip(options);
            
            return this.each(function() {
                var $this = $(this);
                var titleText = $this.attr('data-hint');
                $this.mousemove(function(e) {
                    __tip__.show(titleText,
                                { top: e.pageY, left: e.pageX });
                }).mouseout(function(){__tip__.hide();});              
            });
        };
    })( jQuery );
    $('div.firsthint').tooltip({
        'text': 'some text',
        'offsetX': 50,
        'offsetY': 10
    });
    $('div.secondhint').tooltip({
        'offsetX': 10,
        'offsetY': 10
    });
});
