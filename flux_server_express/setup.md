Docker Commands and Setup
=====

If you see this:
```
Cannot connect to the Docker daemon. Is the docker daemon running on this host?
```

It probably means your shell doesn't know how to connect to the Docker daemon.
There's two prerequisites: you need a docker host and your shell needs to be
configured.

Run
```
docker-machine ls
```
If there's nothing in the list, check the docker documentation on how to create
a docker host.

Otherwise, run
```
eval $( docker-machine env )
```

I used [this](http://www.dwmkerr.com/learn-docker-by-building-a-microservice/)
as a guide for setting up the docker stuff.

`docker run` is a combination of `docker create` and `docker start`.

Use `docker ps` or `docker ps -a` to see all containers. `-a` includes all
containers, including stopped ones.

To start mongo:
```
docker run -d -p 27017:27017 --name db mongo
```

To start the web server:
```
docker run -d -p 8080:8080 --name app node-app
```

Data in Mongo:
  Need this in `peoples` collections:
```
{
  { "name": "Anthony", "job": "director" },
  { "name": "Jeremy", "job": "architect" }
}
```
