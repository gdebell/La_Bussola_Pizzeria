$(function() {
  console.log("globalvariables.js is working!");
});

var pizzaCost = 0;
var tax=0;
var taxDisplay =0;
var deliveryFee=0;
var tip= 0;
var tipDisplay=0;
var pizzaTotal=0;
var pizzaTotalDisplay=0;

var PizzaOrder= {
  size:'',
  crust: '',
  sauce:'',
  toppings: [],
  otherOptions: [],
  delivery: false,
  deliveryInfo: {},
};
