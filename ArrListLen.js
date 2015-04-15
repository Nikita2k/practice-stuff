// A non-empty zero-indexed array A consisting of N integers is given.
// Array A represents a linked list. A list is constructed from this array as follows:
// the first node (the head) is located at index 0;
// the value of a node located at index K is A[K];
// the successor of a node located at index K is located at index A[K];
// if the value of a node is −1 then it is the last node of the list.

function solution(A) {
    var construct = [A[0]];
    var count = 1;
    var i = 0;
    while(true){
	    if(construct[i] != -1){
	    	construct.push(A[construct[i]]);
	    	count++;
	    } else {
	    	break;
	    }
	    i++;
    }
    return count;
}