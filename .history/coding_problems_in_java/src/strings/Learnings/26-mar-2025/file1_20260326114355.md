In Java, strings are **immutable**, meaning you cannot directly update or change a character at a particular index like you can in Python (`str[0] = 'x'`). Instead, you need to create a **new string** with the desired modification.  

Here are common ways to do it:

---

### 🔹 Using `substring()`
```java
public class Main {
    public static void main(String[] args) {
        String str = "Hello";
        
        // Replace character at index 1 ('e') with 'a'
        int index = 1;
        char newChar = 'a';
        
        String updated = str.substring(0, index) + newChar + str.substring(index + 1);
        System.out.println(updated);  // Output: Hallo
    }
}
```

---

### 🔹 Using `StringBuilder` (mutable alternative)
```java
public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        
        sb.setCharAt(1, 'a');  // change 'e' to 'a'
        
        System.out.println(sb.toString());  // Output: Hallo
    }
}
```

---

✅ **Key takeaway:**  
- Use `substring()` if you want to stick with immutable `String`.  
- Use `StringBuilder` or `StringBuffer` if you need to frequently update characters, since they are mutable.  

Would you like me to show you how to **replace multiple characters at once** (like turning `"Hello"` into `"Hxllo"`) using these approaches?