
let a=[1,4,5,7,6,2];
let b;
for (i=0;i<a.length;i=i+2)
{   b=a[i];
    a[i]=a[i+1];
    a[i+1]=b;
}
console.log(a);

