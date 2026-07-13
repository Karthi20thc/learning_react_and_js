In **JavaScript you cannot modify a string directly** because **strings are immutable**. Instead, you create a **new string based on the old one**.

Here are the common ways to "modify" a string.

---

## 1. Using `slice()` (most common)

```javascript
let str = "hello";

str = "i" + str.slice(1);

console.log(str); // iello
```

**Explanation**

```
str.slice(1) → "ello"
"i" + "ello" → "iello"
```

---

## 2. Convert to Array → Modify → Join

```javascript
let str = "hello";

let arr = str.split(""); // ['h','e','l','l','o']
arr[0] = "i";

str = arr.join("");

console.log(str); // iello
```

This works because **arrays are mutable**.

---

## 3. Using `replace()`

```javascript
let str = "hello";

str = str.replace("h", "i");

console.log(str); // iello
```

---

## 4. Modify using substring positions

```javascript
let str = "hello";

let newStr = str.substring(0,2) + "X" + str.substring(3);

console.log(newStr); // heXlo
```

---

## 5. Change a specific index (utility function)

Sometimes in interviews they ask this:

```javascript
function changeChar(str, index, char){
    return str.substring(0,index) + char + str.substring(index+1);
}

console.log(changeChar("hello",0,"i")); // iello
```

---

✅ **Key concept**

```
Strings → Immutable
Arrays  → Mutable
```

So instead of modifying:

```
str[0] = "i" ❌
```

You must **create a new string**.

---

If you're preparing for **JavaScript interviews**, I can also show you **10 tricky string questions that companies ask (Google / Amazon level)**.
