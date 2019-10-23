To summarize the differences that come to the table when we compare the Docker Containers 
and the Virtual Machines, there’s 3 main differences : 

|Docker Containers|Virtual Machines|
|---|---|
| Share a single kernel | Use multiple Kernels for each OS instance |
| Faster and less resource heavy | Heavy-weight and use a lot of system resources |
| Quick startup and executed within Docker Engine | Execute within hypervisor as a separate process |

Here is the architectural structure of both that summarizes our previous explanation: 
![Container versus virtual machine schema](http://img.scoop.it/tImVj_1Pbqv0HJDyMWTmBbnTzqrqzN7Y9aBZTaXoQ8Q=)
