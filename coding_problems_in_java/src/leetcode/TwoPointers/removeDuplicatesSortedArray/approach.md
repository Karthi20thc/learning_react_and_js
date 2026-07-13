Good—you’re focusing on **approach first**, that’s the right habit.

---

# 🧠 Pattern: Two Pointers (Slow & Fast)

Think like this:

> “I need to **keep only unique elements in-place**”

---

# 🎯 Core Idea

* Use **two pointers**:

  * `slow` → where to place next unique element
  * `fast` → scans the array

---

# 🔁 Step-by-Step Thinking

1. Start both at beginning:

   * `slow = 0`
   * `fast = 1`

2. Move `fast` through array

3. At each step:

   * Compare `nums[fast]` with `nums[slow]`

---

# ⚡ Decision Rule

### If they are DIFFERENT:

👉 New unique element found

* Move `slow` forward
* Copy `nums[fast]` → `nums[slow]`

---

### If they are SAME:

👉 Duplicate → ignore

* Just move `fast`

---

# 📦 What happens internally

You are **compacting unique values to the front** of the array.

---

# 🧩 Example Flow (mental)

```
[0,0,1,1,1,2,...]

slow → last unique
fast → exploring ahead
```

Whenever `fast` sees a new number → push it forward.

---

# 🎯 Final Output

* Length = `slow + 1`
* First part of array = unique elements

---

# 🧠 Key Insight

> Sorted array ⇒ duplicates are **adjacent**
> So you only compare with previous unique element

---

# ⚡ One-line summary

> “Scan with fast, write with slow”

---

If you want next, I can:

* dry-run this with you step-by-step
* or show **common mistakes people make in this problem**
