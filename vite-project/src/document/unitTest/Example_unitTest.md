Perfect 👍 This is a **real-world production component** (API call, context, antd, dynamic rendering). I’ll teach you how to test this properly — step by step — the way it’s done in enterprise React apps.

Since you're using **React + Ant Design + Context + axios**, we’ll test:

1. ✅ Component renders
2. ✅ Loading state
3. ✅ API call on ISINID change
4. ✅ Data rendering from API
5. ✅ Error handling

We’ll use:

* **Jest**
* **React Testing Library**

---

# 🧠 Step 1: Understand What We Need to Mock

Your component depends on:

* `InputContext`
* `axios`
* `js-cookie`
* `antd message`

So we must mock them.

---

# 🧪 Step 2: Create Test File

Create:

```
Tab1.test.js
```

---

# 🧪 Step 3: Basic Test Setup

```js
import { render, screen, waitFor } from "@testing-library/react";
import Tab1 from "./Tab1";
import axios from "axios";
import { InputContext } from "../../fidonews";

jest.mock("axios");
jest.mock("js-cookie", () => ({
  get: jest.fn(() => "fake-token"),
}));

jest.mock("antd", () => ({
  ...jest.requireActual("antd"),
  message: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));
```

---

# 🧪 Step 4: Create Mock Context Wrapper

Your component uses:

```js
const { inputs, setInputs, fidoMasterDict } = useContext(InputContext);
```

So we create a wrapper:

```js
const mockSetInputs = jest.fn();

const mockContextValue = {
  inputs: {
    ISINID: "TEST123",
    FAmountOutstanding_history: [],
  },
  setInputs: mockSetInputs,
  fidoMasterDict: {
    data: {
      fe_currency: [
        { iso_code: "USD", currency: "US Dollar" },
      ],
    },
  },
};

const renderWithContext = () => {
  return render(
    <InputContext.Provider value={mockContextValue}>
      <Tab1 />
    </InputContext.Provider>
  );
};
```

---

# ✅ Test 1: Component Renders Header

```js
test("renders Amount Outstanding header", () => {
  renderWithContext();
  expect(screen.getByText("Amount Outstanding")).toBeInTheDocument();
});
```

---

# ✅ Test 2: API is Called When ISINID Exists

```js
test("calls API when ISINID exists", async () => {
  axios.post.mockResolvedValue({
    status: 200,
    data: { data: [] },
  });

  renderWithContext();

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith(
      "/api/fido/get_amountOutstanding_history",
      { isinid: "TEST123" },
      expect.any(Object)
    );
  });
});
```

---

# ✅ Test 3: Shows Loading State

```js
test("shows loading while fetching", async () => {
  axios.post.mockImplementation(
    () => new Promise(resolve => setTimeout(() => resolve({
      status: 200,
      data: { data: [] }
    }), 100))
  );

  renderWithContext();

  expect(screen.getByText('"Loading"')).toBeInTheDocument();
});
```

---

# ✅ Test 4: Renders Data From API

```js
test("renders rows returned from API", async () => {
  const mockData = [
    {
      ID: 1,
      EventAnnouncementDate: null,
      EventEffectiveDate: null,
      DeltaValue: "100",
      EventType: 1,
      AmountOutstanding: "500",
      Currency: "USD",
    },
  ];

  axios.post.mockResolvedValue({
    status: 200,
    data: { data: mockData },
  });

  renderWithContext();

  await waitFor(() => {
    expect(mockSetInputs).toHaveBeenCalled();
  });
});
```

You can also assert:

```js
expect(screen.getByText("ISINID - TEST123")).toBeInTheDocument();
```

---

# ✅ Test 5: Error Handling

```js
test("shows error message when API fails", async () => {
  axios.post.mockRejectedValue({
    response: {
      data: { message: "API Failed" },
    },
  });

  renderWithContext();

  await waitFor(() => {
    expect(require("antd").message.error).toHaveBeenCalled();
  });
});
```

---

# 🧠 Advanced: Testing Input Change

To test:

```js
simple_Input_handleChange
```

You would:

```js
import userEvent from "@testing-library/user-event";

test("updates DeltaValue on input change", async () => {
  renderWithContext();

  const input = await screen.findByPlaceholderText("int");
  
  await userEvent.type(input, "123");

  expect(mockSetInputs).toHaveBeenCalled();
});
```

---

# 🎯 What You Learned

You now know how to test:

| Feature      | How                |
| ------------ | ------------------ |
| Context      | Provider wrapper   |
| API          | mock axios         |
| Loading      | mock promise delay |
| Error        | mockRejectedValue  |
| State update | check setInputs    |

---

# 🚀 Production-Level Advice (Important)

For large components like yours:

### ✅ Best Practice

Split:

* API logic → custom hook (`useAmountOutstanding`)
* UI → pure component
* Context → provider

Then testing becomes MUCH easier.

---

# 🔥 If You Want Next Level

I can teach you:

* ✅ How to test with MSW (Mock Service Worker)
* ✅ How to test Ant Design DatePicker properly
* ✅ How to test dynamic add/delete containers
* ✅ How to test complex forms like enterprise apps
* ✅ How to measure test coverage

Tell me what you want next 👌
