#!/bin/bash
read -p "enter something:" x
   echo $PATH | sed "s/:/\n/" > new.txt 
         for i in $PATH; do
                 if[$? -eq 0]; then'
        [ -x $i/$x ] && echo $i/$x;
                 else  echo "command is not found"
                fi
                 done
#go
