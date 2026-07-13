Let’s walk through a **small real example** that covers the **5 steps of an AI Engineer’s workflow** using **sample data**.

Example problem:

> Build an AI system that predicts **whether a bank transaction is Fraud or Not Fraud**.

---

# Step 1 — Collect & Prepare Data

Suppose we have transaction data like this:

| TransactionID | Amount | Country | Device | Fraud |
| ------------- | ------ | ------- | ------ | ----- |
| 1             | 200    | India   | Mobile | 0     |
| 2             | 5000   | USA     | Laptop | 1     |
| 3             | 100    | India   | Mobile | 0     |
| 4             | 7000   | Russia  | Laptop | 1     |
| 5             | 150    | India   | Tablet | 0     |

* **Fraud = 1**
* **Not Fraud = 0**

### Python Code (Data Loading)

```python
import pandas as pd

data = {
    "Amount": [200, 5000, 100, 7000, 150],
    "Country": ["India", "USA", "India", "Russia", "India"],
    "Device": ["Mobile", "Laptop", "Mobile", "Laptop", "Tablet"],
    "Fraud": [0, 1, 0, 1, 0]
}

df = pd.DataFrame(data)

print(df)
```

Output

```
Amount Country Device Fraud
200    India   Mobile   0
5000   USA     Laptop   1
100    India   Mobile   0
7000   Russia  Laptop   1
150    India   Tablet   0
```

---

# Step 2 — Data Preprocessing

AI models cannot understand **text like “India” or “Mobile”**.
We convert them to numbers.

```python
df = pd.get_dummies(df, columns=["Country", "Device"])

print(df)
```

Now it becomes something like:

| Amount | Country_India | Country_USA | Country_Russia | Device_Mobile | Device_Laptop | Device_Tablet | Fraud |
| ------ | ------------- | ----------- | -------------- | ------------- | ------------- | ------------- | ----- |
| 200    | 1             | 0           | 0              | 1             | 0             | 0             | 0     |

---

# Step 3 — Train the AI Model

Now we train a **Machine Learning model**.

```python
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

X = df.drop("Fraud", axis=1)
y = df["Fraud"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = RandomForestClassifier()

model.fit(X_train, y_train)
```

Now the **model learns patterns** like:

* High transaction amount → likely fraud
* Unusual country → likely fraud

---

# Step 4 — Evaluate the Model

Now we test how well the AI works.

```python
from sklearn.metrics import accuracy_score

predictions = model.predict(X_test)

accuracy = accuracy_score(y_test, predictions)

print("Accuracy:", accuracy)
```

Example output:

```
Accuracy: 0.80
```

Meaning **80% predictions are correct**.

---

# Step 5 — Deploy the AI Model (API)

Now we expose this model through an API so apps can use it.

Example using **FastAPI**.

```python
from fastapi import FastAPI
import numpy as np

app = FastAPI()

@app.post("/predict")
def predict(amount):

    input_data = np.array([[amount,1,0,0,1,0,0]])

    prediction = model.predict(input_data)

    return {"fraud_prediction": int(prediction[0])}
```

Now any application can call:

```
POST /predict
{
 "amount": 6000
}
```

Response:

```
{
 "fraud_prediction": 1
}
```

---

# Final Architecture

```
User
  ↓
Frontend (React)
  ↓
Backend API (FastAPI / Django)
  ↓
AI Model (Fraud Detection)
  ↓
Prediction
```

Example flow:

```
User makes transaction
        ↓
Backend sends transaction data to AI
        ↓
AI predicts fraud
        ↓
If fraud → block transaction
```

---

# Real Companies Doing This

* **PayPal** → Fraud detection
* **Netflix** → Movie recommendations
* **Amazon** → Product recommendations
* **Google** → Search ranking
* **Uber** → Price prediction

---

💡 Since you already work with **React + Django**, the real AI workflow for you would be:

```
Python Model
    ↓
Save model (.pkl)
    ↓
Django API
    ↓
React UI
```

---

If you want, I can also show you something **extremely useful for interviews**:

**How Netflix recommendation AI works (complete system design)** — it combines **AI + backend + frontend** and is a very popular AI engineer example.
