#!/bin/bash
echo "command name"
read name
$name
if [ $? -eq 0 ]
then echo $PATH > test1
	sed 's/:/\n/g' test1 > test2
	for i in `cat test2`; do echo "$i/$name"; done > res
	for i in `cat res`; do
		$i 2> /dev/null
		if [ $? -eq 0 ]
		then	
			echo $i	
		fi	
	done	
else 
	echo "not found"
fi	
