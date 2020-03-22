#!/bin/bash

grep -w "VERSION" /etc/os-release
echo "username:" $USER
grep "model" /proc/cpuinfo | sort | uniq
grep "cores" /proc/cpuinfo | sort | uniq
echo "kernel parametrs:" 
cat /proc/cmdline


