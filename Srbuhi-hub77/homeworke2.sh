#!/bin/bash

cat /proc/cpuinfo | less
cat /etc/issue
echo $USER
grep -i  "cpu cores" /proc/cpuinfo | awk '{ print $2}'
uname -a
grep -i "Model" /proc/cpuinfo
grep -i "Version" /etc/os-release

screenfetch

