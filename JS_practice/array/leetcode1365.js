/**leetcode 1365
 * @param {number[]} nums
 * @return {number[]}
 */
// use two for loop to calculate the smaller number
// use array.push to get the value of smaller number
var smallerNumbersThanCurrent = function(nums) {
    let array_of_smaller_number=[];
    let count=0;
    
    for(let i=0;i<nums.length;i++){
        
        for(let j=0;j<nums.length;j++){
           if(nums[j]<nums[i]){count++;}
        
        }
        array_of_smaller_number.push(count);// push count into array one by one when the end of loop of j
        count=0;// refresh the count as 0
    }
 
         
       
   // console.log(array_of_smaller_number);// test if it correct
    return array_of_smaller_number;
    
};
