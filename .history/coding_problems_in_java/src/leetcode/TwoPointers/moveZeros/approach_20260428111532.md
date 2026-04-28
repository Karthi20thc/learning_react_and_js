Nice—same pattern fits perfectly. Just tweak the **condition**.

---

# 🧠 Pattern: Two Pointers (Slow & Fast)

> “I need to **keep non-zero elements in order**”

---

# 🎯 Core Idea

* `slow` → where next non-zero should go
* `fast` → scans the array

---

# 🔁 Step-by-Step Thinking

1. Start:

   * `slow = 0`
   * `fast = 0`

2. Move `fast` through array

3. At each step:

   * Check: **is this element non-zero?**

---

# ⚡ Decision Rule

### If `nums[fast] != 0`:

👉 Valid element (we want to keep it)

* Place it at `nums[slow]`
* Move `slow++`

---

### If `nums[fast] == 0`:

👉 Ignore it

* Just move `fast`

---

# 📦 What happens internally

You are **compacting all non-zero values to the front**, maintaining order.

---

# 🧩 Example Flow (mental)

```
[0,1,0,3,12]

slow → next position to fill
fast → scanning
```

Every time `fast` sees non-zero → push it forward.

---

# 🎯 Final Step (important!)

After traversal:

* Positions from `slow → end`
  👉 Fill with `0`

---

# 🧠 Key Insight

> Unlike “remove duplicates”:

* There’s **no comparison with previous**
* Just a **filter condition (non-zero)**

---

# ⚡ One-line summary

> “Scan with fast, write non-zeros with slow, fill rest with zero”

---

If you want next, I can show:

* 🔥 how to convert this into **minimum swaps version**
* ⚠️ or common mistakes (this problem has a few tricky ones)


--------------------------------------------------------------------------------------------------------------

Good question—this is where small pointer choices matter.

### Why both start at `0`?

Because here, **every element must be evaluated**:

* `fast` = scanner → must check **index 0**
* `slow` = next position to place a valid element → also starts from beginning

If you skip index `0`, you might miss a valid non-zero.

---

### Can you start `fast = 1`?

👉 You *can*, but only if you **handle index 0 separately**.

#### Example problem if you don’t:

```
[5, 0, 1]
```

* If `fast = 1`, you never process `5`
* That breaks the logic

---

### When does `fast = 1` make sense?

In problems like **remove duplicates (sorted array)**:

* First element is always unique
* So you safely start:

  * `slow = 0`
  * `fast = 1`

👉 Because you're comparing with a **previous element**

---

### Key difference

| Problem           | Why `fast = 1` works?                |
| ----------------- | ------------------------------------ |
| Remove duplicates | Compare with previous (`nums[slow]`) |
| Move zeroes       | No comparison → must scan everything |

---

### Clean rule to remember

> If logic depends on **previous element → start fast = 1**
> If logic depends on **checking every element → start fast = 0**

---

### One-line intuition

> Here you're **filtering**, not comparing → don’t skip the first element.

---

If you want, I can show a version where starting `fast = 1` still works—but you'll see it becomes unnecessarily messy.


-------------------------------------------------------------------------------------------------------------------------------
















Think of this as a **stable compaction problem**: keep all non-zeros in order, and push “empty spaces” (zeros) to the back.

### Core intuition

Instead of “moving zeros,” flip your mindset:

> **Pull all non-zero elements forward.**

### Mental model

Imagine writing into the same array from left to right:

* Maintain a **position pointer (`write`)** → where the next non-zero should go
* Traverse with another pointer (`read`)
* Every time you see a non-zero → place it at `write`, then advance `write`

Now ask yourself:

* What happens to the leftover positions after all non-zeros are placed?

👉 They naturally become the places where zeros should be.

---

### Step-by-step thinking (dry run idea)

For `[0,1,0,3,12]`:

* Start with `write = 0`
* Scan:

  * `0` → ignore
  * `1` → move to index `0`, `write++`
  * `0` → ignore
  * `3` → move to index `1`, `write++`
  * `12` → move to index `2`, `write++`

Now:

* First part = all non-zeros in order
* Remaining indices = fill with `0`

---

### Key observations

* You **don’t care about zeros initially**
* You only care about **preserving order of non-zeros**
* This is why a **two-pointer approach** works best

---

### About minimizing operations (follow-up hint)

There are two ways to think:

1. **Overwrite approach**

   * Write non-zeros forward
   * Fill rest with zeros
   * Simple, but may write more times

2. **Swap approach**

   * When `read` finds non-zero and `write` is at zero → swap
   * Reduces unnecessary writes

👉 Interviewers love when you mention both and discuss trade-offs.

---

### What you should remember (pattern)

Whenever you see:

* “move X to end”
* “keep order”
* “in-place”

👉 Think:

> **Two pointers + overwrite or swap strategy**

---

If you want, I can walk you through how to *derive this logic yourself in an interview* so you don’t forget it again.
