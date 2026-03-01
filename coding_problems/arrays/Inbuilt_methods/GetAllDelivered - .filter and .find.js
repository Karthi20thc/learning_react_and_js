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

console.log(orders.filter((e, index) => {
    return e.status === 'delivered'
}))

console.log(orders.find((e, index) => {
    return e.status === 'delivered'
}))