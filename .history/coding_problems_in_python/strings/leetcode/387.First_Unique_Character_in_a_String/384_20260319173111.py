# Input: s = "loveleetcode"
# Output: 2

def solution(mystr: str) -> int:

    obj = {}

    for i, ch in enumerate(mystr):
        if ch not in obj:
            obj[ch] = 1
        else:
             obj[ch] =  obj[ch] + 1

    # obj  {'l': 2, 'o': 2, 'v': 1, 'e': 4, 't': 1, 'c': 1, 'd': 1} 

    return obj  # {'l': 2, 'o': 2, 'v': 1, 'e': 4, 't': 1, 'c': 1, 'd': 1} 
    


s = "loveleetcode"
print(solution(s))