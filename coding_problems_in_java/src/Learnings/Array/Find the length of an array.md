In Java, finding the length of an array is very simple — arrays have a built-in property called `length`.

### ✅ Syntax

```java
arrayName.length
```

### 📌 Example

```java
public class Main {
    public static void main(String[] args) {
        int[] nums = {10, 20, 30, 40, 50};

        int length = nums.length;

        System.out.println("Length of array: " + length);
    }
}
```

### 🧠 Key Points

* `length` is a **property**, not a method → ❌ `nums.length()` (wrong)
* No parentheses needed → ✅ `nums.length`
* Works for all array types (`int[]`, `String[]`, etc.)

---

### ⚠️ Common Confusion

* Arrays → `length`
* Strings → `length()` method

```java
String str = "hello";
System.out.println(str.length()); // method

int[] arr = {1, 2, 3};
System.out.println(arr.length);   // property
```

---

If you want, I can also show how this is used in loops or common DSA problems 👍
