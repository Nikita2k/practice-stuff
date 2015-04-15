// codility exercise

// A non-empty zero-indexed array A consisting of N integers is given.
// You can perform a single swap operation in array A. This operation takes two indices I and J, such that 0 ≤ I ≤ J < N, and exchanges the values of A[I] and A[J].
// The goal is to check whether array A can be sorted into non-decreasing order by performing at most one swap operation.

function solution(A) {
	var swapCount = 0;
	var swap = function(items, firstIndex, secondIndex){
		var temp = items[firstIndex];
		items[firstIndex] = items[secondIndex];
		items[secondIndex] = temp;
	};

	for(var i = 0; i < A.length; i++){
		while(swapCount <= 2){
			for(var j = 0; j < i; j++){
				if(A[i] > A[j]){
					swap(A, i, j);
					swapCount++;
				}
			}
		}
	}

	if(swapCount > 2)
		return false;
	else
		return true;
}

console.log(solution([1,3,5,3,7]));	// true
console.log(solution([1,3,5,3,4]));	// false
console.log(solution([1,10,3,4,2]));	// true
console.log(solution([11,10,3,4,2]));	// false
console.log(solution([1,1,2,3,9,5,4]));	// true
console.log(solution([1,2,3,4])); // true