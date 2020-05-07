<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script>
                
let count = 0;
let zangvac = [2,3,6,8,9,11,15];
zangvac.forEach(i=>{if(i%3==0){count+=i;}});
let newzangvac=zangvac.filter(i=> (i%3==0));
console.log(zangvac);
console.log(newzangvac);
console.log(count);

    </script>
    
</body>
</html>
