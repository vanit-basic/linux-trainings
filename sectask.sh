#!/bin/bash


info() {

        cat /proc/version > Info
	awk '{print $1}' Info > OS
	cat OS
        awk '{print $2,$3}' Info > Version
        cat Version
	echo "User-name -" "$USER"
	echo "cpu model -" `cat /proc/cpuinfo | grep model | grep name | uniq | awk '{print $4,$5,$6,$7,$9}'`
	echo "cores are" `cat /proc/cpuinfo | grep 'core id' | awk 'END { print NR }'`
	echo "Kernel version -" `uname -r`
	
}
info

