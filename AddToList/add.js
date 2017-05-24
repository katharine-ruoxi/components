var item = [
  {
    "sku": "001",
    "heading": "Item 01",
    "img": "http://placehold.it/300x201",
    "thumb": "http://placehold.it/100x81",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, asperiores?",
    "price": "9.99"
  },
  {
    "sku": "020",
    "heading": "Item 02",
    "img": "http://placehold.it/300x202",
    "thumb": "http://placehold.it/100x82",
    "description": "Magni quaerat iusto officia a natus vero, suscipit assumenda, quas?",
    "price": "19.99"
  },
  {
    "sku": "992",
    "heading": "Item 03",
    "img": "http://placehold.it/300x203",
    "thumb": "http://placehold.it/100x83",
    "description": "Perferendis enim repellendus, deserunt consequatur provident aspernatur ullam at fugit.",
    "price": "29.99"
  }
];


var skuArray = $('.product-section').data('items').split(' ');



var itemList = '<ul class="items list-unstyled list-inline">';
$(document).ready(function () {
  $(".btn").click(function () {
    for (var i = 0; i < item.length; i++) {
      $("ul").append('<li class="item"><img src="' + item[0].thumb + '" alt="" /></li>');
    }
  });
});
