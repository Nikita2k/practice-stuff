
function solution(N){
	var numString = N.toString();

	var result = numString.split('').sort().reverse().join('');

	result = parseInt(result);
	if(result > 100000000){
		return -1
	} else {
		return result;
	}
}

var s = solution(328432)
console.log(s)