var s=[85,93,79,87,92,87,96,100,80,92,100,98,100,100,80,99,99,100,80];

function GPA(x1){
    x1=4-(3*(100-x1)*(100-x1))/1600
        console.log(x1);
        return x1
}
var GPAT=0;
for(let x=0;x<s.length;x++){
    GPAT=GPAT+GPA(s[x])
}

