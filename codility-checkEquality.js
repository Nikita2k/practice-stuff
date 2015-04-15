// score
//=======
// 100% correctness
// 20% performance


function solution(A) {
	var samesies = [];

	// n**2 time complexity
	A.forEach(function(e, i, list){
		for(var j = 0; j < i; j++){
			if(list[j] === list[i]){
				samesies.push(j+','+i)
			}
		}
	});

	if(samesies.length > 1000000000)
		return 1000000000;

	return samesies.length;

}

var a = solution([3,5,6,3,3,5]);
console.log(a);