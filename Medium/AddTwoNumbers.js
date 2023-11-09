/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

 

Constraints:

    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.

 */

/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //declare a new linked list to return
    let holderList = new ListNode(0)
    // declare a new node to start the operation on
    let actionList = holderList
    let carry = 0
    // we'll loop through both linked lists at once
    // we break the loop if either or both of the next value of the list is null
    while (l1 || l2) {
        // we calculate the sum of both values
        let sum = l1?.val + l2?.val + carry
        console.log(sum);
        // if the sum is above 9 then we have a carry for next operation
        if (sum < 9) {
            // we add the value to the NEXT currentnode
            actionList.next = new ListNode(sum)
            actionList = actionList.next
        } else {
            // we add the value to the NEXT currentnode
            actionList.next = sum % 10
            actionList = actionList.next
            carry = sum / 10
        }
        l1 = l1.next
        l2 = l2.next
    }

    return holderList.next
    // we return the created linkedlist
};