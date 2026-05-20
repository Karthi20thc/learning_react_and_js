package loops.arrays;

import java.util.Arrays;

public class ArrayLoops {

    public static void main(String[] args) {

        int[] arr = {10, 20, 30, 40, 50};

        // ---------------------------------------------------
        // 1. Normal for loop
        // ---------------------------------------------------
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        // ---------------------------------------------------
        // 2. Reverse for loop
        // ---------------------------------------------------
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.println(arr[i]);
        }

        // ---------------------------------------------------
        // 3. Enhanced for loop (for-each)
        // ---------------------------------------------------
        for (int value : arr) {
            System.out.println(value);
        }

        // ---------------------------------------------------
        // 4. While loop
        // ---------------------------------------------------
        int i = 0;

        while (i < arr.length) {
            System.out.println(arr[i]);
            i++;
        }

        // ---------------------------------------------------
        // 5. Do while loop
        // ---------------------------------------------------
        int j = 0;

        do {
            System.out.println(arr[j]);
            j++;
        } while (j < arr.length);

        // ---------------------------------------------------
        // 6. Arrays.stream()
        // ---------------------------------------------------
        Arrays.stream(arr).forEach(System.out::println);
    }
}