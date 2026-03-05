Since you’re learning **React architecture topics (Redux, state management, etc.)**, understanding **how Redux handles nested state** is very important.

---

# 1️⃣ Why Nested State Is a Problem in Redux

Redux state must always be **immutable**.

That means:

❌ Never mutate state directly
✔ Always create **new copies**

Example state:

```javascript
const initialState = {
  user: {
    name: "Karthik",
    address: {
      city: "Chennai",
      pincode: 600001
    }
  }
};
```

If we change `city`, we **cannot do this**:

```javascript
state.user.address.city = "Mumbai"; // ❌ mutation
```

Because Redux depends on **reference changes** to detect updates.

---

# 2️⃣ Correct Way: Immutable Update (Manual Spread)

Reducer example:

```javascript
function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CITY":
      return {
        ...state,
        user: {
          ...state.user,
          address: {
            ...state.user.address,
            city: action.payload
          }
        }
      };

    default:
      return state;
  }
}
```

Action:

```javascript
dispatch({
  type: "UPDATE_CITY",
  payload: "Mumbai"
});
```

---

## What Happened Internally

Before:

```javascript
state = {
  user: {
    name: "Karthik",
    address: { city: "Chennai" }
  }
}
```

After:

```javascript
state = {
  user: {
    name: "Karthik",
    address: { city: "Mumbai" }
  }
}
```

Redux detects change because:

```text
state reference changed
user reference changed
address reference changed
```

---

# 3️⃣ The Big Problem With Deep Nesting

Imagine this state:

```javascript
const state = {
  company: {
    departments: {
      engineering: {
        teams: {
          frontend: {
            lead: "Karthik"
          }
        }
      }
    }
  }
};
```

Updating `lead` requires:

```javascript
return {
  ...state,
  company: {
    ...state.company,
    departments: {
      ...state.company.departments,
      engineering: {
        ...state.company.departments.engineering,
        teams: {
          ...state.company.departments.engineering.teams,
          frontend: {
            ...state.company.departments.engineering.teams.frontend,
            lead: "Arun"
          }
        }
      }
    }
  }
};
```

This becomes **very messy**.

---

# 4️⃣ Modern Redux Solution (Redux Toolkit)

Redux Toolkit uses **Immer** internally.

So you can write **mutating code**, but Redux safely converts it to immutable updates.

Example reducer:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Karthik",
    address: {
      city: "Chennai"
    }
  },
  reducers: {
    updateCity(state, action) {
      state.address.city = action.payload;
    }
  }
});

export const { updateCity } = userSlice.actions;
export default userSlice.reducer;
```

Dispatch:

```javascript
dispatch(updateCity("Mumbai"));
```

This works because **Immer tracks changes and creates new objects automatically.**

---

# 5️⃣ Best Practice in Redux: Normalize State

Instead of deep nesting:

❌ Bad

```javascript
{
  users: {
    teamA: {
      members: [...]
    }
  }
}
```

✔ Good

```javascript
{
  users: {
    byId: {
      1: { id:1, name:"Karthik" },
      2: { id:2, name:"Arun" }
    },
    allIds: [1,2]
  }
}
```

Why?

* Faster updates
* Easier reducers
* Better performance

---

# 6️⃣ Real Example (Like Your Financial Data)

Instead of deep nesting:

```javascript
{
  inputs: {
    FAmountOutstanding_history: [
      { DeltaValue:100, AmountOutstanding:100 }
    ]
  }
}
```

Redux store could be:

```javascript
{
  outstandingHistory: [
    { id:1, delta:100, type:"INCREASE", amount:100 },
    { id:2, delta:20, type:"REDUCE", amount:80 }
  ]
}
```

Reducer:

```javascript
updateDelta(state, action) {
  const item = state.outstandingHistory.find(
    x => x.id === action.payload.id
  );
  item.delta = action.payload.delta;
}
```

---

# 7️⃣ Key Redux Rule

Always remember:

```text
Never mutate state directly
Always return new state
```

Unless you're using **Redux Toolkit**, which safely handles it.

---

# 8️⃣ Interview Question You Will Definitely Get

**Question: Why does Redux avoid nested state?**

Answer:

1. Hard to update immutably
2. Leads to complex reducers
3. Causes unnecessary re-renders
4. Hard to maintain

---

💡 Since you're already working with **React + complex financial state (`FAmountOutstanding_history`)**, the next thing that will help you a lot is understanding:

* **Normalized state vs nested state**
* **useReducer vs Redux**
* **When Redux is actually needed**

If you want, I can also show a **very clear diagram of Redux data flow (interview favourite)**.
