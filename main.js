$(function() {
  console.log("Working!");
});



$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    console.log('ready to go butter cup!');
    getOrder();
    baseCost(PizzaOrder.size);
    sauceCost(PizzaOrder.sauce);
    toppingCost(PizzaOrder.toppings);
    toppingFancyCost(PizzaOrder.toppings);
    console.log(pizzaCost);
    console.log(PizzaOrder);
  });
});


var PizzaOrder= {
  size:'',
  crust: '',
  sauce:'',
  toppings: [],
  otherOptions: [],
  pickUp: true,
  deliveryInfo: getDeliveryInfo(),
  //totalPrice: getPrice()
};

var pizzaCost = 0;

function getOrder() {
  PizzaOrder.size = ($('input:checkbox[name="size"]:checked').val());
  PizzaOrder.crust= ($('input:checkbox[name="crust"]:checked').val());
  PizzaOrder.sauce= ($('input:checkbox[name="sauce"]:checked').val());
  PizzaOrder.toppings= ($('input:checkbox[name="toppings"]:checked').map(function(index, el) {
    return el.value;}));
  PizzaOrder.otherOptions = ($('input:checkbox[name="otherOptions"]:checked').val());
  PizzaOrder.pickUp= ($('input:checkbox[name="pickup"]:checked').val());
  //make a function map into other option
  //add deliveryInfo
  //add totalPrice
  return PizzaOrder;
}


function getDeliveryInfo () {
}


function baseCost() {
  if(PizzaOrder.size === 'small') {
    pizzaCost += 5.00;
  } else if (PizzaOrder.size === 'medium') {
    pizzaCost += 10.00;
  } else {
    pizzaCost += 15.00;
  }
  return pizzaCost;
}

function sauceCost() {
  if(PizzaOrder.sauce === 'Creamy Cream') {
    return pizzaCost += 1.50;
  }
}

function toppingCost() {
  var topCost = (PizzaOrder.toppings.length) * 0.75;
  return pizzaCost += topCost;
}


function toppingFancyCost() {
  for(var i= 0; i < PizzaOrder.toppings.length; i++) {
    if(PizzaOrder.toppings[i] === 'Bacon') {
      return pizzaCost += 0.5;
    }
    if(PizzaOrder.toppings[i] === 'Chicken') {
      return pizzaCost += 0.5;
    }
  }
}
