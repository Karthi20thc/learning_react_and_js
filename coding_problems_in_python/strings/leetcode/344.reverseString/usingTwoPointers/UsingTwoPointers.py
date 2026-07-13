class Solution:

    def reverseString(self, arr):
        # print(self)

        leftIndex = 0
        rightIndex = len(arr) - 1

        while leftIndex < rightIndex:
            temp = arr[leftIndex]
            arr[leftIndex] = arr[rightIndex]
            arr[rightIndex] = temp

            leftIndex += 1
            rightIndex -= 1

        return arr


input_arr = ["h","e","l","l","o"]

obj = Solution()                # create object
print(obj.reverseString(input_arr))  # call method