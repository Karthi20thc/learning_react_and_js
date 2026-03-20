def solution(mystr: str) -> str:

    obj = {}
    for i, ch in enumerate(mystr):
        
        if ch not in obj:
            obj[ch] = 1
        else:
            obj[ch] = obj[ch] + 1

    # return obj

    for i, (k, v) in enumerate(obj.items()):
        print(k)


input =  "hello"
print(solution(input))