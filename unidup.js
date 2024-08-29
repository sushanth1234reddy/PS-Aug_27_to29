let input=[1,2,1,3,1,6,1,7];
let res=[];
let uni=[];
let dup=[];
for(i of input){
    if(!res.includes(i)){
        res.push(i);
    }
}
console.log(res);
for(o of res){
    c=0;
    for(p of input){
        if(o==p){
            c++;
        }
    }
    if(c==1){
        uni.push(o)
    }
    else{
        dup.push(o);
    }
}
console.log("unique values are"+uni);
console.log("duplicate values are"+dup)