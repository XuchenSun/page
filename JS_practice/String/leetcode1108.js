/**1108
 * @param {string} address
 * @return {string}
 */
/* define a new string
* loop for string one by one
* if it is ".", i add [.];
* connect new and old function
*/


var defangIPaddr = function(address) {

    let new_address = '';

    for(let i = 0; i < address.length; i++){// i is euqaul to index
        if (address[i] !== '.'){// search string one by one
            new_address =new_address+ address[i];// connect string
        } else {
            new_address = new_address+'[.]';// replace one by one
        }
    };
    return new_address;
}