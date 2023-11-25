
(function($) {
    $.fn.imagine = function(){

        var element = this;

        var defaults = {
            url: "",
            placeholder: "https://placehold.co/600x400",
            width:"600",
            height:"400",            
            scaleX:"1",
            scaleY:"1",
            alt:"Imagine",
            rotate:"0",
            circular: false,
            style:""            
        }

        // function to set the image source url
        function setURL(src) {
            if(src=="" || src==undefined){
                defaults.url = setPlaceholder(holder);
                updateImage();
                return this;         
            }
            else{
                defaults.url = src;
                updateImage();
                return this;  
            };
        };

        // placeholder
        function setPlaceholder(holder){
            if(holder=="" || holder==undefined){
                updateImage();
                return this;
            }
            if(defaults.url===""){
                element.attr('src', holder);  
            }        
            updateImage();
            return this;
        };
        
        // aleternative text
        function setAlternative(text){
            defaults.alt = text;
            updateImage();
            return this;    
        }

        // circular
        function setCircular(circular){
            defaults.circular = circular;
            updateImage();
            return this

        }

        // function to update thr image properties
        function updateImage(){
            if(defaults.url){                
                element.attr('src', defaults.url);   
                // if(!element.complete){
                // }                                   
            }

            if(defaults.placeholder){
                element.attr("src", defaults.placeholder);
            }

            if(defaults.alt){
                element.attr('alt', defaults.alt);
            }

            if(defaults.circular){
                element.css('border-radius', '50%');

            }
            
        }

        // scale
        // function scale(scaleX, scaleY) {
        //     element.css({
        //     'width': element.width() * scaleX,
        //     'height': element.height() * scaleY                    
        //     });
        // };
        // return {scale: scale};
        // end of scale
        

         // rotate
        //  var rotate = function(degree){
        //     // angle in deg
        //     element.css({                
        //         'transform': 'rotate(' + degree + 'deg)'
        //     });                  
            
        // };
        // return{rotate: rotate };
        // end of rotate 

        // resize
        // var resize = function(width, height) {
        //     element.attr('width', width);
        //     element.attr('height', height);
        //     console.log('size: '+width+"x"+height);                                             
        // };
        // return {resize: resize};
        // end of resize

        
        // Public functions
        return {                            
            url: setURL,
            placeholder: setPlaceholder,
            alt: setAlternative,
            circular: setCircular
        };               
    }
    
}(jQuery));