This one looks simple—but the *direction* you choose makes or breaks it.

### 🚫 First instinct (not ideal)

You might think:

* Start from index `0`
* Compare elements
* Shift elements in `nums1` to make space

Problem: shifting = **O(n²)** worst case → bad.

---

### ✅ Key idea (optimal approach)

You already have extra space at the **end of `nums1`**.

So instead of merging from the front…
👉 **merge from the back**.

---

### 🧠 Intuition

You have:

* `nums1`: `[1,2,3,0,0,0]` (valid till `m`)
* `nums2`: `[2,5,6]`

Think like this:

* The **largest element** should go at the **last position**
* Compare from the **end of both arrays**

---

### 🔁 Pointer setup

Use 3 pointers:

* `i = m - 1` → last valid element in `nums1`
* `j = n - 1` → last element in `nums2`
* `k = m + n - 1` → last position in `nums1`

---

### 🔄 Process

Repeat:

* Compare `nums1[i]` and `nums2[j]`
* Place the **larger one at `nums1[k]`**
* Move the corresponding pointer (`i` or `j`)
* Decrease `k`

---

### ⚠️ Important edge case

If `nums2` still has elements left after `nums1` is exhausted:

* Copy remaining `nums2` elements into `nums1`

If `nums1` is left:

* Do nothing (already in place)

---

### ⏱ Complexity

* Time: **O(m + n)**
* Space: **O(1)** (in-place)

---

### 🧩 Why this works

Because you're **filling from the end**, you never overwrite useful data.

---

If you want, I can next:

* Walk through one example step-by-step (very helpful for interviews), or
* Show a dry-run table so you never forget this pattern again.
