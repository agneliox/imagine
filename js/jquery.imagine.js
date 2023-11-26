
(function($) {
    $.fn.imagine = function(){

        var element = this;

        var defaults = {
            url: "",
            placeholder: "https://placehold.co/600x400",                                 
            scale: null,
            alt:"Imagine",
            resize: null,
            rotate:null,
            circular: false,
            style:""            
        }

        // function to set the image source url
        function setURL(src) {
            if(src=="" || src==undefined){
                // defaults.url = setPlaceholder(holder);

                console.log("Imagine: image source error");
                updateImage();
                return this;         
            }
            else{
                defaults.url = src;
                console.log("Imagine: image source = " + src);
                updateImage();
                return this;  
            };
        };

        // placeholder
        function setPlaceholder(holder){
            // if()
            if(holder=="" || holder==undefined){
                updateImage();
                return this;
            }
            if(defaults.url===""){
                element.attr('src', holder); 
                updateImage();
                return this; 
            }                    
        };
        
        // aleternative text
        function setAlternative(text){
            defaults.alt = text;
            console.log("Imagine: alternative text = " + text);
            updateImage();
            return this;    
        }

        // circular
        function setCircular(circular){
            defaults.circular = circular;
            console.log("Imagine: circular is  = " + circular);
            updateImage();
            return this;
        }

        // resize
         function setResize(resize) {
            defaults.resize = resize;
            console.log("Imagine: resize in px to " + resize );
            updateImage();            
            return this;                                            
        };
        // end of resize

         // rotate
         function setRotate(degree){
            // angle in deg
            defaults.rotate = degree;
            element.animate({  transform:  defaults.rotate  }, 
                    {
                    step: function(now,fx) 
                    {
                        $(this).css({
                            '-webkit-transform':'rotate('+now+'deg)',
                            '-moz-transform':'rotate('+now+'deg)',
                            'transform':'rotate('+now+'deg)'
                        });
                    }
                    });
            console.log("Imagine: rotation angle in degrees = " + degree);
            updateImage();             
            return this;                           
        };        
        // end of rotate 

        // scale
        function setScale(scale) {             
            // element.attr({ 
            //         'width': element.width() *  defaults.scale,
            //         'height': element.height() *  defaults.scale                   
            //     });            
            console.log("Imagine: scale = " + scale);
            updateImage();
            return this;            
        };      
        // end of scale


        //******* function to update thr image properties*******
        function updateImage(){
            if(defaults.placeholder){            
                element.attr("src", defaults.placeholder);                            
            }

            if(defaults.url){                
                element.attr('src', defaults.url);                                                    
            }                         
            
            // resize
            if(defaults.resize){
                var newSize = defaults.resize.split(",");
                element.attr('width', newSize[0]);
                element.attr('height', newSize[1]);                                                                        
            };
            // end of resize

            //  rotate image
            if(defaults.rotate){                                                           
            }

            // scale
            if(defaults.scale){                
                element.attr({ 
                    'width': element.width() * newScale,
                    'height': element.height() * newScale                   
                });                                                                               
            }            

            // circular shape
            if(defaults.circular){
                element.css('border-radius', '50%');
            }

            // alternative text
            if(defaults.alt){
                element.attr('alt', defaults.alt);
            }
        }
        
        // Public functions
        return {                            
            url: setURL,
            // placeholder: setPlaceholder,
            resize: setResize,
            rotate: setRotate,
            scale: setScale,
            circular: setCircular,
            alt: setAlternative,            
        };               
    }    
}(jQuery));