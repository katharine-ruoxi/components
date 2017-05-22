var item = [
  {
  "sku":"000",
  "heading": "Item 00",
  "img": "http://placehold.it/300x200",
  "thumb": "http://placehold.it/100x81",
  "description": "Item 01",
  "price": "6.99"
  },
  {
  "sku":"001",
  "heading": "Item 01",
  "img": "http://placehold.it/300x201",
  "thumb": "http://placehold.it/100x81",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, asperiores?",
  "price": "9.99"
  },
  {
  "sku":"020",
  "heading": "Item 02",
  "img": "http://placehold.it/300x202",
  "thumb": "http://placehold.it/100x82",
  "description": "Magni quaerat iusto officia a natus vero, suscipit assumenda, quas?",
  "price": "19.99"
  },
  {
  "sku":"992",
  "heading": "Item 03",
  "img": "http://placehold.it/300x203",
  "thumb": "http://placehold.it/100x83",
  "description": "Perferendis enim repellendus, deserunt consequatur provident aspernatur ullam at fugit.",
  "price": "29.99"
  }
];



var i = 0;
$('.btn-next').on('click', function() {
  i++;
  if (i === item.length) {
    i = 0;
  }
  injectItem(i);
  
});
$('.btn-prev').on('click', function() {
  i--;
  if (i < 0) {
    i = item.length -1;
  }
  injectItem(i);
});
function injectItem(i) {
  var thisItem = item[i]
  $('.heading').text(thisItem.heading);
  $('.product-img').attr('src', thisItem.img);
  $('.description').text(thisItem.description);
  $('.price').text(thisItem.price);  
}

