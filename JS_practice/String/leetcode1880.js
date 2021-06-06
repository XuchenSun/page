
/**1880. Check if Word Equals Summation of Two Words
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

//  step1:change string to numerical value
// step2:change string to int
// step3:check if they match


var string_to_value=function (string){// change string to numerical value
    let new_string="";
    for(let i=0;i<string.length;i++){
        if(string[i]==="a"){
            new_string=new_string+"0";
        }
        else if(string[i]==="b"){
            new_string=new_string+"1";
        }
        else if(string[i]==="c"){
            new_string=new_string+"2";
        }
        else if(string[i]==="d"){
            new_string=new_string+"3";
        }
        else if(string[i]==="e"){
            new_string=new_string+"4";
        }
        else if(string[i]==="f"){
            new_string=new_string+"5";
        }
        else if(string[i]==="g"){
            new_string=new_string+"6";
        }
        else if(string[i]==="h"){
            new_string=new_string+"7";
        }
        else if(string[i]==="i"){
            new_string=new_string+"8";
        }
        else if(string[i]==="j"){
            new_string=new_string+"9";
        }
        else {

        }

    }
    let result=parseInt(new_string);// change string to int
    return result;
}





var isSumEqual = function(firstWord, secondWord, targetWord) {
    let result=false;
    let value1=string_to_value(firstWord);
    let value2=string_to_value(secondWord);
    let value3=string_to_value(targetWord);
    if (value3===value1+value2){result=true;}
    else {result=false;}
    return result;

};
