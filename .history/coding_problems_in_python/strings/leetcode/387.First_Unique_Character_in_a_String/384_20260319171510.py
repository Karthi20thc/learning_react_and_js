# Input: s = "loveleetcode"
# Output: 2

def solution(mystr: str) -> int:

    obj = {}

    for i, ch in enumerate(mystr):
        if( not obj[ch]):
            obj[ch] = 1
        else:
             obj[ch] =  obj[ch] + 1

    return obj
    


s = "loveleetcode"
print(solution(s))