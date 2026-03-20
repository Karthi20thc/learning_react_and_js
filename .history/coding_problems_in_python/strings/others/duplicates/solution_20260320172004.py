def solution(mystr: str) -> str:

    obj = {}
    uniqueStr = ""
    for i, ch in enumerate(mystr):
        
        if ch not in obj:
            obj[ch] = 1
        else:
            obj[ch] = obj[ch] + 1

    # return obj

    for i, (k, v) in enumerate(obj.items()):
        if(v == 1):
            uniqueStr = uniqueStr + k

    return uniqueStr

input =  "hello"
print(solution(input))