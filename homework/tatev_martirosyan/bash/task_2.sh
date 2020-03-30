#!/bin/bash
echo "User:" `whoami`
echo "OS type:" `cat /proc/sys/kernel/ostype`
echo "Kernel version:" `cat /proc/sys/kernel/osrelease`
echo "OS version:" `cat /proc/sys/kernel/version | awk '{print $1}'`
echo "CPU cores:" `grep "cpu cores" /proc/cpuinfo | awk '{ print $4}'`
echo "CPU model:" ` grep "model" /proc/cpuinfo | sed -n '1p' | awk '{print $3}'`
echo "CPU model name:" `grep "model" /proc/cpuinfo | sed -n '2p' | awk '{ $1=""; $2="";$3="";print $0}'`
