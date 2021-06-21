/**leetcode 7 
 * @param {number} x
 * @return {number}
 */
//1 get the sign
//2 change number to string
//3 reverse
//4 if it is out of range return 0
var reverse = function(x) {
    
    //1 get the sign
    const signX=Math.sign(x);
   // console.log(signX); test if it can work
    
    //2 change to string
    x=Math.abs(x);
    const stringX=x.toString();
    let result="";
    
    //3 reverse
    
    for(let i=stringX.length-1;i>=0;i--){
        result=result+stringX[i];
    }
    result=signX*Number(result);
    
    if(Math.abs(result)>(Math.pow(2,31))){return 0;}
    else if (result===Math.pow(2.31)){return 0;}
    else return result;
   
};
