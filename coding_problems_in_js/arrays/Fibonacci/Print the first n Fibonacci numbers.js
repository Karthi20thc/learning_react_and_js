// The Fibonacci series is an infinite sequence of numbers starting with 0 and 1, where each subsequent number is the sum of the previous two (e.g., 0, 1, 1, 2, 3, 5, 8, 13, 21, ...). Named after the Italian mathematician Leonardo of Pisa, it follows the formula 


function fibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);

        let next = a + b;
        a = b;
        b = next;
    }
}

fibonacci(7);