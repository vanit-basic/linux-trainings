<!Doctype html>
<html>
        <head>
                <title>JS Task3</title>
                <meta charset='utf-8'>
	</head>
	<body>
	<script>
        let arr = [1,2,3,1,4,6,8,2,6];
		function arrInterval(arr)
	{
		indexStart=0;
		maxLength=0;
		for(let i=0; i < arr.length; i++)
		{
			if(i+1<=arr.length)
				if(arr[i]>arr[i+1])
				{
					indexEnd=i;
					if(maxLength<indexEnd-indexStart+1)
					maxLength=indexEnd-indexStart+1;
					indexStart=i+1;
				}
		}
    }
		console.log(maxLength);     
    
</script>
        </body>
