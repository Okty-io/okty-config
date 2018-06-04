
<h1 align="center">
  <a href="https://okty.io/">
    <img src="https://i.imgur.com/kN8SThu.png" alt="Okty" height="200">
  </a>
  <br>
  Okty - Configuration
  <br>
</h1>

<h4 align="center">The simplest application to create your docker projects.</h4>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Build Status](https://travis-ci.org/lbassin/okty.svg?branch=master)](https://travis-ci.org/lbassin/okty) 
![Dependencies](https://david-dm.org/lbassin/okty.svg)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-lightgrey.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="#what-is-okty">What is Okty ?</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#contribute">Contribute</a> •
  <a href="#license">License</a> •
  <a href="#credits">Credits</a>
</p>

## What is Okty ?

Okty is a simple tool to generate customized docker-compose files.  
This is the configuration repository, you may find more information about this project on the [main repository](https://github.com/lbassin/okty)

## Configuration

Each available container has it own yml configuration file in the "containers" folder  
  
Configuration has simples mandatories fields : 
```yml
name: "The displayed label"
image: "Logo of the container (It has to come from an https source)"
docker: "The name of the image to pull from the docker hub"
version: "The version of of the specified image"
config: []
```

Config entry is a little bit more complicated and will contains all the options to customize your container  

#### Config

In this array, each entry will be considered as a form group.  
In order to make easier setup form for the end user, we recommend to split your configuration by thematics groups.  
  
You need to specify an unique ID for each group and an associated label
```yml
config:
  - 
    id: "Unique_ID"
    label: "Group Label"
    fields: []
```  

### Fields 

Before creating any configuration for your container, you have to had the container id field.  
If this field is missing Okty won't be able to work properly.
```yml
- 
  id: name 
  label: "Container ID"
  type: input
  base: container_id
  destination: id
  value: php # Change this by a default value
  validators:
    required: true
```
(This is a default structure for your fields) 

Okty may handle three types of configuration for your container :
- Volumes
- Ports
- Environment

For each type, those three fields are required :
```yml
id: Unique_Id
label: "Input label"
destination: volumes|ports|environment
type: input|select-container|multi-select|select
validators: []
```  
#### Destination  
The first step to build your configuration file is to define the data you need
##### Volumes
This configuration allows you to bind a folder from the host machine to the inside of the container.
If you need to bind a volume, you have to add these fields :  
```yml
destination: volumes
base: "/usr/share/nginx/html" # The path of the folder inside the container
value: "./" # The default path on the host
```

##### Ports
This configuration allows you to bind a port from the host machine to the container.
If you need to bind a port, you have to add these fields :  
```yml
destination: ports
base: "80" # Port of the container to bind
value: "8080" # Port on the host machine
```

##### Environment
This type of configuration allows you to add a env variable in the container.  
If you need to add a variable, you have to had these fields :
```yml
destination: environment
base: VAR_NAME # Variable name
value: "128M" # Default value 
```

This is the main configuration used by Okty.  
If you need to customize an existing image, you should create a new one which extends the image you need and set inside configuration from an entrypoint script.  
You may check [this folder](https://github.com/lbassin/okty-config/tree/master/images/nginx), this is done through two files : Dockerfile and entrypoint.sh

#### Type
Once you know which data will be needed you may define how user should fill them.  
There is four type of input available  

##### Input
This one allows user to write data into a basic text field.
You have to add this line to your field declaration.  
The input data will replace the default value.
```yml
type: input
```

##### Select Container
This one allows user to select an existing container from his project.
You have to add this line to your field declaration.
Output will be the unique container_id of the selected one.
```yml
type: select-container
```  

##### Multi Select
This input allows the user to select multiple value from a defined source.  
You have to add these lines to your field declaration.  
Output will be a string of all values separated by a ";"
```yml
type: multi-select 
source: 
  "value1": "Label 01"
  "value2": "Label 02"
  "value3": "Label 02"
```

##### Simple Select
This input works exactly like the multi-select but user may only choose one value.  
Output will be a string with the value of the selected item.
```yml
type: select 
source: 
  "value1": "Label 01"
  "value2": "Label 02"
  "value3": "Label 02"
```

#### Validators
In order to make sure users provide functional data, you may add some validations on your fields.
There are currently three types of validators : 
```yml
validators:
    required: true
    numbers: { min: 0, max: 65535 }
    regex: "^[a-z]$"
```  
  
## Contribute

Okty needs help to stay up to date and improve his features.  
If something is missing or broken, feel free to open an issue or made a pull request.  
  
Maybe the container you want isn't available ? 
Make your own or ask for it on through pull requests or issues !

## License
Okty is made available under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

## Credits
Okty is created and maintained by
[Samuel Alves Antunes](https://github.com/NeverTwice), 
[Laurent Bassin](https://github.com/lbassin),
[Maxime Marquet](https://github.com/x-Raz) &
[Jordan Venant](https://github.com/Kubenic).

*We're open to suggestions, feel free to message us or open an issue.*  
*Pull requests are also welcome!*
