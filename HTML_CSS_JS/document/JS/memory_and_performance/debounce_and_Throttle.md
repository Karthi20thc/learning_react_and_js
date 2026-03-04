**Debounce** and **Throttle** are techniques used to **control how often a function executes**, especially during **frequent events** like:

* `scroll`
* `resize`
* `keypress`
* `mousemove`

These are **very common JavaScript interview questions**.

---

# 1️⃣ Debounce

### Definition

**Debounce ensures a function runs only after a certain delay once the event stops triggering.**

👉 If the event keeps firing, the timer **keeps resetting**.

### Example Scenario

Search bar API call.

When user types:

```
k
ka
kar
kart
karthik
```

Without debounce → **5 API calls**
With debounce → **1 API call**

---

### Debounce Example

```javascript
function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
```

### Usage

```javascript
function search() {
    console.log("Searching...");
}

const debouncedSearch = debounce(search, 1000);

document.getElementById("search").addEventListener("keyup", debouncedSearch);
```

👉 Function runs **only after user stops typing for 1 second**.

---

### Visual Timeline

```
User typing:   k   a   r   t   h   i   k
                |   |   |   |   |   |   |

Timer reset → reset → reset → reset → reset → reset

After 1s idle → function runs once
```

---

# 2️⃣ Throttle

### Definition

**Throttle ensures a function runs at most once in a given time interval.**

Even if the event fires many times, the function runs **only once per interval**.

---

### Example Scenario

Scroll event.

Without throttle → function runs **100+ times per second**
With throttle → function runs **every 500ms**

---

### Throttle Example

```javascript
function throttle(func, limit) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}
```

### Usage

```javascript
function handleScroll() {
    console.log("Scrolling...");
}

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);
```

👉 Function runs **once every 1 second**.

---

# Debounce vs Throttle

| Feature   | Debounce          | Throttle             |
| --------- | ----------------- | -------------------- |
| Execution | After events stop | At fixed intervals   |
| Use Case  | Search input      | Scroll/resize        |
| Frequency | Once after delay  | Repeated at interval |

---

### Timeline Example

**Event fires continuously**

```
Events:     | | | | | | | | | |
```

**Debounce**

```
-------------FUNCTION RUNS-------------
(after events stop)
```

**Throttle**

```
RUN---RUN---RUN---RUN---RUN
```

---

# Real Interview Examples

### Debounce

* Search suggestions
* Auto-save forms
* Window resize calculations

### Throttle

* Scroll position tracking
* Infinite scroll loading
* Mouse movement tracking

---

# Interview Tip (Important)

Many developers **memorize the concept but fail to implement it**.

If you remember **these two implementations**, you're ahead in interviews.

---

If you want, I can also show you:

* **A visual animation example (very easy way to understand)**
* **How React uses debounce in search**
* **A tricky interview question based on debounce/throttle** (asked in many frontend interviews).
