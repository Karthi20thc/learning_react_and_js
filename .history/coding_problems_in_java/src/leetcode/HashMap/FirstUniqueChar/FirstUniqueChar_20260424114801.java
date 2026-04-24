import java.util.HashMap;





public class FirstUniqueChar {
    public static void main(String[] args) {
        String s = "kkarrt";
        HashMap<Character, Integer> myhashmap =  new Frequency.charFrequency(s);
        System.out.println(firstUnique(s, myhashmap));
        // System.out.println(Frequency.charFrequency(s));
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