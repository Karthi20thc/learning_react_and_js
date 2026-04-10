package strings.leetcode.HashMap.FirstUniqueChar;


import java.util.HashMap;
import strings.leetcode.HashMap.frequency.Frequency;



public class Solution {
    public static void main(String[] args) {
        String s = "kkarrt";
        // System.out.println(Frequency.charFrequency("kkarrt"));

        HashMap<Character, Integer> myhashmap = Frequency.charFrequency(s);

        for(char ch: s.toCharArray()){
            // System.out.println(ch);
            // For each character:  Check its count in the map If count == 1 → return that character immediately

            if(myhashmap.get(ch) === 1){
                return ch;
            }
        }


    }
}
