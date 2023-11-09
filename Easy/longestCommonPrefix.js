/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // we decalre a result variable we a default value of ""
    let longestPrefix = ""
    // the first item in tha array will be the key comapraison
    const firstString = strs[0]
    // loop the array as many times as the length of the first string
    for (let i = 0; i < firstString.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (firstString[i] !== strs[j][i]) return longestPrefix
        }
        longestPrefix += firstString[i]
    }

    return longestPrefix;

};


// better Solution because of .every from javascript to run the same condition on the all the items in the array
var longestCommonPrefix = function (strs) {
    let output = "";
    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every(str => str[i] === strs[0][i])) output += strs[0][i];
        else break;
    }
    return output;
};