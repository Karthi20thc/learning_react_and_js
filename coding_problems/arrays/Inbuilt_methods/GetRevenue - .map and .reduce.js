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

// Revenue = price × quantity

const calcRevenve = (orders) => {

    return orders.map((ele, index) => {
        // here curly braces point the object
        return {
            ...ele,
            // here curly points to code block. Remeber reduce always converts a array of elements to singe value, it does not reutn array
            revenue: ele.items.reduce((acc, currentValue, index) => {
                return acc + (currentValue.price * currentValue.quantity)
            }, 0)
        }

    })

}

console.log(calcRevenve(orders))

