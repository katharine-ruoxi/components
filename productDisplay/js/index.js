var product = {
  "name": "melrose",
  "variants": [
    {
      "sku": 4422324,
      "color": "green",
      "price": 27.95,
      "link": "/melrose-sunglasses-4422324",
      "image": {
        "src": "/Melrose-4422324.jpg",
      }
    },
    {
      "sku": 4422319,
      "color": "pink",
      "price": 27.95,
      "link": "/melrose-sunglasses-4422319",
      "image": {
        "src": "/Melrose-4422319.jpg",
      }
    },
    {
      "sku": 4422323,
      "color": "clear",
      "price": 27.95,
      "link": "/melrose-sunglasses-4422323",
      "image": {
        "src": "/Melrose-4422323.jpg",
      }
    },
    {
      "sku": 4422316,
      "color": "blue",
      "price": 27.95,
      "link": "/melrose-sunglasses-4422316",
      "image": {
        "src": "/Melrose-4422316.jpg",
      }
    }
  ]
}

var items, _name, _color, _sku, _price, _link, _src;
var swatches = '';

for (var i = 0; i < product.variants.length; i++) {
  
  items = product.variants[i];
  _name = product.name;
  _color = items.color;
  _sku = items.sku;
  _price = items.price;
  _link = items.link;
  _src = items.image.src;
  
  swatches += '<li itemprop="'+_color+'" content="'+_color+'" data-sku="'+_sku+'"><img src="http://static.zennioptical.com/image/site/landing-pages/la-collection-2017'+_src+'" alt="'+_name+' '+_color+' swatch" title="pink"></li>';
  
}
//console.log(colors);
$('.product-swatches').empty().append(swatches);