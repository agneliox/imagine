$().ready(function(){
    // single image
    $('.image')
    .imagine()  
    .url('https://ichef.bbci.co.uk/news/800/cpsprodpb/17C16/production/_117320379_giocondacerca.jpg')            
    .resize("440,440") //resize("width, height") in pixels
    .rotate("45") // rotation angle in degrees            
    .circular(1)  // toggle to circular shape if true, expects a boolean value
    .caption("Figure. 1 Future is not like it used to be!, left") //caption text plus alignment parameter separated by comman         
    .alt('Alternative') // set alternative text in case image fails to load
    .style("border: 3px solid red"); // custom style     
});