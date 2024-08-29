let num=1234;
let inn=String(num);
res="";
sum=0;
for(i=0;i<inn.length;i++){
    sum=sum+parseInt(inn[i]);

    if(i==inn.length-1)
    {
        res=res+inn[i]+"=";
    }
    else{
        res=res+inn[i]+"+";
    }


}
console.log(res+sum);