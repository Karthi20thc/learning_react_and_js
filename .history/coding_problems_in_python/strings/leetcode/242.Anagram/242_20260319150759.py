def isAnagram(mystr1: str, mystr2: str)-> bool:

    if(len(mystr1) != len(mystr2)): return False

    return True


s = "anagram"
t = "nagaram"
print(isAnagram(s, t))

