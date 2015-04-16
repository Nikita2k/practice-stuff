
// rectilinear if edges are all parallel to coordinate axes
// specify coordinates of lower-left and upper-right corners

// lowerLeft:(K,L) upperRight:(M,N)
// lowerLeft:(P,Q) upperRight:(R,S)

// returns the area of the sum of the rectangles
// if rectangles intersect, intersection only counted once


function solution(K, L, M, N, P, Q, R, S) {
	var rect1 = {
		ll: [K,L],
		lr: [M,L],
		ur: [M,N],
		ul: [K,N]
	};
	var rect2 = {
		ll: [P,Q],
		lr: [R,Q],
		ur: [R,S],
		ul: [P,S]
	};

	// area of rect1 (L*W)
	var width1 = Math.abs(rect1.lr[0] - rect1.ll[0]);
	var length1 = Math.abs(rect1.ur[1] - rect1.lr[1]);
	var area1 = width1 * length1;

	// area of rect2
	var width2 = Math.abs(rect2.lr[0] - rect2.ll[0]);
	var length2 = Math.abs(rect2.ur[1] - rect2.lr[1]);
	var area2 = width2 * length2;

	var interLength = 0;
	var interWidth = 0

	// y area of intersection
	if(S > L && S < N){
		interLength = S - L;
	}
	if(S > N && N > Q){
		interLength = N - Q;
	}
	if(S < N && Q > L){
		interLength = S - Q;
	}
	if(S > N && Q < L){
		interLength = N - L;
	}

	// x area of intersection
	if(R > M && P < M){
		interWidth = M - P;
	}
	if(K < R && K > P){
		interWidth = R - K;
	}
	if(K < P && R < M){
		interWidth = R - P;
	}
	if(M < R && K > P){
		interWidth = M - K;
	}
	interArea = interLength * interWidth;

	var totalArea = area1 + area2 - interArea;

	return totalArea;

}


console.log(solution(-4,1,2,6,0,-1,4,3));