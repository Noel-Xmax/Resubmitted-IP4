function PizzaCost(toppings, size){
  this.toppings = toppings,
  this.size = size
}
PizzaCost.prototype.toppingsCost = function(){
    if(this.toppings.length != 0){
      var toppingPrice = this.toppings.length * 800 + 150;
      return toppingPrice;
    }else {
      alert("please choose your Toppings !!")
    }
  }

  PizzaCost.prototype.sizeCost = function(){
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
    var inputtedBurger = $("#burger").val();
    var inputtedNoToppings = parseInt($("#noToppings").val());
    var toppingArray = [];
    $("input:checkbox[name=toppingCheck]:checked").each(function(){
     var inputtedToppings = $(this).val();
     toppingArray.push(inputtedToppings);
     $("#displayToppings").text(inputtedToppings + ",");
   });

   var pizzaSized =$("input:radio[name=sizePizza]:checked").val();
   $("#displayBurger").text(inputtedBurger);
   $("#displaySize").text(pizzaSized);


   PizzaCost = new PizzaCost(toppingArray,pizzaSized);

   var toppingBasedAmt = PizzaCost.toppingsCost();
   var sizeBasedAmt = PizzaCost.sizeCost();
   PizzaCost.calculateCost(toppingBasedAmt, sizeBasedAmt);
  });
});
$("#address1").click(function(){
  alert("We are happy to serve you to your preferred location, This attracts a delivery Charge of Ksh. 100.00");
    });

    $('.item1').click(function(){
      $(".col-md-4").toggle();
      $("descr").toggle();
    });
    $('.item2').click(function(){
      $("#c1,#c2,#c3").toggle();
    });
    $('.item3').click(function(){
      $("#t1,#t2,#t3,#t4,#t5,#t6,#t7").toggle();
    });
    $('.item4').click(function(){
      $("#col-md-3").toggle();
    });
    $('#men').click(function(){
      $(".card-menu").slideDown();
    });
    $('#sz').click(function(){
      $(".card-sizes").slideDown();
    });
    $('#prz').click(function(){
      $(".card-crusts,.card-toppings").toggle();
    });
    $('#active').click(function(){
      $(".card-menu,.card-crusts,.card-toppings,.item4,.card-sizes,.card-prices").toggle();
    });
    