Since you're using **React + Ant Design (antd)** in your project, here are the **most commonly used `columns` properties** available in the Ant Design `Table` component 👇

---

# ✅ Important Column Properties in Ant Design Table

Each object inside `columns` array can have these keys:

---

### 🔹 Basic Properties

| Property    | Type                            | Purpose                  |
| ----------- | ------------------------------- | ------------------------ |
| `title`     | ReactNode                       | Column header text       |
| `dataIndex` | string                          | string[]                 | Field name from `dataSource` |
| `key`       | string                          | Unique column identifier |
| `width`     | number                          | string                   | Set column width             |
| `align`     | `'left' \| 'center' \| 'right'` | Text alignment           |

---

### 🔹 Rendering & Customization

| Property       | Purpose                           |
| -------------- | --------------------------------- |
| `render`       | Custom cell rendering             |
| `ellipsis`     | Adds `...` when content overflows |
| `className`    | Add custom CSS class              |
| `onCell`       | Add props to each cell            |
| `onHeaderCell` | Add props to header cell          |

### Example

```js
{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  align: 'center',
  width: 150,
  render: (text, record, index) => (
      <span style={{ color: 'blue' }}>{text}</span>
  )
}
```

---

### 🔹 Sorting

| Property           | Purpose                |
| ------------------ | ---------------------- |
| `sorter`           | Enable sorting         |
| `sortOrder`        | Control sort order     |
| `defaultSortOrder` | Default sort direction |
| `sortDirections`   | Custom sort directions |

### Example

```js
{
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  sorter: (a, b) => a.age - b.age,
  defaultSortOrder: 'ascend'
}
```

---

### 🔹 Filtering

| Property         | Purpose                  |
| ---------------- | ------------------------ |
| `filters`        | Filter options           |
| `onFilter`       | Filter logic             |
| `filterMultiple` | Allow multiple selection |
| `filteredValue`  | Controlled filter value  |

### Example

```js
{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  filters: [
    { text: 'Mike', value: 'Mike' },
    { text: 'John', value: 'John' },
  ],
  onFilter: (value, record) => record.name.includes(value),
}
```

---

### 🔹 Fixed Columns

| Property | Purpose                                          |
| -------- | ------------------------------------------------ |
| `fixed`  | Fix column left or right (`'left'` or `'right'`) |

```js
{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  fixed: 'left'
}
```

---

### 🔹 Column Grouping

| Property   | Purpose                |
| ---------- | ---------------------- |
| `children` | Create grouped columns |

```js
{
  title: 'User Info',
  children: [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' }
  ]
}
```

---

### 🔹 Editable / Advanced Usage

| Property     | Purpose                                   |
| ------------ | ----------------------------------------- |
| `editable`   | Custom usage for editable tables          |
| `colSpan`    | Merge columns                             |
| `rowSpan`    | Merge rows                                |
| `responsive` | Show column only on specific screen sizes |

```js
{
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  responsive: ['md'] // visible only in medium+ screens
}
```

---

# 🔥 Most Commonly Used in Real Projects

From experience (especially since you're migrating from JSpreadsheet to table):

* `render`
* `sorter`
* `filters`
* `width`
* `align`
* `fixed`
* `ellipsis`
* `responsive`

---

If you want, I can next give you:

* ✅ Editable table columns setup
* ✅ Dynamic column generation
* ✅ Column hide/show toggle
* ✅ Server-side sorting & filtering setup (useful for Django backend)

Tell me which one you want 👌
