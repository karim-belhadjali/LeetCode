/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

 

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.

 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// My Valid First response
var topKFrequentFirst = function (nums, k) {
    // we should try to go through the array only once
    // we'll use a map to hold the number of occurence of each number
    // if the key with the current number exist then we should simply ++
    // if not we add it with one occurence
    // we'll use a map to hold the result
    // if the resultMap.size is already equal to k
    // we cycle through the result map to see if the current occurence of this number is higher than the exisitng than we replace it
    // if not we keep it




    let countMap = new Map();
    let resultMap = new Map();

    if (nums.length < k) return nums

    nums.forEach(number => {

        if (countMap.has(number)) countMap.set(number, countMap.get(number) + 1)
        else countMap.set(number, 1)
        if (resultMap.size < k) resultMap.set(number, countMap.get(number))
        else {
            if (!resultMap.has(number)) {
                if (k > 1) {
                    let minKey = resultMap.keys().next().value
                    let changed = false
                    for (const key of resultMap.keys()) {
                        if (resultMap.get(key) < countMap.get(number)) {
                            minKey = key;
                            changed = true;
                        }
                    }
                    if (changed) {
                        resultMap.delete(minKey)
                        resultMap.set(number, countMap.get(number))
                    }
                } else {
                    if (resultMap.get(resultMap.keys().next().value) < countMap.get(number)) {
                        resultMap.delete(resultMap.keys().next().value)
                        resultMap.set(number, countMap.get(number))
                    }
                }

            } else resultMap.set(number, countMap.get(number))


        }
    });

    return Array.from(resultMap.keys())

};
// fixed solution
var topKFrequent = function (nums, k) {
    // Algo Bucket Sort
    // the Idea of bucket sort is to create an array of length if nums array
    // inside each one will be an empty array
    // the index represent the occurence number and the value is an array of values that occure that number of times
    // after counting the occurences using a hashmap we add the number in the array that correspend to the index which the occurence of that key in the hashmap
    // then we loop through the array from the end and insert the values in the result array until the length of is equal to K

    let countMap = new Map();
    const bucket = Array.from({ length: nums.length + 1 }, () => []);
    let res = []
    nums.forEach(number => {
        countMap.set(number, (countMap.get(number) || 0) + 1)
    });
    for (const [key, value] of countMap.entries()) {
        bucket[value].push(key)
    }

    for (let index = bucket.length - 1; index >= 0; index--) {
        if (res.length >= k) return res;
        if (bucket[index].length > 0) {
            for (const number of bucket[index]) {
                if (res.length >= k) return res;
                res.push(number)
            }
        }
    }
};

console.log(topKFrequent([3, 0, 1, 0], 1));