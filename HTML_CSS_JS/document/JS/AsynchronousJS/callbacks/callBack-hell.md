**Callback Hell** happens when **multiple asynchronous operations depend on each other**, and callbacks are **nested inside callbacks**, making the code **hard to read and maintain**.

It is also called **"Pyramid of Doom"** because the code keeps shifting to the right.

---

# 1️⃣ Simple Example of Callback Hell

Imagine these steps:

1. Get user
2. Get user orders
3. Get order details

```javascript
function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: userId, name: "Karthik" });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log("Orders fetched");
        callback(["order1", "order2"]);
    }, 1000);
}

function getOrderDetails(order, callback) {
    setTimeout(() => {
        console.log("Order details fetched");
        callback({ order: order, price: 500 });
    }, 1000);
}
```

### Using them (Callback Hell)

```javascript
getUser(1, (user) => {
    console.log(user);

    getOrders(user.id, (orders) => {
        console.log(orders);

        getOrderDetails(orders[0], (details) => {
            console.log(details);
        });

    });

});
```

---

# ⚠️ Why This is Bad

Problems with callback hell:

1️⃣ Hard to read
2️⃣ Hard to debug
3️⃣ Difficult error handling
4️⃣ Code becomes deeply nested

Shape of the code:

```
getUser()
   └── getOrders()
          └── getOrderDetails()
                 └── more callbacks...
```

This creates a **pyramid structure**.

---

# 2️⃣ Real Example (API Requests)

```javascript
loginUser(username, password, function(user){
    
    getProfile(user.id, function(profile){
        
        getPosts(profile.id, function(posts){
            
            getComments(posts[0].id, function(comments){
                console.log(comments);
            });
            
        });
        
    });
    
});
```

This is **classic callback hell**.

---

# 3️⃣ Solution 1 — Promises

```javascript
getUser(1)
.then(user => getOrders(user.id))
.then(orders => getOrderDetails(orders[0]))
.then(details => console.log(details))
.catch(err => console.log(err))
```

Much **cleaner**.

---

# 4️⃣ Solution 2 — Async/Await (Best)

```javascript
async function fetchData() {

    const user = await getUser(1)
    const orders = await getOrders(user.id)
    const details = await getOrderDetails(orders[0])

    console.log(details)

}

fetchData()
```

Now it looks **synchronous and readable**.

---

# 🧠 Interview Definition

**Callback Hell:**

> A situation in JavaScript where multiple nested callbacks make the code difficult to read, maintain, and debug.

---

✅ **One-line interview answer**

> Callback hell is a situation where asynchronous callbacks are nested inside each other, creating deeply indented code that is difficult to read and maintain.

---

If you want, I can also show **a real-world callback hell example from Node.js (file system / API calls)** — this is often asked in **JavaScript interviews**.
