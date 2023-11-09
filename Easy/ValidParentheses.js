/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // declare a stack to contain the valid paretheses that wil test on
    let stack = []

    // we loop the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        let lastItem = stack[stack.length - 1]
        // if the char is an opening parenthese then we push it to the stack
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
            continue;
        }
        // in this case it a closing bracket
        // if the closing bracket doesn't match the last opening bracket we return false 
        // else we remove the last opening bracket

        if (!stack.length ||
            (char === ')' && lastItem !== '(') ||
            (char === '}' && lastItem !== '{') ||
            (char === ']' && lastItem !== '[')
        ) return false;
        else stack.pop();
    }
    if (stack.length > 0) return false

    return true

};

console.log(isValid("{[]}"));