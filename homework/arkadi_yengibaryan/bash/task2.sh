#!/bin/bash

info() {
        cat /dev/null > info
        cat /etc/os-release | grep -w 'VERSION' | awk -F "\"" '{ print $2 }' > info
        w | awk '{ print $1 }' | sed '1,2d' >> info
        cat /proc/cpuinfo | grep 'model name' | uniq | awk -F ": " '{ print $2 }' >> info
        cat /proc/cpuinfo | grep 'cpu cores' | wc -l >> info
        hostnamectl | grep -i 'kernel' | awk -F ": " '{ print $2 }' >> info
        cat info
}

main() {
        info
}

main

