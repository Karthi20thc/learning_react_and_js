Java doesn’t have a built-in method to directly “find the index” of a value in a normal array — you have to search for it.

### ✅ Basic Approach (Linear Search)

You loop through the array and compare each element.

```java
public class Main {
    public static void main(String[] args) {
        int[] nums = {10, 20, 30, 40, 50};
        int target = 30;

        int index = -1; // default if not found

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                index = i;
                break;
            }
        }

        System.out.println("Index: " + index);
    }
}
```

### 🧠 Key Idea

* Start from index `0`
* Compare each element
* If found → return index
* If not → return `-1`

---

### ⚡ Cleaner Version (Method)

```java
public static int findIndex(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
```

---

### 🚀 Alternative (Using `ArrayList`)

If you use an `ArrayList`, Java gives a built-in method:

```java
import java.util.*;

ArrayList<Integer> list = new ArrayList<>(Arrays.asList(10, 20, 30));
System.out.println(list.indexOf(30)); // Output: 2
```

---

### ⚠️ Important Notes

* Works for **first occurrence only**
* Time complexity = **O(n)**
* For sorted arrays → you can use **binary search (O(log n))**

---

If you want, I can show:

* Binary search version (faster)
* How this is used in **Two Sum** (you were learning that 👍)
