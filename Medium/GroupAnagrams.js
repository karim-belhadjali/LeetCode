/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

 

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.


*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // the idea is to create a map that hold keys than we can test similarity on
    // to keep the complexity low by gooing through the table once

    // cycle thourgh the array once
    // on each item we will create an array of chars count from 1 to 26 
    // we will use this array as a key to the map
    // if the key exist we will add the item to the array
    // if the key does not exisit hen we well add a new key to the map
    // at the end we will return the values 
    let countMap = new Map();

    for (const word of strs) {
        let count = Array(26).fill(0)
        for (const char of word) {
            count[char.charCodeAt() - 97]++;
        }
        const key = count.join(',');
        if (countMap.has(key)) countMap.set(key, [...countMap.get(key), word])
        else (countMap.set(key, [word]))
    }

    return [...countMap.values()]


};

console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]))