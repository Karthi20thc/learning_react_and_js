# Most Commonly Used in Real Projects

| Data Structure | Most Common Loop        |
| -------------- | ----------------------- |
| String         | `for` loop + `charAt()` |
| Array          | Enhanced `for-each`     |
| ArrayList      | Enhanced `for-each`     |
| HashMap        | `entrySet()` loop       |

Example:

```java
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey());
    System.out.println(entry.getValue());
}
```

---

# Important Interview Point

## When to use normal `for` loop?

Use when:

* You need index
* Two pointer problems
* Sliding window
* Reverse traversal

Example:

```java
for (int i = 0; i < arr.length; i++)
```

---

## When to use enhanced `for-each` loop?

Use when:

* Just reading elements
* No index needed

Example:

```java
for (int value : arr)
```

---

## When to use Iterator?

Use when:

* Removing elements while looping

Example:

```java
Iterator<String> it = list.iterator();

while (it.hasNext()) {
    it.remove();
}
```
