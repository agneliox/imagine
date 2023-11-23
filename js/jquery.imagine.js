
(function($) {
    $.fn.imagine = function(options){

        var defaults = {
            placeholder: "https://placehold.co/600x400",
            width:"600",
            height:"400",
            scaleX:"1",
            scaleY:"1",
            alt:"Imagine",
            rotate:"0",
            style:""            
        }

        
        
        var settings = $.extend({}, defaults, options);

        return {
            {
                
                // .css("border", "1px solid red"); 
            }
            // $(this).css("border", "1px solid red");
        };
    }
    
}(jQuery));