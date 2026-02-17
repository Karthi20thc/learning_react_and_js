## `createAsyncThunk` in Redux Toolkit — Full Explanation & Usage

`createAsyncThunk` is a utility from **Redux Toolkit** used to handle **asynchronous logic** like:

* API calls
* Fetching data
* Posting data
* Async operations

It automatically generates:

```
pending
fulfilled
rejected
```

action types for you.

In simple words:

> `createAsyncThunk` = Easy way to manage async API calls in Redux.

---

# Why We Use createAsyncThunk

Without Redux Toolkit:

❌ Manual action types
❌ Action creators
❌ Reducers
❌ Loading & error handling

With Redux Toolkit:

✅ Cleaner code
✅ Less boilerplate
✅ Built-in async states

---

# Installation

```bash
npm install @reduxjs/toolkit react-redux
```

---

# Project Structure Example

```
src/
 ├── app/
 │    └── store.js
 ├── features/
 │    └── users/
 │         ├── userSlice.js
 │         └── userAPI.js
 └── App.js
```

---

# Step 1 — Create Async Thunk

Example: Fetch users from API

```js
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }
);
```

### Syntax

```js
createAsyncThunk(
  actionType,
  asyncFunction
)
```

---

# Step 2 — Create Slice

```js
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./userThunk";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
```

---

# Step 3 — Configure Store

```js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer
  }
});
```

---

# Step 4 — Provide Store to React

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

# Step 5 — Use in Component

```js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/userThunk";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
```

---

# How createAsyncThunk Works Internally

It automatically creates 3 action types:

```
fetchUsers/pending
fetchUsers/fulfilled
fetchUsers/rejected
```

You handle them in `extraReducers`.

---

# Passing Arguments to Thunk

```js
export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (id) => {
    const res = await fetch(`/users/${id}`);
    return res.json();
  }
);
```

Dispatch:

```js
dispatch(fetchUserById(5));
```

---

# Error Handling Example

```js
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("url");
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
```

---

# Access Payload in Rejected

```js
.addCase(fetchUsers.rejected, (state, action) => {
  state.error = action.payload;
})
```

---

# createAsyncThunk Lifecycle

```
Dispatch thunk →
pending →
API call →
fulfilled OR rejected
```

---

# Advantages

✅ Less boilerplate
✅ Automatic action types
✅ Built-in loading states
✅ Easy error handling
✅ Clean architecture

---

# Interview One-Line Answer

> createAsyncThunk is a Redux Toolkit function used to handle asynchronous logic by automatically generating pending, fulfilled, and rejected action types.

---

# Common Interview Questions

Be ready for:

* Difference between thunk and saga
* extraReducers vs reducers
* How to cancel thunk
* createAsyncThunk vs RTK Query
* Middleware concept

---

# Advanced Example — Using ThunkAPI

```js
async (arg, thunkAPI) => {
  const state = thunkAPI.getState();
  const dispatch = thunkAPI.dispatch;
}
```

---

# Bonus — Multiple Async Thunks in One Slice

You can add multiple `.addCase()`.

---

# If You Want

I can also explain:

✅ Redux Toolkit complete flow diagram
✅ createAsyncThunk vs RTK Query
✅ Authentication example with JWT
✅ Real project structure

Just tell me 👍
