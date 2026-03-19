def isAnagram(mystr1: str, mystr2: str)-> bool:

    if(len(mystr1) != len(mystr2)): return False

    return list(mystr1.lower())


s = "anagram"
t = "nagaram"
print(isAnagram(s, t))

# mystr1.lower()  anagram

#  .split(",") only splits where comma exists
# mystr1.lower().split() ['anagram']

# list(mystr1.lower()) ['a', 'n', 'a', 'g', 'r', 'a', 'm']