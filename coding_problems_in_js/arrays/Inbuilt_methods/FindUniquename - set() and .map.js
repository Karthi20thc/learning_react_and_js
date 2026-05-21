const orders = [
    {
        orderId: 101,
        customer: "Karthik",
        items: [
            { name: "Laptop", price: 80000, quantity: 1 },
            { name: "Mouse", price: 500, quantity: 2 }
        ],
        status: "delivered",
        rating: 5
    },
    {
        orderId: 102,
        customer: "Rahul",
        items: [
            { name: "Keyboard", price: 2000, quantity: 1 }
        ],
        status: "pending",
        rating: null
    },
    {
        orderId: 103,
        customer: "Priya",
        items: [
            { name: "Monitor", price: 15000, quantity: 2 }
        ],
        status: "delivered",
        rating: 4
    },
    {
        orderId: 104,
        customer: "Karthik",
        items: [
            { name: "USB Cable", price: 300, quantity: 3 }
        ],
        status: "cancelled",
        rating: null
    }
];

// ! wrong - There is no set() method on arrays in JavaScript.
// console.log(orders.set((e, index) => {
//     return e.customer
// }))


// console.log(new Set(orders)) // Does nothing

// console.log(orders.map((e, index) => e.customer)) // [ 'Karthik', 'Rahul', 'Priya', 'Karthik' ]

console.log(new Set(orders.map((e, index) => e.customer))) // Set(3) { 'Karthik', 'Rahul', 'Priya' }

// Convert back to array
console.log([...new Set(orders.map((e, index) => e.customer))])
