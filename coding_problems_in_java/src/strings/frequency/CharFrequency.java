package strings.frequency;

import java.util.HashMap;

public class CharFrequency {

      public static HashMap<Character, Integer> charFrequency(String str) {
        
        HashMap<Character, Integer> hashmap = new HashMap<>();

        for (char ch : str.toCharArray()) {
           
            if(!hashmap.containsKey(ch)){
                hashmap.put(ch, 1);
            }
            else{
                hashmap.put(ch, hashmap.get(ch) + 1);
            }
        }

        return hashmap;
    }

    public static void main(String[] args) {
        System.out.println(charFrequency("kkart"));
    }
}
