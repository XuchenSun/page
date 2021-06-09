/**1165
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

//step1 calculate the value of index of first string in word(keyboard.indexOf(word[0]))
//step2 calculate the abs value of connected string in word
// step3 add them
var calculateTime = function(keyboard, word) {
    let value=0;

   for(let i=0;i<word.length;i++){



           if (i===0){value=keyboard.indexOf(word[0]);
           console.log("i==0 "+value);}//check if correct
           else

           {
               let abs=keyboard.indexOf(word[i])-keyboard.indexOf(word[i-1]);
               abs=Math.abs(abs);
               console.log("When i equal to"+i+"  abs="+abs);// check if correct
               value=value+abs;}

    }



    console.log(value);// test

    return value;
};
calculateTime('abcdefghijklmnopqrstuvwxyz','cba');//test if it is correct
