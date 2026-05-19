In Java, arrays are simple—you just declare the type and size (or values). Here are the clean patterns you’ll use most:

---

### 1. Declare + allocate (empty array)

```java
int[] arr = new int[5];
```

* Creates an array of size 5
* Default values → `0 0 0 0 0`

---

### 2. Declare + initialize with values

```java
int[] arr = {1, 2, 3, 4, 5};
```

* Size is auto-determined
* Most common shortcut

---

### 3. Using `new` with values

```java
int[] arr = new int[]{1, 2, 3, 4, 5};
```

* Useful when passing directly to methods

---

### 4. Different data types

```java
String[] names = {"John", "Alice", "Bob"};

char[] letters = {'a', 'b', 'c'};

boolean[] flags = new boolean[3]; // false false false
```

---

### 5. 2D array (matrix)

```java
int[][] matrix = new int[2][3];
```

or

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
```

---

### 6. Loop initialization

```java
int[] arr = new int[5];

for (int i = 0; i < arr.length; i++) {
    arr[i] = i * 2;
}
```

---

### Small tip (important)

* `arr.length` → for arrays
* `list.size()` → for ArrayList

---

If you want, I can connect this with your DSA problems (like two-pointer or remove duplicates) so it sticks better.
