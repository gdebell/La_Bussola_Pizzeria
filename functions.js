$(function() {
  console.log("functions.js is working!");
});


function getOrder() {
  PizzaOrder.size = ($('input:checkbox[name="size"]:checked').val());
  PizzaOrder.crust= ($('input:checkbox[name="crust"]:checked').val());
  PizzaOrder.sauce= ($('input:checkbox[name="sauce"]:checked').val());
  PizzaOrder.toppings= ($('input:checkbox[name="toppings"]:checked').map(function(index, el) {
    return el.value;}));
  PizzaOrder.otherOptions = ($('input:checkbox[name="otherOptions"]:checked').map(function(index, el){
    return el.value;}));
  PizzaOrder.delivery= ($('input:checkbox[name="delivery"]:checked').val());
  return PizzaOrder;
}

function baseCost() {
  if(PizzaOrder.size === 'small') {
    pizzaCost += 5.00;
  } else if (PizzaOrder.size === 'medium') {
    pizzaCost += 10.00;
  } else if (PizzaOrder.size === 'large') {
    pizzaCost += 15.00;
  } else {
    pizzaCost += 0.00;
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

function toppingFancyCost () {
    PizzaOrder.toppings.map(function (i, val){
    if (val === 'Bacon') {
      pizzaCost += 0.5;
    }
    if (val === 'Chicken') {
      pizzaCost += 0.5;
    }
  });
}

function optionsCost() {
  PizzaOrder.otherOptions.map(function(i, val){
    if(val === 'Extra Cheese') {
      return pizzaCost += 1.00;
    }
    if(val === 'Bread Sticks') {
      return pizzaCost += 5.00;
    }
  });
}

function calculateTax(input) {
  tax =  input * 0.08;
  taxDisplay = tax.toFixed(2);
}

function deliveryCost () {
  if (PizzaOrder.delivery === 'true') {
    deliveryFee = 5.00;
  } else {
    deliveryFee = 0.00;
  }
}

function toggleAble(checkbox) {
    var toggle = document.getElementById("fieldset");
      if($(toggle).prop('disabled')=== true) {
          ($(toggle).prop('disabled', false));
      } else {
          ($(toggle).prop('disabled', true));
      }
}

function addTip () {
  tip = pizzaCost * 0.15;
  tipDisplay = tip.toFixed(2);
}

function total() {
  pizzaTotal = (pizzaCost + tax + deliveryFee + tip);
  pizzaTotalDisplay = pizzaTotal.toFixed(2);
}

function customerInformation() {
    PizzaOrder.deliveryInfo = {
      name: '',
      address: '',
      phone: '',
      email: '',
      driverNote: ''
    };
  PizzaOrder.deliveryInfo.name= (($('#name').val()));
  PizzaOrder.deliveryInfo.address=(($('#address').val()));
  PizzaOrder.deliveryInfo.phone=(($('#phone').val()));
  PizzaOrder.deliveryInfo.email=(($('#email').val()));
  PizzaOrder.deliveryInfo.driverNote=(($('#driverNote').val()));
}
