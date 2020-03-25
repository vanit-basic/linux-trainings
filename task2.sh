
grep –i “cpu cores” /proc/cpuinfo | awk  ‘{print $2 $4}’ >file1
                    cut -c -6 file1

                                       #cpu cores and medel

    lscpu > file2
    grep –i “Model” ./file2


    uname –a >file3              #kernel name and version
    cut –c -38 file3

    echo `cmd /c ver`            # OS name and version in cigwin


