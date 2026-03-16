def solution(arr):

    # two pointers
    leftIndex = 0
    rightIndex = len(arr) -1

    while(leftIndex < rightIndex):
        temp = arr[leftIndex]

        arr[leftIndex] =  arr[rightIndex]

        arr[rightIndex] = temp

        leftIndex++
        rightIndex-- 
    
    return arr       






input = ["h","e","l","l","o"]
print(solution(input))