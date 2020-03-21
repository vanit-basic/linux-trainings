#!/bin/bash

read name

paths=`echo $PATH | sed 's/:/\n/g'`
path=""


        for i in $paths; do
                p=$i/$name
                test -f $p
                if [ $? = 0 ]
                then
                path="$p"
                        break;
                fi;
        done

        if [ "$path" != "" ]
        then
                echo $path
        else
                echo "command is not found"

