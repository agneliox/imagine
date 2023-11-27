
(function($) {
    $.fn.imagine = function(){
        
        var element = this;
        var image = jQuery("img", this);

        var defaults = {
            url: "",
            placeholder: "https://placehold.co/600x400",                                 
            scale: null,
            alt:"Imagine",
            resize: null,
            rotate:null,
            circular: false,
            caption: null,
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
                image.attr('src', holder); 
                updateImage();
                return this; 
            }                    
        };
                
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
            image.animate({  transform:  defaults.rotate  }, 
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

        // circular
        function setCircular(circular){
            defaults.circular = circular;
            console.log("Imagine: circular is  = " + circular);
            updateImage();
            return this;
        }
         
        // caption text
        function setCaption(caption){
            defaults.caption = caption;
            var cap = defaults.caption.split(",");
            element.append("<p class='caption-text'>"+ cap[0]+"</>");
            $(".caption-text").css("textAlign", cap[1]);
            updateImage();
            return this;    
        }

        // alternative text
        function setAlternative(text){
            defaults.alt = text;
            console.log("Imagine: alternative text = " + text);
            updateImage();
            return this;    
        }

        // caption text
        function setStyle(style){
            defaults.style = style;
            var sty = defaults.style.split(":");
            image.css(sty[0], sty[1]);            
            updateImage();
            return this;    
        }


        //******* function to update thr image properties*******
        function updateImage(){
            if(defaults.placeholder){            
                image.attr("src", defaults.placeholder);                            
            }

            if(defaults.url){                
                image.attr('src', defaults.url);                                                    
            }                         
            
            // resize
            if(defaults.resize){
                var newSize = defaults.resize.split(",");
                image.attr('width', newSize[0]);
                image.attr('height', newSize[1]);                                                                        
            };
            // end of resize

            //  rotate image
            if(defaults.rotate){                                                           
            }

            // scale
            if(defaults.scale){                
                image.attr({ 
                    'width': image.width() * newScale,
                    'height': image.height() * newScale                   
                });                                                                               
            }            

            // circular shape
            if(defaults.circular){
                image.css('border-radius', '50%');
            }

            // circular shape
            if(defaults.caption){           
            }

            // style shape
            if(defaults.style){           
            }

            // alternative text
            if(defaults.alt){
                image.attr('alt', defaults.alt);
            }
        }
        
        // Public functions
        return {                            
            url: setURL,
            // placeholder: setPlaceholder,
            resize: setResize,
            rotate: setRotate,
            circular: setCircular,
            caption: setCaption,
            style: setStyle,
            alt: setAlternative,            
        };               
    }    
}(jQuery));