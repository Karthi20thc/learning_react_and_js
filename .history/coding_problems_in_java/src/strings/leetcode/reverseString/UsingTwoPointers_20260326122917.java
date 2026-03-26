package strings.leetcode.reverseString;

import java.util.ArrayList;
import java.util.List;

public class UsingTwoPointers {
    // This is were the function is called
   public static ArrayList<Character> solution(ArrayList<Character> arr){

        // two pointers
        int i = 0;
        //  we have to use length only for array not arraylist
        int j = arr.size()-1;
        // System.out.println(j);

        while( i < j){
            char temp = arr.get(i);

            // set j value to i
            arr.set(i, arr.get(j));

            //set  i(temp) to j
            arr.set(j, temp);

            // System.out.println(temp);
            i++;
            j--;
        }


        return arr;
    }

      //  Two pointer
    public static StringBuilder reverseString(String str) {
        StringBuilder mystr = new StringBuilder(str);
        int lpi = 0;
        int rpi = mystr.length()-1;

        while (lpi < rpi) {
            char temp = mystr.charAt(lpi);

            mystr.setCharAt(lpi, mystr.charAt(rpi));
            mystr.setCharAt(rpi, temp);

            lpi++;
            rpi--;
        }

        return mystr;
    }


    public static void main(String[] args) {
        ArrayList<Character> myArr = new ArrayList<>(List.of('h', 'e', 'l', 'l', 'o'));
        System.out.println(solution(myArr));
    }
}
