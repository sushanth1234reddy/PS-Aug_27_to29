let arr=[865,89,210,970,700]
let res=[]
for(i of arr){
    let str=String(i);
    c=0;
    for(j=0;j<str.length-1;j++){
        if(str[j+1]>str[j])// for checking increasing order 
        {
            c++;
        }
    }
    res.push(str.length-1==c);


}
console.log(res);