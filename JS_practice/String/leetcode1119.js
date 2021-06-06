/**1119
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    var newS="";
    for(let i=0;i<s.length;i++){
        if(s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u"){ s[i]=""; }



        else
            newS=newS+s[i];
    }
    return newS;
};