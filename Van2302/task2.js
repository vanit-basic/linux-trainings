<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script>

let arr = [1,2,3,4,5,6,7,8];
console.log(arr);
			for(let i=0; i < arr.length; i=i+2)
			[arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        console.log(arr);

    </script>
    
</body>
</html>
