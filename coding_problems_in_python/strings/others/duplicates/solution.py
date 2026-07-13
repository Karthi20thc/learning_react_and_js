def solution(mystr: str) -> str:

    obj = {}
    uniqueStr = ""
    for i, ch in enumerate(mystr):
        
        if ch not in obj:
            obj[ch] = 1
        else:
            obj[ch] = obj[ch] + 1

    # return obj {'h': 1, 'e': 1, 'l': 2, 'o': 1}

    for i, (k, v) in enumerate(obj.items()):
            uniqueStr = uniqueStr + k

    return uniqueStr # helo

input =  "hello"
print(solution(input))