package leetcode.TwoPointers.moveZeros;

import java.util.Arrays;

public class MoveZerosAnimation {

    public static void main(String[] args) {
        int[] nums = {0, 1, 0, 3, 12};
        moveZeroes(nums);
    }

    public static void moveZeroes(int[] nums) {
        int slow = 0;

        for (int fast = 0; fast < nums.length; fast++) {

            printState(nums, slow, fast);

            if (nums[fast] != 0) {
                int temp = nums[slow];
                nums[slow] = nums[fast];
                nums[fast] = temp;

                slow++;
            }

            sleep();
        }

        System.out.println("Final: " + Arrays.toString(nums));
    }

    static void printState(int[] nums, int slow, int fast) {
        System.out.println(Arrays.toString(nums));

        for (int i = 0; i < nums.length; i++) {
            if (i == slow && i == fast) System.out.print(" SF ");
            else if (i == slow) System.out.print(" S  ");
            else if (i == fast) System.out.print(" F  ");
            else System.out.print(" .  ");
        }
        System.out.println("\n");
    }

    static void sleep() {
        try { Thread.sleep(700); } catch (Exception e) {}
    }
}