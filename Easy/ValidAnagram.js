/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//My valid response
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let dict = {}
    let dict2 = {}
    for (const char of s) {
        if (dict[char]) dict[char] += 1
        else dict[char] = 1

    }
    for (const char of t) {
        if (!dict[char]) return false
        if (dict2[char]) dict2[char] += 1
        else dict2[char] = 1
        if (dict[char] < dict2[char]) return false
    }
    return true
};


//One-liner (log n times slower) using sort:

var isAnagram = function (s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}