def solution(mystr) -> bool:
    
    leftIndex: int = 0
    rightIndex: int = len(mystr)-1

    while(leftIndex < rightIndex):
        if(mystr[leftIndex] != mystr[rightIndex]):
            return False
        
        # leftIndex+=1
        leftIndex = leftIndex + 1
        rightIndex-=1

    return True

mystr = "pap"
print(solution(mystr))