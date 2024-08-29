arr=[23, 33, 200, 785]
unq="";
dup="";
for (i of arr){
    istr = String(i).split("").map(Number)
    emp=[]
    for (j of istr){
        // console.log(j)
        if(!emp.includes(j)){
            emp.push(j)
        }
    }
    // console.log(emp)
    for(x of emp){
        c=0;
        for(z of istr){
            if(x==z){
                c++;
            }
        }
        if(c==1){
            unq=unq+x+" "
        }
        else{
            dup=dup+x+""
        }
    }
}
console.log(dup) 

