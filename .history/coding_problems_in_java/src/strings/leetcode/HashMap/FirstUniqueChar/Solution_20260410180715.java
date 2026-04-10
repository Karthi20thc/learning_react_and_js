package strings.leetcode.HashMap.FirstUniqueChar;


import java.util.HashMap;
import strings.leetcode.HashMap.frequency.Frequency;



public class Solution {
    public static void main(String[] args) {
        String s = "kkarrt";
        HashMap<Character, Integer> myhashmap = Frequency.charFrequency(s);
        System.out.println(firstUnique(s,myhashmap ));

       


    }

    public static Character firstUnique(string, hashmap){


        for(char ch: string.toCharArray()){
            // System.out.println(ch);
            // For each character:  Check its count in the map If count == 1 → return that character immediately

            if(myhashmap.get(ch) == 1){
                return ch;
            }
        }
    }
}
