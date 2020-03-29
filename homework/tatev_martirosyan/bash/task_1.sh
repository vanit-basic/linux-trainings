#!/bin/bash
p () {
echo $PATH | sed 's/:/\n/g' > t
id=0;
for i in `cat t`;do
	ls $i/$1 &> /dev/null
	if [ $? = 0 ]
		then 
			echo $i
			id=1
			break;
	fi;
done
if [ $id = 0 ]
	then
		echo  "Not found"
fi
}

p $1 
