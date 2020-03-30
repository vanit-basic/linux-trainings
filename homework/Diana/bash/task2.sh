#!/bin/bash


echo "The current directory is:"
pwd
echo "The user logged in is"
whoami

echo cat /proc/cpuinfo | grep ' cpu processor ' | wc -l

echo grep -i "cpu cores" /proc/cpuinfo | awk ' {print $2 $4}'

CPU=$( awk '/model name/ {print $5}' < /proc/cpuinfo )

kernel_version=$( awk '{ print $3 }' /proc/version } 

