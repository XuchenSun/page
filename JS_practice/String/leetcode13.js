/**leetcode13
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const form={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let result=0;
    for(let i=0;i<s.length;i++){
        result+=form[s[i]];
        
        if (i > 0 && form[s[i]] > form[s[i - 1]]) {
	
                  result -= 2 * form[s[i - 1]]
                }
        
        
    }
    return result;
};
