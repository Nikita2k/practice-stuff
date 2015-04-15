// returns the minimal value that occurs in both arrays
// if there is no such value return -1

function solution(A,B){
	var commons = [];

	var shortest = (A.length > B.length)? B : A;
	var longest = (B.length < A.length)? A : B;

	for(var i = 0; i < shortest.length; i++){
		for(var j = 0; j < longest.length; j++){

			if(longest[j] == shortest[i]){
				commons.push(shortest[i]);
			}
		}
	}

	if(commons.length === 0)
		return -1;

	// get smallest in common
	return commons.sort(function(a,b){ return a - b; })[0];
}

a = solution([1,1,1,1,1], [4,2,5,3,2]);
console.log(a);

b = solution([2,10,3], [2,3,3,10]);
console.log(b);

c = solution([1,3,2,1], [4,2,5,3,2]);
console.log(a);