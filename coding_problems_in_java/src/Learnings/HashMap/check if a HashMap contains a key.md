In Java, to check if a `HashMap` contains a key, you use:

---

## ✅ Method

```java
map.containsKey(key)
```

---

## 📌 Example

```java id="j9l2qk"
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<Integer, Integer> map = new HashMap<>();

        map.put(2, 0);
        map.put(7, 1);

        if (map.containsKey(2)) {
            System.out.println("Key exists!");
        } else {
            System.out.println("Key not found");
        }
    }
}
```

---

## 🧠 In your Two Sum context

```java id="d41e9m"
int needed = target - nums[i];

if (map.containsKey(needed)) {
    return new int[]{map.get(needed), i};
}
```

👉 This checks:

> “Have I already seen the number needed to reach target?”

---

## ⚠️ Important Difference

| Method                 | Checks                              |
| ---------------------- | ----------------------------------- |
| `containsKey(key)`     | checks key exists ✅                 |
| `containsValue(value)` | checks value exists (rarely used) ❌ |

---

## 🚀 Quick Mental Model

```text
HashMap → key → value

Two Sum:
number → index
```

So you’re checking:
👉 “Does this number already exist in my map?”

---

If you want next step, I can show:

* Why we use `containsKey` BEFORE `put`
* Or dry run your exact code with debug prints 👍
