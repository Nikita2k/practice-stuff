// S can be divided into words by splitting it at the spaces and removing them. We want to reverse every word in S.
// For example, given S = "we test coders", there are three words: "we", "test" and "coders". Reversing the words gives "ew", "tset" and "sredoc".


function solution(S) {
    S = S.split(' ');
    var output = [];
    S.forEach(function(w){
        output.push(w.split('').reverse().join(''));
    });
    return output.join(' ');
}