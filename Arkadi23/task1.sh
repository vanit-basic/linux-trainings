#!/bin/bash

echo "Command name"
read name
$name
if [ $? -eq 0 ]
then
	echo $PATH  > test
	sed 's/:/\n/g' test > new
	for i in `cat new`; do echo line : "$i/$name"; done > res
	for i in `cat res`; do
	       	$i 2> /dev/null
	       	if [ $? -eq 0 ]
		then
			echo $i
		fi;
	done
else
	echo "Not found"
fi
