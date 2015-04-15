// sum of elements in rows above the Pth row is
// equal to sum of elements in rows beneath Pth row

// sum of elements in columns to left is
// equal to sum of elements in columns to right

var exampleMatrix1 = [
	[2,7,5],
	[3,1,1],
	[2,1,-7],
	[0,2,1],
	[1,6,8]
];

var oneRow = [
	[2,7,2]
];

// returns sum of rows and columns
function getTotals(N){
	var rowTotals = [];
	var columnTotals = [];

	for(var k = 0; k < N[0].length; k++){
		// populate empty array
		columnTotals[k] = 0;
	}
	
	for(var i = 0; i < N.length; i++){
		rowTotals[i] = 0;
		for(var j = 0; j < N[0].length; j++){
			var element = N[i][j];
			rowTotals[i] += element;
			columnTotals[j] += element;
		}
	}

	return {
		rowTotals: rowTotals,
		columnTotals: columnTotals
	};
}

// method to check left and right of index are equal
Array.prototype.isBalancedAt = function(index){
	var self = this;
	var left = self.slice(0, index);
	var right = self.slice(index + 1);

	left = left.reduce(function(prev, curr){
		return prev + curr
	}, 0);
	right = right.reduce(function(prev, curr){
		return prev + curr
	}, 0);

	return (left === right);
};

function solution(N){
	var rowTotals = getTotals(N).rowTotals;
	var columnTotals = getTotals(N).columnTotals;

	var rowsWithBalance = [];
	for(var i = 0; i < rowTotals.length; i++){
		if(rowTotals.isBalancedAt(i)){
			rowsWithBalance.push(i);
		}
	}

	var columnsWithBalance = [];
	for(var j = 0; j < columnTotals.length; j++){
		if(columnTotals.isBalancedAt(j)){
			columnsWithBalance.push(j);
		}
	}

	if(columnsWithBalance.length >= 1 && rowsWithBalance.length >= 1){
		return (columnsWithBalance.length > rowsWithBalance.length) ? columnsWithBalance.length : rowsWithBalance.length;
	} else {
		return -1;
	}
}


var a = solution(oneRow);
console.log(a);