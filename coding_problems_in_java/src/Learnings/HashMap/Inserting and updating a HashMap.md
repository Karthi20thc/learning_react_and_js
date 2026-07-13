In Java, inserting and updating a `HashMap` is done using the same method: `put()`.

---

## ✅ 1. Insert data into HashMap

```java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();

        map.put("apple", 10);
        map.put("banana", 20);

        System.out.println(map);
    }
}
```

### 🧠 What happens?

* `"apple"` → inserted with value `10`
* `"banana"` → inserted with value `20`

---

## 🔄 2. Update data in HashMap

```java
map.put("apple", 50);
```

### 🧠 What happens?

* If the key already exists → value gets **replaced**
* `"apple"` was `10`, now becomes `50`

---

## ⚡ Important Behavior

```java
map.put("key", value);
```

| Case               | Result             |
| ------------------ | ------------------ |
| Key does NOT exist | Insert             |
| Key exists         | Update (overwrite) |

---

## ✅ 3. Insert only if NOT present

```java
map.putIfAbsent("apple", 100);
```

* Won’t overwrite existing value

---

## ✅ 4. Update only if present

```java
map.replace("apple", 200);
```

* Only updates if key exists

---

## 🚀 5. Common pattern (used in DSA like Two Sum / frequency count)

```java
map.put(num, map.getOrDefault(num, 0) + 1);
```

### 🧠 What this does:

* If `num` not present → default = `0`
* Then increment → `1`
* Useful for counting frequency

---

## 🔥 Example (Frequency Count)

```java
int[] nums = {1, 2, 2, 3};

HashMap<Integer, Integer> map = new HashMap<>();

for (int num : nums) {
    map.put(num, map.getOrDefault(num, 0) + 1);
}

System.out.println(map); // {1=1, 2=2, 3=1}
```

---

If you want, I can connect this directly to **Two Sum logic** so you clearly see why HashMap is used there 👍
