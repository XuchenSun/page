/**leetcode1281
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const n_string=n.toString();

    // console.log(n_string); debug
    let product=1;
    let sum=0;

    for (let i=0;i<n_string.length;i++){
        product*=n_string[i];

        sum+=parseInt(n_string[i]);
    }
    //  console.log(product);debug
    //  console.log(sum);debug

    return product-sum;

};