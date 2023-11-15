/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 

Constraints:

    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//First valid answer of O(n)
var productExceptSelf = function (nums) {
    // the ide is to create prefix and  suffix arrays
    // the prefix array represen the product of all the left elements a case
    // the sufix array represent the product of all the right cases of that element
    // the first and last element are special cases
    // in the prefix array the first valure will be 1
    // in the suffix array the last element will be 1
    // then will loop through the array to create an ouptput array in which each case is equal to suffix[i]* prefix[i]


    let output = []
    let prefix = []
    let suffix = []

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) prefix[i] = 1
        else {
            prefix[i] = prefix[i - 1] * nums[i - 1]
        }
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        if (j === nums.length - 1) suffix[j] = 1
        else {
            suffix[j] = suffix[j + 1] * nums[j + 1]
        }
    }

    for (let l = 0; l < nums.length; l++) {
        output[l] = suffix[l] * prefix[l]
    }
    return output
};

// Second Valid answwer but no of space complexity of O(1)

var productExceptSelf = function (nums) {
    // Set up an empty array as our result
    const result = []

    // Initialize a prefix tracker at 1
    let prefix = 1

    // Loop through the input array - for each position,
    // the result array should equal the prefix tracker.

    // Then, update the prefix tracker to be the product of itself,
    // multiplied by the input value at the position.
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }

    // Initialize a suffix tracker at 1
    let suffix = 1

    // Loop backwards through the array.
    // For each iteration, set the result array to be 
    // the product of itself multiplied by the suffix tracker.

    // Then, update the suffix tracker to be the product of itself,
    // multiplied by the input value at that position.
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }

    return result
};


// The result that I have after this training is To deal with all Array cases other than self we should create a suffix and prefix arrays to hold the data for us 