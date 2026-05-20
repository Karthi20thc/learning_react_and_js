package loops.arraylist;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class ArrayListLoops {

    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<>();

        list.add("A");
        list.add("B");
        list.add("C");

        // ---------------------------------------------------
        // 1. Normal for loop
        // ---------------------------------------------------
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }

        // ---------------------------------------------------
        // 2. Reverse loop
        // ---------------------------------------------------
        for (int i = list.size() - 1; i >= 0; i--) {
            System.out.println(list.get(i));
        }

        // ---------------------------------------------------
        // 3. Enhanced for loop
        // ---------------------------------------------------
        for (String item : list) {
            System.out.println(item);
        }

        // ---------------------------------------------------
        // 4. While loop
        // ---------------------------------------------------
        int i = 0;

        while (i < list.size()) {
            System.out.println(list.get(i));
            i++;
        }

        // ---------------------------------------------------
        // 5. Iterator
        // ---------------------------------------------------
        Iterator<String> iterator = list.iterator();

        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // ---------------------------------------------------
        // 6. ListIterator
        // ---------------------------------------------------
        ListIterator<String> listIterator = list.listIterator();

        while (listIterator.hasNext()) {
            System.out.println(listIterator.next());
        }

        // ---------------------------------------------------
        // 7. Reverse using ListIterator
        // ---------------------------------------------------
        ListIterator<String> reverseIterator =
                list.listIterator(list.size());

        while (reverseIterator.hasPrevious()) {
            System.out.println(reverseIterator.previous());
        }

        // ---------------------------------------------------
        // 8. forEach()
        // ---------------------------------------------------
        list.forEach(System.out::println);

        // ---------------------------------------------------
        // 9. Stream API
        // ---------------------------------------------------
        list.stream().forEach(System.out::println);
    }
}