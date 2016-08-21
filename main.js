$(function() {
  console.log("main.js is working!");
});

$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    getOrder();
    baseCost(PizzaOrder.size);
    sauceCost(PizzaOrder.sauce);
    toppingCost(PizzaOrder.toppings);
    toppingFancyCost(PizzaOrder.toppings);
    optionsCost(PizzaOrder.otherOptions);
    calculateTax(pizzaCost);
    deliveryCost(PizzaOrder.delivery);
    addTip();
    customerInformation();
    total();
    $('.subtotal, .tax, .delivery, .suggestedTip, .total').empty();
    $('.subtotal').append('<p>Subtotal: $ ' + pizzaCost + '</p>');
    $('.tax').append('<p>Tax (8%): $ ' + taxDisplay + '</p>');
    $('.delivery').append('<p>Delivery: $ ' + deliveryFee + '</p>');
    $('.suggestedTip').append('<p>Suggeted Tip: (15%) $ ' + tipDisplay + '</p>');
    $('.total').append('<p>Total: $ ' + pizzaTotalDisplay + '</p>');
  });
});
