FluxCapacitor API Documentation
=====

This will document JSON data models and the API for the FluxCapacitor service.
Ideally it'll stay up to date with the what the services actually use... lol.

When there needs to be a breaking change to the API, copy the file and then
update the version number.

High Level Data Overview
-----

A TEAM is made of multiple USERs and has multiple GOALs. Each GOAL is made up
of multiple TODOs.

A USER can belong to multiple TEAMs.

Goal Object
-----

```
"goal": {
  "goal_id": number,
  "title": string,
  "description": string,
  "todos": [ todo_id ]
}
```

Team Object
-----

```
"team": {
  "team_id": number,
  "name": string,
  "goals": [ goal_id ]
}
```

Todo Object
-----

```
"todo": {
  "todo_id": number,
  "title": string,
  "description": string,
  "creation_date": date,
  "creator": user_id,
  "state": string
}
```

User Object
-----

```
"user": {
  "user_id": number,
  "display_name": string,
  "teams": [ team_id ]
}
```
