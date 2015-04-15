// codility exercise

// A non-empty zero-indexed array A consisting of N integers is given.
// You can perform a single swap operation in array A. This operation takes two indices I and J, such that 0 ≤ I ≤ J < N, and exchanges the values of A[I] and A[J].
// The goal is to check whether array A can be sorted into non-decreasing order by performing at most one swap operation.

function solution(A) {
	var outOfOrder = [];
	var greatest = 0;
	for(var i = 0; i < A.length; i++){
		if (A[i] > greatest){
			greatest = A[i];
		}

		if(A[i] > A[i + 1]){
			outOfOrder.push({value: A[i], index: i });
			A.splice(i,1);
			i--;
		}
	}

	if(outOfOrder.length > 2){
		// too many elements out of order
		return false;
	} else if(outOfOrder.length == 1 && greatest == outOfOrder[0].value){
		// one element out of order and it is the largest
		return false;
	}

	return true;
}

console.log(solution([1,3,5,3,7]));	// true
console.log(solution([1,3,5,3,4]));	// false
console.log(solution([1,10,3,4,2]));	// true
console.log(solution([11,10,3,4,2]));	// false
console.log(solution([1,1,2,3,9,5,4]));	// true
console.log(solution([1,2,3,4])); // true