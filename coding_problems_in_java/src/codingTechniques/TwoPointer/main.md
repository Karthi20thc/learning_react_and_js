The **Two Pointer technique** is used when you want to **process elements from two positions in a sequence (usually an array or string)** to reduce time complexity from **O(n²) → O(n)**.

---

# 1️⃣ Basic Idea

You maintain **two indexes (pointers)**:

```text
left  → start of array/string
right → end of array/string
```

Then move them **based on a condition**.

---

# 2️⃣ Basic Template (Java)

```java
int left = 0;
int right = arr.length - 1;

while (left < right) {

    if (condition) {
        left++;
    } else {
        right--;
    }
}
```

---

# 3️⃣ Example 1 — Reverse a String

Problem: Reverse `"hello"`.

### Code

```java
public class Main {
    public static void main(String[] args) {

        char[] arr = "hello".toCharArray();

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }

        System.out.println(new String(arr));
    }
}
```

### Output

```
olleh
```

---

# 4️⃣ Example 2 — Check Palindrome

Problem: Check if `"madam"` is palindrome.

```java
public static boolean isPalindrome(String str) {

    int left = 0;
    int right = str.length() - 1;

    while (left < right) {

        if (str.charAt(left) != str.charAt(right)) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
```

---

# 5️⃣ Example 3 — Two Sum (Sorted Array)

LeetCode problem.

```java
public int[] twoSum(int[] arr, int target) {

    int left = 0;
    int right = arr.length - 1;

    while (left < right) {

        int sum = arr[left] + arr[right];

        if (sum == target) {
            return new int[]{left, right};
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return new int[]{};
}
```

---

# 6️⃣ Types of Two Pointer Patterns

### 1️⃣ Opposite direction

```text
left → start
right → end
```

Used for:

* Palindrome
* Reverse string
* Two sum sorted

---

### 2️⃣ Same direction (fast & slow pointer)

```text
slow
fast
```

Example:

```java
while (fast < arr.length) {
    if (condition) {
        slow++;
    }
    fast++;
}
```

Used for:

* Remove duplicates
* Sliding window
* Move zeros

---

# 7️⃣ Common Two Pointer Problems

Must practice:

1. Reverse String
   [https://leetcode.com/problems/reverse-string/](https://leetcode.com/problems/reverse-string/)

2. Valid Palindrome
   [https://leetcode.com/problems/valid-palindrome/](https://leetcode.com/problems/valid-palindrome/)

3. Two Sum II
   [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

4. Container With Most Water
   [https://leetcode.com/problems/container-with-most-water/](https://leetcode.com/problems/container-with-most-water/)

5. 3Sum
   [https://leetcode.com/problems/3sum/](https://leetcode.com/problems/3sum/)

---

# 8️⃣ When to Use Two Pointers

Use when:

✔ array/string problems
✔ comparing elements from both ends
✔ sorted array
✔ finding pairs
✔ removing duplicates

---

# ⭐ Quick Interview Trick

Ask yourself:

> "Can I solve this by **moving two indexes instead of nested loops**?"

Example:

```text
Brute force → O(n²)
Two pointer → O(n)
```

---

If you'd like, I can also show you **the 6 two-pointer patterns used in 90% of LeetCode problems**, which makes solving them much easier.
