The choice between **`for`** and **`while`** loops depends mainly on **whether you know the number of iterations in advance**.

---

# 1️⃣ Use `for` loop (when iterations are known)

Use a **for loop** when:

* You know **how many times the loop should run**
* You iterate using an **index**
* You loop through **arrays, lists, strings**

### Example

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

Output:

```
0
1
2
3
4
```

### String Example

```java
String str = "hello";

for (int i = 0; i < str.length(); i++) {
    System.out.println(str.charAt(i));
}
```

Use `for` when:

✔ fixed iterations
✔ arrays / lists
✔ index-based loops

---

# 2️⃣ Use `while` loop (when iterations are unknown)

Use a **while loop** when:

* You **don't know how many times it will run**
* Loop continues until a **condition changes**

### Example

```java
int i = 0;

while (i < 5) {
    System.out.println(i);
    i++;
}
```

---

### Example: User Input

```java
Scanner sc = new Scanner(System.in);

while (true) {
    String input = sc.nextLine();
    
    if (input.equals("exit")) {
        break;
    }
}
```

Here you **don't know how many inputs** the user will give.

---

# 3️⃣ Quick Rule

| Situation                   | Use     |
| --------------------------- | ------- |
| Known number of iterations  | `for`   |
| Unknown iterations          | `while` |
| Loop over array/string      | `for`   |
| Waiting for condition/event | `while` |

---

# 4️⃣ In LeetCode / DSA

Most common:

```java
for (int i = 0; i < n; i++)
```

Two pointer problems:

```java
while (left < right)
```

Example:

```java
while (left < right) {
    if (arr[left] + arr[right] == target) {
        return true;
    }
}
```

---

# 5️⃣ Summary

| Loop       | When used         |
| ---------- | ----------------- |
| `for`      | Known iterations  |
| `while`    | Condition-based   |
| `do while` | Run at least once |

---

⭐ **Interview Tip**

Most algorithms use:

```
for → iteration
while → two pointers / sliding window
```

---

If you'd like, I can also show **10 algorithm patterns where `while` loops are preferred (two pointers, sliding window, fast/slow pointer, etc.)**, which appear a lot in interviews.
