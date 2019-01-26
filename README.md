# Full Stack Classroom

RESTful API Services

| Route      | HTTP Verb | Description   |
| ---------- | --------- | ------------- |
| /api/users | `POST`    | Create a user |
| /api/auth  | `POST`    | Login a user  |

| Route                         | HTTP Verb | Description                      |
| ----------------------------- | --------- | -------------------------------- |
| /api/classrooms               | `GET`     | Get all the classrooms           |
| /api/classrooms               | `POST`    | Crate a classroom                |
| /api/classrooms/:classroom_id | `GET`     | Get a single classroom           |
| /api/classrooms/:classroom_id | `PUT`     | Update a classroom with new info |
| /api/classrooms/:classroom_id | `DELETE`  | Delete a classroom               |

| Route                     | HTTP Verb | Description                    |
| ------------------------- | --------- | ------------------------------ |
| /api/teachers             | `GET`     | Get all the teachers           |
| /api/teachers             | `POST`    | Crate a teacher                |
| /api/teachers/:teacher_id | `GET`     | Get a single teacher           |
| /api/teachers/:teacher_id | `PUT`     | Update a teacher with new info |
| /api/teachers/:teacher_id | `DELETE`  | Delete a teacher               |

## Technologies used

- `Mongoose` gives us a simple API to work with MongoDB database. We use a Schema in Mongoose to define a shape of collection (table in MySQL) in the MongoDB database: what are the properties we have in each document (row in MySQL).
