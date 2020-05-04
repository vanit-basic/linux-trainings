function commonWord(string){
        let str = string.split(" ");
        let max=0;
        let arrSet = [... new Set(str)];
        let word;

        for(let i = 0; i<arrSet.length; i++){
                let count = 0;
                for(let j= 0; j< str.length;j++){
                        if (arrSet[i] === str[j]){
                                count++;
                                if ( max < count) {
                                        max = count;
                                        word = arrSet[i];
                                }
                        }
                }
        }
        return word;
}


function test(input, expected){
	let actual = commonWord(input);
	if (actual === expected)
	{
		console.log('ok');
	} else {
		console.log('error');
	}
}

test('it is a very very very nace musik of a day', 3);
test('the color of the rainbow is the red color green color yellow color purple color blue color skyblue color', 7)


