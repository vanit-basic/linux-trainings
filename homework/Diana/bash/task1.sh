#!/bin/bash
read name
paths='echo $PATH | sed 's/:/\n/g' `
final_path=""
main() {
        for i in $paths; do
                command_path=$i/$name
                test -f $command_path
                if [ $? -eq 0 ]
                then
                        final_path="$command_path"
                        break;
                fi;
        done
        if [ "$final_path" != ""]
        then
                echo $final_path
        else
                echo "Command not found"
        fi;
}
main
