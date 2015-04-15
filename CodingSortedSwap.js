// codility exercise

// A non-empty zero-indexed array A consisting of N integers is given.
// You can perform a single swap operation in array A. This operation takes two indices I and J, 
// such that 0 ≤ I ≤ J < N, and exchanges the values of A[I] and A[J].
// The goal is to check whether array A can be sorted into non-decreasing order by performing at most one swap operation.

var swap = function(items, firstIndex, secondIndex){
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
};

function solution(A) {
	var sortedCopy = A.concat().sort(function(a,b){ return a - b; });
	var swapCount = 0;
	var firstSwapFound = false;
	var elementToSwap;
	var swapFirstIndex;
	var swapSecondIndex;

	while(swapCount <= 2){

		for(var i = 0; i < A.length; i++){

			if(A[i] > A[i + 1] && !firstSwapFound){
				elementToSwap = A[i];
				swapFirstIndex = i;
				firstSwapFound = true;
			}	

			// find ideal swap condidate
			if(A[i] >= A[swapFirstIndex - 1] && A[i] <= A[swapFirstIndex + 1]){
				swapSecondIndex = i;
			}	
		}

		// make the swap
		swap(A, swapFirstIndex, swapSecondIndex);
		swapCount++;

		// is array sorted?
		if(A.join('') === sortedCopy.join('')){
			return true;
		}
		
	}

	return false;
}

console.log(solution([1,3,5,3,7]));	// true
console.log(solution([1,10,3,4,2]));	// true
console.log(solution([1,1,2,3,9,5,4]));	// true
console.log(solution([1,2,3,4])); // true
console.log(solution([11,10,3,4,2]));	// false
console.log(solution([1,3,5,3,4]));	// false