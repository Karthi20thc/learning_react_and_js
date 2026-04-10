import java.util.HashMap;
import strings.leetcode.HashMap.frequency.Frequency;

public class Solution {
    public static void main(String[] args) {
        String s = "kkarrt";
        HashMap<Character, Integer> myhashmap = Frequency.charFrequency(s);
        System.out.println(firstUnique(s, myhashmap));
    }

    public static Character firstUnique(String string, HashMap<Character, Integer> myhashmap) {
        for (char ch : string.toCharArray()) {
            if (myhashmap.get(ch) == 1) {
                return ch;
            }
        }
        return null; // if no unique character found
    }
}