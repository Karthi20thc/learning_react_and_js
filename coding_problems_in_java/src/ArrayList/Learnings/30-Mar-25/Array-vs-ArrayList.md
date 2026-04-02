// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Arrays;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        
        int[] arr = {10,5,20,8};
        // Array style indexing will not work out of the boundary, but will work for index 3
        // arr[4] = 4; java.lang.ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 4
                
        System.out.println(Arrays.toString(arr));
        ArrayList<Integer> myarr = new ArrayList<>(Arrays.asList(10, 20, 30, 40));

        myarr.add(4, 4);  
        System.out.println(myarr);
    }
}