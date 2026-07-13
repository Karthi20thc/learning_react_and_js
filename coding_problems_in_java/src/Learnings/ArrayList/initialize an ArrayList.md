Here are the common ways to initialize an `ArrayList` in Java.

---

## 1. Empty ArrayList

```java
ArrayList<Integer> list = new ArrayList<>();
```

---

## 2. ArrayList with Initial Values

```java
ArrayList<Integer> list = new ArrayList<>(
        Arrays.asList(10, 20, 30, 40)
);
```

You need:

```java
import java.util.ArrayList;
import java.util.Arrays;
```

---

## 3. String ArrayList

```java
ArrayList<String> names = new ArrayList<>(
        Arrays.asList("Karthik", "John", "Sam")
);
```

---

## 4. Using `List.of()` (Java 9+)

```java
ArrayList<Integer> list = new ArrayList<>(
        List.of(1, 2, 3, 4)
);
```

Need:

```java
import java.util.List;
```

---

## 5. Add Elements One by One

```java
ArrayList<Integer> list = new ArrayList<>();

list.add(10);
list.add(20);
list.add(30);
```

---

## 6. 2D ArrayList Initialization

```java
ArrayList<ArrayList<Integer>> matrix = new ArrayList<>();

for(int i = 0; i < 3; i++) {
    matrix.add(new ArrayList<>());
}
```

---

## 7. Initialize with Capacity

```java
ArrayList<Integer> list = new ArrayList<>(100);
```

This sets initial capacity to 100.

---

## Syntax Reminder

```java
ArrayList<DataType> variableName = new ArrayList<>();
```

Example:

```java
ArrayList<Integer> nums = new ArrayList<>();
ArrayList<String> words = new ArrayList<>();
```
