package leetcode.TwoPointers.reverse;

import java.util.ArrayList;
import java.util.List;

public class UsingTwoPointers {
    // leetcode 344
   public static ArrayList<Character> reverseArray(ArrayList<Character> arrlist){

        // two pointers
        int i = 0;
        //  we have to use length only for array not arraylist
        int j = arrlist.size()-1;
        // System.out.println(j);

        while( i < j){
            char temp = arrlist.get(i);

            // set j value to i
            arrlist.set(i, arrlist.get(j));

            //set  i(temp) to j
            arrlist.set(j, temp);

            // System.out.println(temp);
            i++;
            j--;
        }


        return arrlist;
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
        System.out.println(reverseArray(myArr));

        System.out.println(reverseString("hello"));
    }
}
