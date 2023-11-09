/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

/**
 * @param {string} s
 * @return {number}
 */
//Valid answer
var romanToInt = function (s) {
    // loop the string or pass it to an array
    // create an object holding the value of the roman items in it
    // if the value is I X C and i+1 is not out of bound then we check the next value
    // if I and next value is V then we add 4 if next value is X then we add 9
    // if X and next value is L then we add 40 if next value is C then we add 90
    // if C and next value is D then we add 400 if next value is M then we add 900
    // But since s is guarrenteed to be a valid roman we don't need to check the value of the next item 
    // if the next item is bigger than the current item we subrtract the and add them to the result and skip one index
    let output = 0;
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && sym[s[i + 1]] > sym[s[i]]) {
            output += sym[s[i + 1]] - sym[s[i]]
            i++
        } else {
            output += sym[s[i]]
        }
    }

    return output

};
