function PizzaCost(toppings, size){
  this.toppings = toppings,
  this.size = size
}
PizzaCost.prototype.toppingsBasedAmount = function(){
    if(this.toppings.length != 0){
      var toppingPrice = this.toppings.length *3;
      return toppingPrice;
    }else {
      alert("please choose your Toppings !!")
    }
  }

  PizzaCost.prototype.sizeBasedAmount = function(){
  if (this.size === "Small"){
    return 4;
  } else if(this.size === "Medium"){
    return 5;
  } else if(this.size === "Large"){
    return 6;
  } else {
    alert ("Please select a size that you would prefer");
  }
}

PizzaCost.prototype.calculateCost = function(tBasedAmt, sizeBasedAmt){
  var totalCost =tBasedAmt +sizeBasedAmt;
  $("#displayTotalCost").html(totalCost);
}

var PizzaCost;
$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    $("#show-Bill").show();
    var inputtedName = $("#name").val();
    var inputtedNoToppings = parseInt($("#noToppings").val());
    var toppingArray = [];
    $("input:checkbox[name=toppingCheck]:checked").each(function(){
     var inputtedToppings = $(this).val();
     toppingArray.push(inputtedToppings);
     $("#displayToppings").text(inputtedToppings + ",");
   });

   var inputtedSize =$("input:radio[name=sizePizza]:checked").val();
   $("#displayName").text(inputtedName);
   $("#displaySize").text(inputtedSize);

   PizzaCost = new PizzaCost(toppingArray,inputtedSize);

   var toppingBasedAmt = PizzaCost.toppingsBasedAmount();
   var sizeBasedAmt = PizzaCost.sizeBasedAmount();
   PizzaCost.calculateCost(toppingBasedAmt, sizeBasedAmt);
  });
});
$("#address1").click(function(){
  alert("We are happy to serve you to your preferred location, This attracts a delivery Charge of Ksh. 100.00");
    });