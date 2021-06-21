/** leetcode 1528 sort
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
//1 get the array of string
//2 get the value from array to string



var restoreString = function(s, indices) {
    let new_s=[];
    let result="";

    //1 get the array of string
    for(let i=0;i<s.length;i++){
        
        new_s[indices[i]]=s[i];
      
    }
    
    
    //2 get the value from array to string

     for(let i=0;i<s.length;i++){
     result+=new_s[i];
     }
    return result;
};
