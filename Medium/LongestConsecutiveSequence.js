/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

 

Constraints:

    0 <= nums.length <= 105
    -109 <= nums[i] <= 109


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // i know going from left to right to handle everyhting except self
    // if know going through a grid and using set too get rid of multiples
    // buckket sort
    // I knows setting up a common key and adding the values in it
    // create set from array to be able to check on other values from the table

    // we declare first a varibale that will be the value of the longest squence called longest 
    // create a set from the nums table for easier search and less complexity
    // there's 3 keys about this problem
    // first:  identify a start of a sequence: a start of a squence is a number that doesn't have any precedent
    // Second: so we check if the current number of the loop have a number- 1 in the set if it does then we continue if it does then we have a start of a sequence
    // Third: once we have a sequence then we continue testing if the set have the next number +1 then we add 1 to current longest  if not we break the inner loop
    // once we're out the loop the new global longest value is the max between it and the current longest
    // and we repeat this for the whole nums table

    let longest = 0
    let numberSet = new Set(nums)

    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        if (numberSet.has(currentNumber - 1)) continue;
        let currentLongest = 1
        longest = Math.max(longest, currentLongest)
        validSequence = true;
        while (validSequence) {
            if (numberSet.has(currentNumber + 1)) {
                currentNumber = currentNumber + 1
                currentLongest += 1
                longest = Math.max(longest, currentLongest)
            } else {
                validSequence = false
            }
        }

    }

    return longest


};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))