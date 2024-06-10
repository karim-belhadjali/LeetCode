/*
String Encode and Decode

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]

Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]

Constraints:

    0 <= strs.length < 100
    0 <= strs[i].length < 200
    strs[i] contains only UTF-8 characters.

*/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedstring = ""
        for (const str of strs) {
            if (str === "") console.log(str.length);
            encodedstring = encodedstring + `${str.length}#${str}`
        }
        return encodedstring
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
        while (i < str.length) {
            let j = i
            while (str[j] != "#")
                j++
            let size = parseInt(str.slice(i, j))
            let extractedString = str.slice(j + 1, j + 1 + size)
            res.push(extractedString)
            i = j + 1 + size
        }

        return res
    }
}

const solution = new Solution()

console.log(solution.encode(["", "neet", "code", "love", "you"]));
console.log(solution.decode("4#neet4#code4#love3#you"));
