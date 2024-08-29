let input=[1,2,-1,1,3,1];
console.log(input)
let emp=[];
let NonRepeatingNumbers=[];
for(i of input){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
// console.log(emp);
for(i of emp){
    let c=0;
    for(j of input){
        if(i==j){
            c++;
        }
    }
    if(c==1){
        NonRepeatingNumbers.push(i)
    }
}
let output=NonRepeatingNumbers.join(",")
console.log(output);