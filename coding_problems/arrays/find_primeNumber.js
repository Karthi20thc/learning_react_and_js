// js

// A prime number is a number greater than 1 that is divisible only by 1 and itself.

// How it works

// Numbers ≤ 1 are not prime.
// Loop from 2 to num - 1.
// If any number divides num, it is not prime.

function isPrime(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false

// so the loop max iteration is the num itself - ex num -7 iteration runs from 2 to 6