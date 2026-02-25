Great 🔥 Since you're preparing for interviews (and I’ve seen you like tricky JS questions), here’s a **well-structured interview question** based on building a Progress Bar using only HTML, CSS, and JavaScript.

---

# 🧠 Interview Question – Build a Dynamic Progress Bar

### 📌 Problem Statement

Create a **reusable and dynamic progress bar component** using only **HTML, CSS, and Vanilla JavaScript** (no libraries, no frameworks).

---

## ✅ Basic Requirements

1. The progress bar should:

   * Start from `0%`
   * Increment smoothly to `100%`
   * Show percentage text inside the bar
   * Animate smoothly (not jump)

2. Include:

   * A **Start** button
   * A **Reset** button

---

## 🚀 Advanced Requirements (This is where interviewers test you)

1. Progress should:

   * Increase by 1% every 50ms
   * Stop automatically at 100%
   * Not allow multiple intervals if Start is clicked repeatedly

2. Add these features:

   * If progress ≥ 70%, change color to green
   * If progress between 30%–69%, yellow
   * Below 30%, red

3. Bonus:

   * Add Pause / Resume functionality
   * Prevent memory leaks
   * Make it reusable for multiple progress bars on the same page

---

## 🎯 Follow-up Questions (Interview Depth Check)

1. What happens if you use `setInterval` incorrectly?
2. How would you implement this using `requestAnimationFrame` instead?
3. How would you avoid layout thrashing?
4. How would you make it accessible (ARIA roles)?
5. How would you convert this into a reusable class?
6. How would React implement this differently?

---

# 💡 Bonus System Design Twist

Imagine:

* Backend sends progress updates via API.
* You need to sync UI progress with real backend progress.
* Backend might send 10%, 35%, 80% randomly.

👉 How would you handle animation smoothly between values?

---

If you want, I can also:

* ✅ Give you a beginner version
* ✅ Give you a tricky version (closure + async trap)
* ✅ Give you the full implementation
* ✅ Give you 10 variations of this question
* ✅ Turn this into a machine coding round question

Which level do you want? 😄
