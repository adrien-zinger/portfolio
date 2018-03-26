var domParser = new DOMParser();
function getImageNode(img) {
    return domParser.parseFromString('<figure xmlns="http://www.w3.org/1999/xhtml" id="img' + img.id
    + '" class="js-item img-item col-3@sm col-3@xs" category="' + img.category + '" itemscope="" itemprop="associatedMedia" itemtype="http://schema.org/ImageObject">\
<a class="aspect aspect--16x9" href="image/' + img.url + '" itemprop="contentUrl" data-size="' + img.size + '">\
    <img src="image/small/' + img.url + '" itemprop="thumbnail" />\
</a><figcaption>' + img.description + '</figcaption>\
</figure>', 'text/xml').firstChild;
}

var images = [{"id":1,"description":"Evie","size":"2659x3840","url":"evie.jpg","category":"Category 1"}];