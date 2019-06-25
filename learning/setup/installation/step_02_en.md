# Linux (Ubuntu & Debian)
Update the apt package index.

`$ sudo apt-get update`

Install the latest version of Docker CE and containerd, or go to the next step to install a specific version:

`$ sudo apt-get install docker-ce docker-ce-cli containerd.io`

Verify that Docker CE is installed correctly by running the hello-world image.

`$ sudo docker run hello-world`

This command downloads a test image and runs it in a container. When the container runs, it prints an informational message and exits.

PS : Other Linux distributions can be found on the left menu of this link : https://docs.docker.com/install/linux/docker-ce/ubuntu/
