#!/bin/bash


cat /etc/issue
cat /proc/cpuinfo | less
echo $USER
grep "Model" /proc/cpuinfo | sort -u
grep -i  "cpu cores" /proc/cpuinfo | awk '{ print $2}'


screenfetch
