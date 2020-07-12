// Hackerrank
// https://www.hackerrank.com/challenges/js10-arrays/problem
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    return [...new Set(nums)].sort((n,n2)  => n < n2)[1];
}
