I’ll give you a **single realistic React + TypeScript component** that simulates a **complex production scenario** so you can see **most important TS patterns in one place**.

We will include:

* Props types
* API types
* Union types
* Enums
* Generic types
* Function types
* Event types
* Optional fields
* Nested objects
* Array types
* Utility types
* Type inference

Imagine this is a **Corporate Actions Dashboard** (similar to the financial validation system you mentioned working with in your Django backend).

---

# Example: Complex React + TypeScript Component

```tsx
import React, { useState, useEffect } from "react";

/* -------------------- ENUM -------------------- */

enum CAStatus {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

/* -------------------- UNION TYPE -------------------- */

type CAType = "DIVIDEND" | "MERGER" | "SPLIT";

/* -------------------- API DATA TYPE -------------------- */

interface CorporateAction {
  id: number;
  issuer: string;
  caType: CAType;
  amount?: number;
  announceDate: string;
  status: CAStatus;
}

/* -------------------- API RESPONSE TYPE -------------------- */

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/* -------------------- COMPONENT PROPS -------------------- */

interface DashboardProps {
  userRole: "ADMIN" | "ANALYST";
  refreshInterval?: number;
}

/* -------------------- FUNCTION TYPE -------------------- */

type FilterFunction = (actions: CorporateAction[]) => CorporateAction[];

/* -------------------- GENERIC UTILITY -------------------- */

function sortByField<T>(data: T[], field: keyof T): T[] {
  return [...data].sort((a, b) => {
    if (a[field] > b[field]) return 1;
    if (a[field] < b[field]) return -1;
    return 0;
  });
}

/* -------------------- COMPONENT -------------------- */

const CorporateActionDashboard: React.FC<DashboardProps> = ({
  userRole,
  refreshInterval = 5000
}) => {

  /* -------------------- STATE TYPES -------------------- */

  const [actions, setActions] = useState<CorporateAction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<CAType | "ALL">("ALL");

  /* -------------------- API CALL -------------------- */

  const fetchCorporateActions = async (): Promise<void> => {
    setLoading(true);

    const response: ApiResponse<CorporateAction[]> = {
      success: true,
      data: [
        {
          id: 1,
          issuer: "Apple",
          caType: "DIVIDEND",
          amount: 1.2,
          announceDate: "2026-03-10",
          status: CAStatus.Pending
        },
        {
          id: 2,
          issuer: "Google",
          caType: "SPLIT",
          announceDate: "2026-03-08",
          status: CAStatus.Approved
        }
      ]
    };

    if (response.success) {
      setActions(response.data);
    }

    setLoading(false);
  };

  /* -------------------- FILTER FUNCTION -------------------- */

  const filterActions: FilterFunction = (data) => {
    if (filterType === "ALL") return data;
    return data.filter((a) => a.caType === filterType);
  };

  /* -------------------- EVENT HANDLER -------------------- */

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFilterType(e.target.value as CAType | "ALL");
  };

  /* -------------------- UPDATE STATUS -------------------- */

  const updateStatus = (id: number, status: CAStatus): void => {
    setActions((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status } : a
      )
    );
  };

  /* -------------------- EFFECT -------------------- */

  useEffect(() => {
    fetchCorporateActions();

    const interval = setInterval(fetchCorporateActions, refreshInterval);

    return () => clearInterval(interval);
  }, []);

  /* -------------------- DERIVED DATA -------------------- */

  const filteredActions: CorporateAction[] = filterActions(actions);

  const sortedActions = sortByField(filteredActions, "issuer");

  /* -------------------- RENDER -------------------- */

  return (
    <div>
      <h2>Corporate Actions Dashboard</h2>

      <p>User Role: {userRole}</p>

      <select value={filterType} onChange={handleFilterChange}>
        <option value="ALL">All</option>
        <option value="DIVIDEND">Dividend</option>
        <option value="MERGER">Merger</option>
        <option value="SPLIT">Split</option>
      </select>

      {loading && <p>Loading...</p>}

      <table border={1}>
        <thead>
          <tr>
            <th>Issuer</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {sortedActions.map((action) => (
            <tr key={action.id}>
              <td>{action.issuer}</td>
              <td>{action.caType}</td>
              <td>{action.amount ?? "-"}</td>
              <td>{action.status}</td>

              <td>
                {userRole === "ADMIN" && (
                  <>
                    <button
                      onClick={() =>
                        updateStatus(action.id, CAStatus.Approved)
                      }
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(action.id, CAStatus.Rejected)
                      }
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CorporateActionDashboard;
```

---

# Things You Learn From This One Component

### 1️⃣ Props typing

```ts
interface DashboardProps
```

---

### 2️⃣ Enum

```ts
enum CAStatus
```

---

### 3️⃣ Union types

```ts
type CAType = "DIVIDEND" | "MERGER" | "SPLIT"
```

---

### 4️⃣ API response typing

```ts
interface ApiResponse<T>
```

---

### 5️⃣ Generic functions

```ts
function sortByField<T>()
```

---

### 6️⃣ Function types

```ts
type FilterFunction
```

---

### 7️⃣ State typing

```ts
useState<CorporateAction[]>([])
```

---

### 8️⃣ Event typing

```ts
React.ChangeEvent<HTMLSelectElement>
```

---

### 9️⃣ Optional fields

```ts
amount?: number
```

---

### 🔟 Type casting

```ts
e.target.value as CAType
```

---

# What Real React + TypeScript Projects Usually Have

Typical folder structure:

```
types/
   corporateActions.ts
   api.ts

components/
   Dashboard.tsx
   Table.tsx

hooks/
   useCorporateActions.ts
```

Types are usually **moved outside components**.

---

💡 Since you are already working with **large React + Django financial apps**, the **next thing you should learn** is:

**The 10 TypeScript patterns used in large React production codebases (Netflix / Stripe style).**

If you want, I can show that next — it will make TypeScript **10x easier in real projects**.
