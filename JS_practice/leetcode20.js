/**leetcode 20
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length == 0) return true; //empty string is valid
    let stack = [];
    for (let i = 0; i < s.length; i++){
        if (s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i]);// push value into stack
        }
        else{
            if (stack.length == 0) return false;
            let value = stack.pop();// remove the last value
            if ((value != '(' && s[i] == ')') || (value != '{' && s[i] == '}') || (value != '[' && s[i] == ']')) return false;
        }
    }
    return stack.length == 0;
};
