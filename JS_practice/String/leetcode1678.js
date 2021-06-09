/**1678
 * @param {string} command
 * @return {string}
 */
// replace ()->o and (al)->al
var interpret = function(command) {


    command= command.replace(/\(\)/g,"o");
    command= command.replace(/\(al\)/g,"al");

    return command;
};

var result= interpret("asdfahl()(al)");//test if it correct
console.log(result);//test if it correct