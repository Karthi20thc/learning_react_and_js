package leetcode.HashMap.twoSum;

import java.util.Arrays;
import java.util.HashMap;

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
        int[] arrIndex = {};
        HashMap<Integer, Integer> myhashmap = new HashMap<>();

        for (int i = 0; i < nums.length - 1; i++) {
            System.out.println(nums.length);
            myhashmap.put(nums[i], i);
            System.out.println(myhashmap);
        }

        return arrIndex;
    }
}
