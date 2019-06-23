Among that, there are a few more notions to understand before getting into practice. 

 - **Containers** : As explained before, these are packaged applications ready to be run.
 
 - **Images** : These represent the state of a container at a given moment. Whenever you want, you can make a kind of “snapshot” of your container to be able to reuse later without having to reinstall everything you had. Those stated containers are called images and are tagged with a version. 
 
 - **Registry** : Images of containers must be saved somewhere in order to be able to reuse it. As you should know by now, Docker is an open source tool, all images that you build can be stored on a registry, the official public one held by Docker itself is called “Docker Hub”. You can also maintain and use a private registry (used for releases within a Continuous Delivery Pipeline). 
 
 - **Docker Hub** : It is a large registry containing all images pushed to the internet so you can use it freely. There are “official” images purposed by companies and others created by regular users. 
  
**INFO :** You may also hear “Docker Machine”. **Docker Machine** is a tool that lets you install Docker essential application on virtual hosts, and manage the hosts with docker-machine commands. Machine **was the only way to run Docker on Mac or Windows previous to Docker v1.12**. Starting with the beta program and Docker v1.12. 
It is now **mostly used to create Docker hosts on company networks, data centers, or on cloud providers like Azure, AWS, or Digital Ocean**.

It’s time to get our hands dirty ! First, let’s install Docker on your machine.  
