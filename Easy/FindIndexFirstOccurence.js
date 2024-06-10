/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

 

Constraints:

    1 <= haystack.length, needle.length <= 104
    haystack and needle consist of only lowercase English characters.

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//My Valid solution 
var strStr = function (haystack, needle) {
    // we loop through the haystack
    // the index should be haystack.length - needle.length
    // if the current char is equal to first char of needle then we loop the length of needle
    // if the current char of haystack equal to the char of current index of needle then we continue looping
    // if all the chars are equal then we return the current index
    // if not we exit the second for loop
    // if we exit the loop we should return -1
    if (haystackLength < needleLength) return -1;
    for (let index = 0; index < haystack.length; index++) {
        if (haystack[index] !== needle[0]) continue;
        let charFound = haystack[index];
        for (let j = 1; j < needle.length; j++) {
            if (haystack[index + j] !== needle[j]) break;
            charFound += haystack[index + j]
        }
        if (charFound === needle) return index
    }
    return -1
};

/**
 * Solution #1 - Built-in function
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

/**
 * Solution #2 - RegExp
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const regex = new RegExp(needle);
    return haystack.search(regex);
};


/**
 * Solution #4 - Loop through haystack and compare substrings - Time: O(N), Space: O(1)
 * Loop through the haystack. For each character, loop through the needle and compare.
 * If they are all equal, return the index of the haystack
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let haystackLength = haystack.length;
    let needleLength = needle.length;
    if (haystackLength < needleLength) return -1;

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        if (haystack.substring(i, needleLength) === needle) return i;
    }
};
