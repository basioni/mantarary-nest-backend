

## Backend Server

## Description

The server is created with NestJS and all required libraries for encryption.   

## Installation

```bash
$ npm install
```

## Installing Docker Images
The project Contains docker compose file to run Postgres and adminer as containers.
To run the docker image. Go to the backend root and launch the docker compose code:

```bash
$ sudo docker-compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Endpoints

### User Endpoints:

1- Get All Users:
* Request: Get
* Headers must have signed JWT Token

```bash
$ http://localhost:5000/user/all
```

2- Get User:
* Request: Get
* Headers must have signed JWT Token

```bash
$ http://localhost:5000/user/{userid}
```

3- Add User
* Request: Post
* Headers must have signed JWT Token
```bash
$ http://localhost:5000/user
```
* User Object sample:

```bash
{
    "username" : "ahmed",
    "email": "email@email.com",
    "password": "PA$$Wword123456"
}
```

4- Update User
* Request: PUT
* Headers must have signed JWT Token
```bash
$ http://localhost:5000/user
```
* User Object sample:

```bash
{
    "username" : "ahmed",
    "email": "email@email.com",
    "password": "PA$$Wword123456"
}

5- Delete User
* Request: Delete
```bash
$ http://localhost:5000/user
```


### Authorization 

1- Register: 
* Request: Post
```bash
$ http://localhost:5000/auth/register
```
* User Object sample:

```bash
{
    "username" : "ahmed",
    "email": "email@email.com",
    "password": "PA$$Wword123456"
}
```

2- Login: 
* Request: Post
```bash
$ http://localhost:5000/auth/login
```
* User Object sample:

```bash
{
    "username" : "ahmed",
    "email": "email@email.com",
    "password": "PA$$Wword123456"
}
````

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

