<p align="center">
<h1> “Prova - Estágio Back-End - Julho/2022 </h1> 
</p>


## Description
Post and Comments information management API - created using Node.js and MongoDB

## Topics 


:small_blue_diamond: [Info about the project](#info-about-the-project-books)

:small_blue_diamond: [How to run the application](#how-to-run-the-application)

:small_blue_diamond: [Post Endpoints](#post-endpoints)

:small_blue_diamond: [Comments Endpoints](#pcomments-endpoints)

<br>


# Info about the project :books:
## Libs:

- [express: v4.18.1](https://expressjs.com/pt-br/)
- [mongoose: v6.3.4](https://mongoosejs.com/docs/api.html)
- [mongoose-paginate: ](https://www.npmjs.com/package/mongoose-paginate)
- [dotenv: v16.0.1](https://www.npmjs.com/package/dotenv)
- [mongoose-paginate-v2: v1.7.0](https://www.npmjs.com/package/mongoose-paginate-v2)

### Node Version:
```
v14.16.0
```
### NPM Version:
```
v6.14.11
```
... 

# How to run the application
<br>

### After cloning  the project
```
 git clone https://github.com/LucasAraujo44/SmartNx.git
```
<br>

### Install the dependencies:
```
 npm install
```
<br>

### Config the environment variables (.env)
```
Inside of the project you have a .env.example file with the required configuration fields:

DB_HOST =
DB_USER =
DB_PASS =
DB_NAME =
DB_PORT =
DB_COLLECTION =

```
<br>

### Start the application
```
 npm start
```
<br>

# Post Endpoints

## Create Employee
`POST`
```
http://localhost:3000/api/v1/pos/ 
```
### Body Example
```
{
    "name": "Lucas Araujo",
    "data": "03/08/2022",
    email": "lucasaraujo@gmail.com",
    "descricao": "A api está funcionando"
}
```
`Status Code: 201 Created`
```
{
    "name": "Lucas Araujo4",
    "data": "03/08/2022",
    "email": "Lucasaraujo@gmail.com",
    "descricao": "Inicio da api",
    "__v": 0,
    "id_post": "62ea74c327611662123ebfe4"
}
```
`Status Code: 400 Bad Request`
```
{
    "message": "Bad Request",
    "details": [
        {
            "message": "error.messsage of the req"
        }
    ]
}
```
<br>

## List Post
`GET`
```
http://localhost:3000/api/v1/post 
```
### Res
`Status Code: 200 OK`
```
{
    "Post": [
        {
            "name": "Lucas Araujo3",
            "data": "03/08/2022",
            "email": "Lucasaraujo@gmail.com",
            "descricao": "Inicio da api",
            "__v": 0,
            "id_post": "62ea714727611662123ebfd9"
        },
        {
            "name": "Lucas Araujo4",
            "data": "03/08/2022",
            "email": "Lucasaraujo@gmail.com",
            "descricao": "Inicio da api",
            "__v": 0,
            "id_post": "62ea74c327611662123ebfe4"
        }
    ],
    "total": 2,
    "limit": 20,
    "totalPages": 1,
    "offsets": 1
}
```
<br>

## List Post by ID
  `GET`
```
http://localhost:3000/api/v1/post/:id
```
### Res
`Status Code: 200 OK`
```
{
    "name": "Lucas Araujo4",
    "data": "03/08/2022",
    "email": "Lucasaraujo@gmail.com",
    "descricao": "Inicio da api",
    "__v": 0,
    "id_post": "62ea74c327611662123ebfe4"
}
```
`Status Code: 400 Bad Request`
```
{
    "message": "Bad Request",
    "details": [
        {
            "message": "error.messsage of the req"
        }
    ]
}
```
<br>

## Update Post
`PUT`
```
http://localhost:3000/api/v1/post/:id 
```
### Body Example
```
 {
       "name": "Lucas Araujo5",
       "data": "03/08/2022",
       "email": "Lucasaraujo@gmail.com",
       "descricao": "Inicio da api"
   } 
```
`Status Code: 200 OK`
```
{
    "message": "Success",
    "details": [
        {
            "message": "The id was successfully Updated"
        }
    ]
}
```
`Status Code: 404 Bad Request`
```
{
    "description": "Not Found",
    "message": "Id 62ea74c327611662123ebfe6 not found"
}
```
<br>

## Delete post
`DELETE`
```
 {
    "message": "Success",
    "details": [
        {
            "message": "The id_Post was successfully deleted"
        }
    ]
} 
```
`Status Code: 200 OK`

`Status Code: 400 Bad Request`
```
{
    "message": "Success",
    "details": [
        {
            "message": "The id_Post was successfully deleted"
        }
    ]
}
```
<br>
# comments Endpoints

## Create Comment
`POST`
```
http://localhost:3000/api/v1/post/id/comment
```
### Body Example
```
{
    "id_post": "62ea714727611662123ebfd9",
    "comments": "Teste api444"
}
```
`Status Code: 201 Created`
```
{
    "id_post": "62ea714727611662123ebfd9",
    "comments": "Teste api444",
    "_id": "62ea83820395a37ad57fc596",
    "__v": 0
}
```
`Status Code: 400 Bad Request`
```
{
    "message": "Bad Request",
    "details": [
        {
            "message": "error.messsage of the req"
        }
    ]
}
```
<br>

## List Comment
`GET`

```
http://localhost:3000/api/v1/post/id/comment 
```
### Body Example
```
{
    "Comments": [
        {
            "_id": "62ea7e58a1079ee489d46e7c",
            "id_post": "62ea714727611662123ebfd9",
            "comments": "Teste api",
            "__v": 0
        },
        {
            "_id": "62ea7e5fa1079ee489d46e7e",
            "id_post": "62ea714727611662123ebfd9",
            "comments": "Teste api444",
            "__v": 0
        },
        {
            "_id": "62ea83630395a37ad57fc594",
            "id_post": "62ea714727611662123ebfd9",
            "comments": "Teste api444",
            "__v": 0
        },
        {
            "_id": "62ea83820395a37ad57fc596",
            "id_post": "62ea714727611662123ebfd9",
            "comments": "Teste api444",
            "__v": 0
        },
        {
            "_id": "62ea87616cefc1c81f3babec",
            "id_post": "62ea714727611662123ebfd9",
            "comments": "Teste api444",
            "__v": 0
        },
        {
            "_id": "62ea87866cefc1c81f3babef",
            "id_post": "62ea714727611662123ebfd9",
            "comments": "Teste api444",
            "__v": 0
        },
        {
            "_id": "62ea87886cefc1c81f3babf1",
            "id_post": "62ea714727611662123ebfd9",
            "comments": "Teste api4a44",
            "__v": 0
        }
    ],
    "total": 7,
    "limit": 20,
    "totalPages": 1,
    "offsets": 1
}
```
## List Comment by ID
  `GET`
```
http://localhost:3000/api/v1/post/:id/comment
```
### Res
`Status Code: 200 OK`
```
{
    "_id": "62ea7e5fa1079ee489d46e7e",
    "id_post": "62ea714727611662123ebfd9",
    "comments": "Teste api444",
    "__v": 0
}
```
`Status Code: 400 Bad Request`
```
{
    "description": "Not Found",
    "message": "Id 62ea74c327611662123ebfe6 not found"
}
```
<br>

## Update Comment
`PUT`
```
http://localhost:3000/api/v1/post/:id/comment
```
### Body Example
```
 {
    "id_post": "62ea714727611662123ebfd9",
    "comments": "Teste api 22"
}
```
`Status Code: 200 OK`
```
{
    "message": "Success",
    "details": [
        {
            "message": "The id was successfully Updated"
        }
    ]
}
```
`Status Code: 404 Bad Request`
```
{
    "description": "Not Found",
    "message": "Id 62ea74c327611662123ebfe6 not found"
}
```
<br>

## Delete Comment
`DELETE`
```
 {
    "message": "Success",
    "details": [
        {
            "message": "The id was successfully deleted"
        }
    ]
} 
```
`Status Code: 200 OK`

`Status Code: 400 Bad Request`
```
{
    "message": "Success",
    "details": [
        {
            "message": "The id was successfully deleted"
        }
    ]
}
```

<br>

