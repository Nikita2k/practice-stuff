# returns the minimal value that occurs in both arrays
# if there is no such value return -1

def solution(A, B):
    max = A if len(A) > len(B) else B
    min = B if len(A) > len(B) else A

    commons = []

    for x in max:
    	for y in min:
    		if x == y:
    			commons.append(x)

    if len(commons) == 0:
    	return -1

    commons.sort()
    return commons[0]



# print solution([1,10,21,13,4,6], [2,3,10,1, 42,10])
print solution([2,2], [3,3])