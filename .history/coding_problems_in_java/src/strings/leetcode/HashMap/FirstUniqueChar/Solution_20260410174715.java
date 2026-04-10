package strings.leetcode.HashMap.FirstUniqueChar;


import java.util.HashMap;
import strings.leetcode.HashMap.frequency.Frequency;



public class Solution {
    public static void main(String[] args) {
        String s = "kkarrt";
        // System.out.println(Frequency.charFrequency("kkarrt"));

        HashMap<Character, Integer> myhashmap = Frequency.charFrequency(s);

        for(char ch: s.toCharArray()){
            System.out.println("ch");
        }


    }
}
