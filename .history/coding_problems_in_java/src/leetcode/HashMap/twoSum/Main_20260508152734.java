package leetcode.HashMap.twoSum;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// needed = target - nums[i]
public class Main {

    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;
        System.out.println(Arrays.toString(twoSum(arr, target)));
    }

    public static int[] twoSum(int[] nums, int target) {
        // int[] arrIndex = {};
        List<Integer> result = new ArrayList<>();
        HashMap<Integer, Integer> myhashmap = new HashMap<>();
        System.out.println(nums.length);

        for (int i = 0; i < nums.length; i++) {

            myhashmap.put(nums[i], i);
            System.out.println(myhashmap);
        }

        for (int i = 0; i < nums.length; i++) {
            int needed = target - nums[i];

            if (myhashmap.containsKey(needed)) {
                result.add(i);
            }
        }

        return arrIndex;
    }
}
