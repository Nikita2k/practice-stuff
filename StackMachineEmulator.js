// codility exercise

// A stack machine is a simple system that performs arithmetic operations on 
// an input string of numbers and operators

function solution(items) {
	var stack = [],
		result;

	for(var i = 0; i < items.length; i++){
		if (parseInt(items[i]) || items[i] == '0'){
			stack.push(parseInt(items[i]));
		} else if (items[i] === '*'){
			var times1 = stack.pop();
			var times2 = stack.pop();
			if(isNaN(times1) || isNaN(times2)){
				return -1
			}
			result = times1 * times2;
			stack.push(result);
		} else if (items[i] === '+'){
			var add1 = stack.pop();
			var add2 = stack.pop();
			if(isNaN(add1) || isNaN(add2)){
				return -1
			}
			result = add1 + add2;
			stack.push(result);
		}
	}

	// return top item in stack
	return stack[stack.length - 1];

}

console.log(solution("13+62*7+*")); // 76
console.log(solution("11++")); // -1
console.log(solution("11+22+33*+*"));	// 26
var s = solution("43567810294**+1**++12++*");	// 540
console.log(s);
console.log(solution('1+'));	// -1



