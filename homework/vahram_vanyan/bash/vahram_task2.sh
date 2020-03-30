#!/bin/bash

line=""
cpucores=`grep -i "cpu cores" /proc/cpuinfo | cut -d ':' -f 2 | sed '2,$d'`
finishcpucores="procesori qanak - $cpucores"
echo $finishcpucores
modelname=`grep  -w "model name"  /proc/cpuinfo | cut -d ':' -f 2 | sed '2,$d'`
finishmodelname="modeli anuny - $modelname"
echo $finishmodelname
firstinfo=`uname -a`
echo "textekutyun yaderi masin - $firstinfo"
username=`whoami`
echo "kompi ogtater - $username"
