let input="4 2 8 6 15 5 9 20";
console.log(input)
let arr=input.split(" ").map(Number);
let result="";
arr.sort((a,b)=>a-b);
// console.log(arr);
let inc=[];
let dec=[];
for(i=0;i<arr.length;i++){
    if(i<(arr.length/2)){
        inc.push(arr[i]);
    }
    if(i>=(arr.length/2) && i<arr.length){
        dec.push(arr[i])
    }
}

dec.sort((a,b)=>b-a);

for(i of dec){
    inc.push(i);
}

for(i of inc){
    result=result+i+" ";
}
console.log(result.trim())