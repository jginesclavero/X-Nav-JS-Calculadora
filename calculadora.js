
function readComand(s){
	switch (s) {
		case "1":
			var input = document.getElementById("display");
         	input.innerHTML = input.innerHTML + "1";
			break;
		case "0":
			var input = document.getElementById("display");
         	input.innerHTML = input.innerHTML + "0";
			break;
		case "+":
			input = document.getElementById("display");
			op1 = document.getElementById("dataBase");
			op1.innerHTML = input.innerHTML;
    		input.innerHTML = "";
			break;
		case "=":
			input = document.getElementById("display");
			op1 = document.getElementById("dataBase");
         	input.innerHTML = binaryAdd(op1.innerHTML,input.innerHTML);
			break;
		case "clear":
			input = document.getElementById("display");
         	input.innerHTML = "";
         	document.getElementById("dataBase").innerHTML = "";
			break;
		case "<":
			input = document.getElementById("display");
			s = input.innerHTML;
         	input.innerHTML = s.slice(0,-1);
			break;
		default:
			var res = document.getElementById("display");
         	res.innerHTML = "Error en la entrada";
			break;
		}

};


function binaryAdd(op1,op2){
	var result = parseInt(op1,2) + parseInt(op2,2);
    return result.toString(2);
};