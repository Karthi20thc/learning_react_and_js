def isAnagram(mystr1: str, mystr2: str)-> bool:

    if(len(mystr1) != len(mystr2)): return False

    return sorted(list(mystr1.lower())) === sorted(list(mystr2.lower()))


s = "anagram"
t = "nagaram"
print(isAnagram(s, t))

# mystr1.lower()  anagram

#  .split(",") only splits where comma exists
# mystr1.lower().split() ['anagram']

# list(mystr1.lower()) ['a', 'n', 'a', 'g', 'r', 'a', 'm']
# sorted(list(mystr1.lower()))  ['a', 'a', 'a', 'g', 'm', 'n', 'r']