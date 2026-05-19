package Learnings.ArrayList;

import java.util.ArrayList;
import java.util.List;

public class UsefullArrayListMethods {

    public static void main(String[] args) {
        ArrayList<Character> myArr = new ArrayList<>(List.of('h', 'e', 'l', 'l', 'o'));

        // .set 
        myArr.set(0, 'z');

        // .get
        System.out.println(myArr.get(2));

        System.out.println(myArr);

    }
}
