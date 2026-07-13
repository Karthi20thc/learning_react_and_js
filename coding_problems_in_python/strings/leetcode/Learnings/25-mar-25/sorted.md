In Python, the built‑in **`sorted()`** function is used to return a new sorted list from any iterable (like lists, tuples, sets, or even strings). It doesn’t modify the original object—it creates a new one.  

### 🔹 Syntax
```python
sorted(iterable, key=None, reverse=False)
```

### 🔹 Parameters
- **`iterable`** → The sequence you want to sort (list, tuple, string, etc.).
- **`key`** → A function that serves as a sort key. For example, `len` to sort by length.
- **`reverse`** → Boolean. If `True`, sorts in descending order. Default is `False` (ascending).

### 🔹 Examples
1. **Basic usage**
```python
numbers = [5, 2, 9, 1]
print(sorted(numbers))  
# Output: [1, 2, 5, 9]
```

2. **Descending order**
```python
print(sorted(numbers, reverse=True))  
# Output: [9, 5, 2, 1]
```

3. **Sorting strings**
```python
words = ["banana", "apple", "cherry"]
print(sorted(words))  
# Output: ['apple', 'banana', 'cherry']
```

4. **Using a key function**
```python
words = ["banana", "apple", "cherry"]
print(sorted(words, key=len))  
# Output: ['apple', 'banana', 'cherry']  # sorted by length
```

5. **Sorting complex objects**
```python
students = [("Alice", 25), ("Bob", 20), ("Charlie", 23)]
print(sorted(students, key=lambda x: x[1]))  
# Output: [('Bob', 20), ('Charlie', 23), ('Alice', 25)]
```

👉 If you want to sort a list **in place** (modifying the original list), you should use the `.sort()` method instead of `sorted()`.  

Would you like me to also show you the difference between `sorted()` and `.sort()` with examples?