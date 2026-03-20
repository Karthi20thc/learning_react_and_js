def solution(mystr: str) -> str:

    obj = {}
    for i, ch in enumerate(mystr):
        
        if ch not in obj:
            obj[ch] = 1
        else:
            obj[ch] = obj[ch] + 1

    return obj


input =  "hello"
print(solution(input))