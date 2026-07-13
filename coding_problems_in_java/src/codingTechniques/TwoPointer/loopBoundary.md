Fixing the **loop condition** is one of the most important parts of using **two pointers**. The condition depends on **how the pointers move**.

The main question to ask is:

> “When should the loop stop so pointers don't cross or go out of bounds?”

---

# 1️⃣ Moving Toward the Middle (Most common)

If one pointer starts at the **beginning** and the other at the **end**, use:

```java
while (left < right)
```

### Example: Palindrome

```java
int left = 0;
int right = str.length() - 1;

while (left < right) {
    if (str.charAt(left) != str.charAt(right)) {
        return false;
    }

    left++;
    right--;
}
```

Why `<` ?

Because once they meet in the middle, the comparison is complete.

Example:

```
m a d a m
↑       ↑
left    right
```

---

# 2️⃣ When pointers can meet

Sometimes we use:

```java
while (left <= right)
```

Used when the **middle element must also be processed**.

Example: Binary search.

```java
while (left <= right) {
    int mid = (left + right) / 2;
}
```

---

# 3️⃣ Sliding Window (two pointers same direction)

Use:

```java
while (right < arr.length)
```

Example:

```java
int left = 0;
int right = 0;

while (right < arr.length) {
    // process window

    if (condition) {
        left++;
    }

    right++;
}
```

---

# 4️⃣ Example: Reverse String

```java
char[] arr = str.toCharArray();

int left = 0;
int right = arr.length - 1;

while (left < right) {
    char temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}
```

Loop stops when:

```
left >= right
```

Meaning pointers crossed.

---

# 5️⃣ Visual Understanding

Example: `"abcdef"`

```
a b c d e f
↑         ↑
l         r
```

After steps:

```
a b c d e f
      ↑
     mid
```

Loop stops when:

```
left >= right
```

---

# 6️⃣ Quick Rule

| Problem Type        | Loop condition          |
| ------------------- | ----------------------- |
| Opposite pointers   | `while (left < right)`  |
| Binary search       | `while (left <= right)` |
| Sliding window      | `while (right < n)`     |
| Fast & slow pointer | `while (fast < n)`      |

---

# ⭐ Interview Trick

Before writing the loop, ask:

1️⃣ Where do pointers start?
2️⃣ How do they move?
3️⃣ When should they stop?

Then choose the condition.

---

If you'd like, I can also show **6 common two-pointer mistakes that cause infinite loops in interviews** (very common when learning this technique).
