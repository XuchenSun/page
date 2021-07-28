var arr = [1,3, [2,3,4,5,6 [3, [4, 5]]], 6];
function flatten(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}
console.log(flatten(arr));


colortoRgb = function (color) {

    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

    color = color.toLowerCase();
    if (reg.test(color)) {

        if (color.length === 4) {
            var colorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
            }
            color = colorNew;
        }

        var colorChange = [];
        for (var i = 1; i < 7; i += 2) {
            colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "RGB(" + colorChange.join(",") + ")";
    } else {
        return color;
    }
};
console.log(colortoRgb("#ffffff"));
console.log(colortoRgb("#ffff3f"));



function change(num) {
    var str = num.toString()
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
    return str.replace(reg, "$1,")
}
console.log(change(99999999.99))