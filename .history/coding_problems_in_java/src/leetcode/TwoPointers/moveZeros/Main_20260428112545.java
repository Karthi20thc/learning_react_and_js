package leetcode.TwoPointers.moveZeros;

import java.util.Arrays;

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

public class Main {
    public static void main(String[] args) {
        int[] arr = {0,1,0,3,12};
        moveZeroes(arr);
    }

    public static void moveZeroes(int[] nums) {
        int slow = 0;
        int fast = 0;
        int arrLength = nums.length;

        while(fast < arrLength -1){
            if(nums[fast] == 0){
                fast++;
            }
            else{
                nums[slow] = nums[fast];
                nums[fast] = 0;
                slow++;
                fast++;
            }
        }
        System.out.println(Arrays.toString(nums));
    }
}
