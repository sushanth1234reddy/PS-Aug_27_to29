let input=[538, 111, 200, 652];
let output=[];
for(i of input){
    let str=String(i);
    c=0;
    for(j=0;j<str.length-1;j++){
        if(str[j+1]<str[j]){
            c++;
        }
    }
    output.push(str.length-1==c)
}
console.log(output);