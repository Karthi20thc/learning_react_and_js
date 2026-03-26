package strings.loopMethods;

import strings.frequency.CharFrequency;

public class Ex1 {

    public static void main(String[] args) {

        String str = "hello";

        // Using charAt() with normal for loop
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            System.out.println(ch);
        }

        System.out.println("-------------");

        // Using toCharArray() + enhanced for loop
        for (char ch : "str".toCharArray()) {
            System.out.println(ch);
        }

        System.out.println("-------------");

        // using forEach
        str.chars().forEach(c -> System.out.println((char) c));

        System.out.println("-------------");


        // using other class methods here...
        //! WRONG --> System.out.println(CharFrequency("kkart"));
        // CORRECT
        System.out.println(CharFrequency.charFrequency("kkart"));

    }
}
