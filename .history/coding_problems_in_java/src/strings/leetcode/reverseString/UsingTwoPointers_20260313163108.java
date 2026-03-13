package strings.leetcode.reverseString;

import java.util.ArrayList;
import java.util.List;

public class UsingTwoPointers {
    // This is were the function is called
   public static ArrayList<Character> solution(ArrayList<Character> arr){

        // two pointers
        int i = 0;
        //  we have to use length only for array not arraylist
        int j = arr.size();
        // System.out.println(j);

        while( i < j){
            char temp = arr.get(i);

            // set j to i
            arr.set(i, arr.get(j));

            //set j to i(temp)
            arr.set(j, temp);

            // System.out.println(temp);
            i++;
            j--;
        }


        return arr;
    }

    public static void main(String[] args) {
        ArrayList<Character> myArr = new ArrayList<>(List.of('h', 'e', 'l', 'l', 'o'));
        System.out.println(solution(myArr));
    }
}
