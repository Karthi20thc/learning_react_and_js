package strings.leetcode.reverseString;

import java.util.ArrayList;
import java.util.List;

public class UsingTwoPointers {
    // This is were the function is called
   public static ArrayList<String> solution(ArrayList<String> arr){

        // two pointers
        int i = 0;
        //  we have to use length only for array not arraylist
        int j = arr.size();
        // System.out.println(j);

        while( i < j){
            
        }


        return arr;
    }

    public static void main(String[] args) {
        ArrayList<String> myArr = new ArrayList<>(List.of("h", "e", "l", "l", "o"));
        System.out.println(solution(myArr));
    }
}
