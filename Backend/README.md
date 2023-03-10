# Envixi 

Envixi Application

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

Mongodb having database :- ENVIXI_ADMIN_DB

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.18.1

    $ npm --version
    6.14.15

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Setup environment variable

```
DEBUG = True  # True/False
JWT_SECRET = "ilovemyindia"
JWT_TIMEOUT_DURATION = "1800s"
JWT_TIMEOUT_DURATION_REF="3600s"
NODE_ENV="development"
MONGODB_USER=admin
MONGODB_PASSWORD=envixixxxxxxxxx
MONGODB_HOST=0.0.0.0
MONGODB_PORT=27017
BASE_URL = "http://localhost:3000/api"
SENDER_EMAILD="dummyemail@email.com"
SENDER_EMAILD_PASSWORD="password"

```

## Running the project

    $ npm start

    $ pm2 start --name "sample name"
    
## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh

docker build -t <youruser>/<image_id> .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 3000:3000 --restart=always  <youruser>/<image_id> 
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**
