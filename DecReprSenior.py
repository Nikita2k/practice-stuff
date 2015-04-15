
def solution(N):
	strNum = str(N)
	l = list(strNum)
	l.sort()
	l.reverse()
	return int(''.join(l))

print solution(12345654645)