package loops.hashmap;

import java.util.HashMap;
import java.util.Map;

public class HashMapLoops {

    public static void main(String[] args) {

        HashMap<String, Integer> map = new HashMap<>();

        map.put("A", 10);
        map.put("B", 20);
        map.put("C", 30);

        // ---------------------------------------------------
        // 1. Loop through keys
        // ---------------------------------------------------
        for (String key : map.keySet()) {
            System.out.println(key);
        }

        // ---------------------------------------------------
        // 2. Loop through values
        // ---------------------------------------------------
        for (Integer value : map.values()) {
            System.out.println(value);
        }

        // ---------------------------------------------------
        // 3. Loop through key-value pair (MOST IMPORTANT)
        // ---------------------------------------------------
        for (Map.Entry<String, Integer> entry : map.entrySet()) {

            System.out.println(
                    entry.getKey() + " : " + entry.getValue()
            );
        }

        // ---------------------------------------------------
        // 4. Iterator on entrySet
        // ---------------------------------------------------
        var iterator = map.entrySet().iterator();

        while (iterator.hasNext()) {

            Map.Entry<String, Integer> entry = iterator.next();

            System.out.println(
                    entry.getKey() + " : " + entry.getValue()
            );
        }

        // ---------------------------------------------------
        // 5. forEach() method
        // ---------------------------------------------------
        map.forEach((key, value) ->
                System.out.println(key + " : " + value)
        );

        // ---------------------------------------------------
        // 6. Stream API
        // ---------------------------------------------------
        map.entrySet()
                .stream()
                .forEach(entry ->
                        System.out.println(
                                entry.getKey() + " : " + entry.getValue()
                        )
                );
    }
}