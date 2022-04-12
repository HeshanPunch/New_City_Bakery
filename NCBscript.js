// var xmlObj;
var xmlObj = new XMLHttpRequest();
var cakeSelection;
function sheetCakeForm(){
    //var xmlObj = new XMLHttpRequest();
    cakeSelection = "sheetCake"; // assign cake
    
    xmlObj.onreadystatechange = function(){
        if (xmlObj.readyState == 4 && xmlObj.status == 200) {
            document.getElementById("orderForm").innerHTML= xmlObj.responseText;
            
        }
    };
    
    xmlObj.open("GET", "SheetCake.html", true);
    xmlObj.send();
    
    
}

function roundCakeForm(){
    cakeSelection = "roundCake"; // assign cake
    
    xmlObj.onreadystatechange = function(){
        if (xmlObj.readyState == 4 && xmlObj.status == 200) {
            document.getElementById("orderForm").innerHTML= xmlObj.responseText;
            
        }
    };
    
    xmlObj.open("GET", "RoundCake.html", true);
    xmlObj.send();
    
    
}

function printToPage(){
    console.log("Line 36 printToPage()");
    const sheetCakePrice = 18.00;
    const minSheetArea = 900;
    const roundCakePrice = 15.00;
    const minRoundArea = 707;
    const cheesePrice = 5.00;
    const fruitAlmondsPrice = 7.00;
    const jamPrice = 4.00;
    var length;
    var width;
    var sheetLayers;
    var roundLayers;
    var radius;

    
    if (cakeSelection == "roundCake"){
        radius = document.getElementById("radius").value;
        roundLayers = document.getElementById("roundLayers").value;
    }else if (cakeSelection == "sheetCake"){
        length = document.getElementById("length").value;
        width = document.getElementById("width").value;
        sheetLayers = document.getElementById("sheetLayers").value;
    }
    
    var totalPrice = 0.00;
    var area = 0; 
    
    var cheese = document.getElementById("cheese");
    var fruitAlmonds = document.getElementById("fruitAlmonds");
    var jam = document.getElementById("jam");
    
    var message;
    
    // formatted like this (with the + in the front) for easy code readability
    document.getElementById("PrintCusInfo").innerHTML ="<br>" + (document.getElementById("firstName").value) + " " 
    + (document.getElementById("lastName").value) + "<br>" 
    + (document.getElementById("address").value) + "<br>" 
    + (document.getElementById("postalCode").value) + "<br>" 
    + (document.getElementById("tel").value) + "<br>"
    + (document.getElementById("email").value) + "<br>";
    
    
    console.log(cheese.checked); //testing
    /* for SHEET CAKE */
    if ( cakeSelection == "sheetCake"){
        var sheetCake = "Sheet Cake";
        area = length*width;
        totalPrice = sheetCakePrice + (0.02 * (area - minSheetArea));
        
        if (sheetLayers == 1){
            message = "Your Order:" + "<br>" + sheetCake + " " + length + "cm x " + width + "cm" + " with 1 layer " + "$" +  totalPrice.toFixed(2) + "<br>";
        }else if (sheetLayers >1){
            totalPrice = totalPrice + ((totalPrice * 0.5) * (sheetLayers-1));
            
            message = "Your Order:" + "<br>" + sheetCake + " "  + length + "cm x " + width + "cm" + " with " +  sheetLayers + " layers " + "$" +  totalPrice.toFixed(2) + "<br>";
            
        }
        
        if (cheese.checked){
            totalPrice += cheesePrice;
            //print
            message += "Cream Cheese Icing " + "$" + cheesePrice.toFixed(2) + "<br>";
            
            
        }
        if (fruitAlmonds.checked){
            totalPrice += fruitAlmondsPrice;
            //print
            message += "Fruit and Almond Topping " + "$" + fruitAlmondsPrice.toFixed(2) + "<br>";
        }
        if (jam.checked){
            totalPrice += jamPrice;
            //print
            message += "Fruit Jam Filling " + "$" + jamPrice.toFixed(2) + "<br>";
        }
        //console.log("Total is: " + totalPrice);
        console.log(message);
        message += "Total: " + "$" + totalPrice.toFixed(2) + "<br>";
        document.getElementById("orderSummary").innerHTML = message;
        
        /* for ROUND CAKE */
    } else if (cakeSelection == "roundCake"){

        var roundCake = "Round Cake";
        area = radius*radius*Math.PI;
        totalPrice = roundCakePrice + (0.02 * (area - minRoundArea));
        
        if (roundLayers == 1){
            message = "Your Order:" + "<br>" + roundCake + " " + radius + "cm " + " with 1 layer: " + "$" +  totalPrice.toFixed(2) + "<br>";
        }else if (roundLayers >1){
            totalPrice = totalPrice + ((totalPrice * 0.5) * (roundLayers-1));
            
            message = "Your Order:" + "<br>" + roundCake + " " + radius + "cm " + " with 1 layer: "  + "$" +  totalPrice.toFixed(2) + "<br>";
            
        }
        
        if (cheese.checked){
            totalPrice += cheesePrice;
            //print
            message += "Cream Cheese Icing " + "$" + cheesePrice.toFixed(2) + "<br>";
            
            
        }
        if (fruitAlmonds.checked){
            totalPrice += fruitAlmondsPrice;
            //print
            message += "Fruit and Almond Topping " + "$" + fruitAlmondsPrice.toFixed(2) + "<br>";
        }
        if (jam.checked){
            totalPrice += jamPrice;
            //print
            message += "Fruit Jam Filling " + "$" + jamPrice.toFixed(2) + "<br>";
        }
        
        message += "Total: " + "$" + totalPrice.toFixed(2) + "<br>";
        document.getElementById("orderSummary").innerHTML = message;

        
        
    }
    
    
    
    
    
}

