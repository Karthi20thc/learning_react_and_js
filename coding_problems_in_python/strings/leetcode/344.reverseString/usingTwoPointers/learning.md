You defined a **class method**, but you are calling `solution()` which does not exist. Also, your method inside the class is missing `self`.

There are **two correct ways** to call it.

---

# 1️⃣ Best way (create object of the class)

Add `self` to the method:

```python
class Solution:

    def reverseString(self, arr):

        leftIndex = 0
        rightIndex = len(arr) - 1

        while leftIndex < rightIndex:
            temp = arr[leftIndex]
            arr[leftIndex] = arr[rightIndex]
            arr[rightIndex] = temp

            leftIndex += 1
            rightIndex -= 1

        return arr


input_arr = ["h","e","l","l","o"]

obj = Solution()                # create object
print(obj.reverseString(input_arr))  # call method
```

Output:

```
['o', 'l', 'l', 'e', 'h']
```

---

# 2️⃣ Using `@staticmethod` (no object needed)

If the method does **not use `self`**, make it static.

```python
class Solution:

    @staticmethod
    def reverseString(arr):

        leftIndex = 0
        rightIndex = len(arr) - 1

        while leftIndex < rightIndex:
            temp = arr[leftIndex]
            arr[leftIndex] = arr[rightIndex]
            arr[rightIndex] = temp

            leftIndex += 1
            rightIndex -= 1

        return arr


input_arr = ["h","e","l","l","o"]

print(Solution.reverseString(input_arr))
```

---

# Why your code failed

You wrote:

```python
print(solution(input))
```

Problems:

1. `solution` is not defined (capitalization matters)
2. The method is inside a class
3. Method missing `self`

---

# Quick rule for Python classes

| Method type                     | How to call      |
| ------------------------------- | ---------------- |
| Instance method (`self`)        | `obj.method()`   |
| Static method (`@staticmethod`) | `Class.method()` |
| Class method (`@classmethod`)   | `Class.method()` |

---

If you want, I can also show you a **clean coding pattern used in LeetCode-style problems** where class methods are written so they work exactly like coding interview platforms expect.
