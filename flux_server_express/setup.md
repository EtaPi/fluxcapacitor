Docker Commands and Setup
=====

If you see this:
```
Cannot connect to the Docker daemon. Is the docker daemon running on this host?
```

It probably means your shell doesn't know how to connect to the Docker daemon.
There's two prerequisites: you need a docker host or your shell hasn't been
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

Data in Mongo:
{
  { "name": "Anthony", "job": "director" },
  { "name": "Jeremy", "job": "architect" }
}
