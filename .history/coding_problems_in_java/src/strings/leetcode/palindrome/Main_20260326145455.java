package strings.leetcode.palindrome;

public class Main {

    //  leetcode 125
    public static boolean validPalindrome(String str){

        int lpi = 0;
        int rpi = str.length()-1;

        while(lpi < rpi){
            if(str.charAt(lpi) != str.charAt(rpi)){
                return false;
            }

            lpi++;
            rpi--;
        }
        return true;
    }



    public static void main(String[] args) {
         System.out.println(validPalindrome("aba"));
    }
}
