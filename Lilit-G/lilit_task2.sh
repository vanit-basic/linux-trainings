#!/bin/bash

grep -w -i "version" /etc/os-release
echo "username:" $USER
grep "model" /proc/cpuinfo | sort | uniq
grep "cores" /proc/cpuinfo | sort | uniq
hostnamectl | grep -i "kernel"

 
