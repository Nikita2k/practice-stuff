function solution(M, N) {

    var range = [];
    while(M <= N){
    	range.push(M);
    	M++
    }

    var zeroPad = function(bin, l){
    	l = l - bin.length;
    	return Array(l + 1).join('0') + bin;
    };

    var turnToBitString = function(intg){
    	return intg.toString(2);
    };

    var maxLength = turnToBitString(range[range.length - 1]).length;

    // make list of zero padded binary numbers with range M to N
    range.forEach(function(e, i, list){
    	list[i] = zeroPad(turnToBitString(e), maxLength);
    });

    // perform bitand
    var bitand = function(a, b){
    	var output = '';
	    for(var i = 0; i < a.length; i++){
	    	if(a[i] === '1' && b[i] === '1'){
	    		// add one to answer
	    		output += '1';
	    	} else {
	    		output += '0';
	    	}
	    }
	    return output;
	};

	return parseInt(bitand(range[0], range[range.length - 1]), 2);

}

console.log(solution(5, 7))