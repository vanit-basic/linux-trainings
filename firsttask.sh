#!/bin/bash

echo $PATH | sed 's/:/\n/g' > pathlist

check() {
       id=0
       for i in `cat pathlist`;do
                test -f $i/$1
                if [ $? = 0 ]
                then
			echo $1
			id=1
			break;
        	fi;
	 done
	 if [ $id = 0 ]
	 then
             echo "command is not found"
         fi;
     
        }
check $1

