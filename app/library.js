module.exports = {
	computeAverage: function(num1, num2, num3){
		var avr_nums = 0;
		avr_nums = (num1 + num2 + num3) / 3;
		return avr_nums;

	},
	
	computeFactorial: function(number){
		var factorial = 1;
		for(var c = 1;c <= number; c++){
			factorial = factorial * c;
		}
		
		return factorial;
	},
	
	convertTempCtoF: function(temperature) {		  
		var fahrenheit = 0;
		fahrenheit = (9/5) * temperature + 32;
		return fahrenheit;			
	},
	
	convertTempFtoC: function(temperature) {
  
		var celsius = 0;
		celsius = (5/9) * (temperature - 32);
		return celsius;
    
	}
	

}