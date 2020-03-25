#!/bin/bash


read COMMAND

   echo $PATH | sed "s/:/`echo  '\f'`/g"
         for i in $PATH; do
                 if[$? -eq 0] then
        [ -x $i/$COMMAND ] && echo $i/$COMMAND;

      else
              echo "command is not found"
                 done  

