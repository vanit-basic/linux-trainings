        # cpu cores  և cpu model
        grep –i “cpu cores” /proc/cpuinfo | awk  ‘{print $2 $4}’ >file 
                     cut  -c  -6 file
                     lscpu > file2
                      grep –i “Model” ./file2
                    # kernel name և kernel version
	uname –a >file3
                     cut –c -38 file3
                       #OS
                       hostnamectl  >file4
                     grep –i “Opereting system” ./file4
               
