package strings.leetcode.TwoPointers.removeDuplicatesSortedArray;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
public class RemoveDuplicatesFromSortedArray {

    public static void main(String[] args) {

        // int[] nums = {0,0,1,1,1,2,2,3,3,4};
        List<Integer> nums = new ArrayList<>(Arrays.asList(0, 0, 1, 1, 1, 2, 2, 3, 3, 4));

        System.out.println(removeDuplicates(nums));
    }

    public static int removeDuplicates(List<Integer> nums) {

        int slow = 0;
        int fast = 1;
        int numSize = nums.size();

        while(fast < numSize){

        }
        return -1;
    }
}
