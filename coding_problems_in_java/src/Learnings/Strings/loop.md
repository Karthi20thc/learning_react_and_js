package loops.strings;

import java.util.Arrays;
import java.util.List;

public class StringLoops {

    public static void main(String[] args) {

        String str = "hello";

        // ---------------------------------------------------
        // 1. Normal for loop using charAt()
        // ---------------------------------------------------
        for (int i = 0; i < str.length(); i++) {
            System.out.println(str.charAt(i));
        }

        // ---------------------------------------------------
        // 2. Reverse loop
        // ---------------------------------------------------
        for (int i = str.length() - 1; i >= 0; i--) {
            System.out.println(str.charAt(i));
        }

        // ---------------------------------------------------
        // 3. Convert to char array and use enhanced for loop
        // ---------------------------------------------------
        for (char c : str.toCharArray()) {
            System.out.println(c);
        }

        // ---------------------------------------------------
        // 4. While loop
        // ---------------------------------------------------
        int i = 0;

        while (i < str.length()) {
            System.out.println(str.charAt(i));
            i++;
        }

        // ---------------------------------------------------
        // 5. Do while loop
        // ---------------------------------------------------
        int j = 0;

        do {
            System.out.println(str.charAt(j));
            j++;
        } while (j < str.length());

        // ---------------------------------------------------
        // 6. Java 8 chars() stream
        // ---------------------------------------------------
        str.chars().forEach(c -> System.out.println((char) c));

        // ---------------------------------------------------
        // 7. Split and loop
        // ---------------------------------------------------
        String[] arr = str.split("");

        for (String s : arr) {
            System.out.println(s);
        }
    }
}