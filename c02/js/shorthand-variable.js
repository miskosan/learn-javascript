var price = 5;
var quantity = 14;
var total = price * quantity;

var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

var price = 5,
  quantity = 14;
var total = price * quantity;

// Write total into the element id of cost
var el = document.getElementById("cost");
el.textContent = "$" + total;
