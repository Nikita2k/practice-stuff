// Two non-negative integers are called siblings if they can be obtained from each other by rearranging the digits of their decimal representations. For example, 123 and 213 are siblings. 535 and 355 are also siblings.
// A set consisting of a non-negative integer N and all of its siblings is called the family of N. For example, the family of 553 comprises three numbers: 355, 535 and 553

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