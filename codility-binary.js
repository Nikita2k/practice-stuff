function solution(M, N) {
    var K = M.toString(2);
    var L = N.toString(2);
    var lenDiff = 0;

    // zero padding
    if(K.length > L.length){
    	lenDiff = K.length - L.length;
    	zeros = Array(lenDiff + 1).join('0');
    	L = zeros + L;
    } else {
    	lenDiff = L.length - K.length;
    	zeros = Array(lenDiff + 1).join('0');
    	K = zeros + K;
    }

    return L;
}

console.log(solution(21, 12))