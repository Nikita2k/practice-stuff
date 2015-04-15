// P is a whole square if it is a square of some integer
// P = Q**2
// return the number of whole squares within A, B interval

function solution(A, B) {
	var wholeSquares = 0;
	for(var i = A; i <= B; i++){
		if(Math.sqrt(i) % 1 === 0){
			wholeSquares++;
		}
	}
	return wholeSquares;
}

console.log(solution(4, 17))