// Available coin values //
var coins = [200, 100, 50, 20, 10, 5, 2, 1];

// Triggered when the user hits a key
function calculateCoins(e){	
	var keycode; 
	keycode = e.keyCode;
	
	// Calculate If return key is pressed.
	if(keycode === 13) {
		var y = document.getElementById("amount").value;
		y = y.trim();
		var output = validateInput(y);
		//set result
		var out = document.getElementById("result");
		out.setAttribute("value", output);
	}
}

// To validate the give input is valid or not
function validateInput(x){
	// Expression to validate the value entered by the user
	var reg = /^(\u00A3)?([0-9\.]+)p?$/;
	var match = x.match(reg);
	
	// If the regular expression returns true, the value entered is valid.
	if (match) {		
		if(x.indexOf("£") > -1 || x.indexOf(".") > -1) {
			x = x.replace(/[^\d.-]/g, ''); 
			x = parseFloat(x).toFixed(2);
			x = (x * 100).toFixed(0);
		} 
		else {
			x = x.replace(/[^\d.-]/g, '');
			x = parseFloat(x).toFixed(2);
		}
		// calculate the number of coins present in the given value
		var coinValues = calculate(x);	
		
		return formatOutput(coinValues);
	} 	
	return "Invalid Input !";		
}

// Calculate the pounds and pennies in the given sum
function calculate(x){
	var o = "";
	var coinValues = [];
	var calc;

	// Loop through each element of the array, the coins. 
	for (var i = 0; i < coins.length; i++) {
		calc = Math.floor(x / coins[i]);
		// Add the remainder to the value.
		x = x % coins[i];
		coinValues[i] = calc;
	}
	console.log (coinValues);
	return coinValues;
}

// Format the output
function formatOutput(coinValues){
	var output = "";
	for(var i = 0; i < coinValues.length; i++) {
		var value = "";
		if(i == 0 && coinValues[i] != 0) {
			value = coinValues[i] + " x £2, "; 
		} else if(i == 1 && coinValues[i] != 0){
			value = coinValues[i] + " x £1, ";  
		} else if(i== 2 && coinValues[i] != 0){
			value = coinValues[i]+ " x 50p, "; 
		} else if(i == 3 && coinValues[i] != 0){
			value = coinValues[i]+ " x 20p, "; 
		} else if(i == 4 && coinValues[i] != 0){
			value = coinValues[i]+ " x 10p, "; 
		} else if(i== 5 && coinValues[i] != 0){
			value = coinValues[i]+ " x 5p, ";   
		} else if(i == 6 && coinValues[i] != 0){
			value = coinValues[i]+ " x 2p, ";  
		} else if(i == 7 && coinValues[i] != 0){
			value = coinValues[i]+ " x 1p, "; 
		}
		output += value;
	}	
	output = output.trim();
	console.log (output);

	return  output.substring(0, output.length-1);
}
	
