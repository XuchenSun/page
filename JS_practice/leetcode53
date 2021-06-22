/**leetcode53
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxSum = nums[0];
    var maxValue = nums[0];
   for(var i = 1; i < nums.length; i++){
        let sum = nums[i]; 
        let tempSum = sum + maxValue;
        maxValue = Math.max(sum, tempSum) 
        maxSum = Math.max(maxValue, maxSum )
   } 
    
   return maxSum;
};
