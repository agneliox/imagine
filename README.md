# imagine
Smooth, easy and quick way to manage images when building your awesome web apps.
The "imagine" jQuery plugin is designed for handling image properties with specific functions for setting the image source (url), resize, rotate, caption, custom style, alternative text...

The plugin allows you to apply these properties to an image element with a concise and chainable syntax.
For instance, if the image has an ID of `image` you can use 

```$("#image")
.imagine()
.url("image.jpg")
.resize("440,440")
.caption("Figure 1 Imagine, center");
```

to set the image URL, size, and caption text including the text aligment. 
The plugin provides flexibility and ease of use for managing image attributes in a fluent and jQuery-like manner.

## Implemented optios
1. url - allows you to point to your umage asset. eg: `url("img.jpg")`
2. resize - to set the size of the image in pixels. eg: `resize("300,300")` . if set as `resize("300")`  the height size will be based on the width size.
3. rotate - rotates your image based on the angle provided in degrees. eg: `rotate(45)`.
4. caption - eg: 'caption("caption text, text-alignment") . Text alignments: 'left, center, right`
5. alt - text appears when image fails to load eg:  `alt("Alternative text")`
6. style - for custom CSS style 

## How to use

Create a `<div>` ang give it an `id` or clase name. eg: ```<div id="image" class="image">```

apply the plugin by  `id`

```$("#image").imaagine().url("#") ```

or class name

```$(".image").imaagine().url("#") ```


The rendered HTML will be:

```
<div id="image" class="image">
  <img src="#" />
</div>
```

The rest of the options can be nested to each other like:

```
$("#image")
.imagine()
.url("i[mage.jpg](https://ichef.bbci.co.uk/news/800/cpsprodpb/17C16/production/_117320379_giocondacerca.jpg)")
.resize("440,440")
.rotate(45)
.caption("Fiig. 1 Future is not like it used to be!, center")
.style("border: 3px solid red")
.alt("Alternative");
```

Rendered HTML code:
```
<div class="image">
        <img
          src="https://ichef.bbci.co.uk/news/800/cpsprodpb/17C16/production/_117320379_giocondacerca.jpg"
          alt="Alternative"
          width="440" 
          height="440"
          style="transform: rotate(45deg); border-radius: 50%; border: 3px solid red;"
        >
    <p
      class="caption-text"
      style="text-align: left;" >

      Fig. 1 Future is not like it used to be!

    </p>
</div>
```
