const { SSL_OP_NO_QUERY_MTU } = require('constants');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);
	num4 = Number(tokens[4]);

var answer

	if (mathSymbol === "+") {
		answer = num1 + num2 + num3 + num4
	} else if (mathSymbol == "-"){
		answer = num1 - num2 - num3 -num4
	} else if (mathSymbol == "*"){
		answer = num1 * num2 * num3 * num4
	} else if (mathSymbol == "/") {
		answer = num1 / num2 / num3 /num4
	} else if (mathSymbol == "sqrt") {
		answer = Math.sqrt(num1)
	};

	console.log(answer);

	// This line closes the connection to the command line interface.
	reader.close()

});
