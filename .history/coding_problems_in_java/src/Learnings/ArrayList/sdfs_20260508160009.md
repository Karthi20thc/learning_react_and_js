Good question — this is a common situation.

If you have an `ArrayList<Integer>` and need to return it as an `int[]`, here are the clean ways:

---

## ✅ Best Way (Java 8+)

```java
int[] resultArray = list.stream().mapToInt(i -> i).toArray();
```

### 📌 Example

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(0);
        list.add(1);

        int[] arr = list.stream().mapToInt(i -> i).toArray();

        System.out.println(Arrays.toString(arr)); // [0, 1]
    }
}
```

---

## ✅ Simple Loop (Most Beginner Friendly)

```java
int[] arr = new int[list.size()];

for (int i = 0; i < list.size(); i++) {
    arr[i] = list.get(i);
}
```

---

## ⚠️ Why not direct conversion?

```java
list.toArray(); // ❌ returns Object[], not int[]
```

Java doesn’t auto-convert `Integer` → `int[]`.

---

## 🚀 What you should use?

| Method | When to use                       |
| ------ | --------------------------------- |
| Stream | Clean & modern                    |
| Loop   | Easy to understand (DSA friendly) |

---

## 💡 For your Two Sum

Honestly, don’t even convert — just do:

```java
return new int[]{map.get(needed), i};
```

👉 That’s the cleanest solution.

---

If you want next step, I can show:

* Why Java separates `Integer` vs `int` (important concept)
* Or optimize your current Two Sum code fully 👍
