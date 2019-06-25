One of the fundamental, philosophical goals of Docker is that its architecture should be as 
**simple and scalable as possible**. And, to that effect, Docker uses simple 
**client / server architecture** as shown below. 
This architecture chosen by Docker ensures that it is operating system agnostic, all it needs is an OS 
that can run Docker essential application.

![Docker architecture](https://www.aquasec.com/wiki/download/attachments/2854889/Docker_Architecture.png?version=1&modificationDate=1520172700553&api=v2)
  
 
This architecture is broken into 2 main constituents : 
 - **The Docker Daemon** : controls the execution and life cycle of each of the containers. 
 It is itself accessed by the Docker Client that is outside the Host. 
 An important thing to remember is that **the user never gets to use the Daemon directly**.
  
 - **The Docker Client** : allows the user to perform operations through commands that 
 **interacts with the Daemon** to execute it on the containers. 
