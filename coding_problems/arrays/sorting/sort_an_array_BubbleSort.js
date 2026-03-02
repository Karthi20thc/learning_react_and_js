// Hint to implement Bubble sort, use Nested Loops

const sortArray = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }

    return arr;
};

const arr = [96, 34, 23, 96, 21, 1, 2, 54];
console.log(sortArray(arr));