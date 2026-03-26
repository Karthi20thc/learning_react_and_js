package strings.reverse;

import java.util.HashMap;

public class CharFrequency {

      public static HashMap<Character, Integer> reverseArray(String str) {
        
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
    //  Two pointer
    public static String reverseString(String str){


        return str;
    }

    public static void main(String[] args) {
        System.out.println(reverseArray("kkart"));

        System.out.println(reverseString("hello"));
    }
}
