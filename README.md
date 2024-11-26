# Photo Caption Contest API

A backend API built with Node.js, Express, and Sequelize for managing images, captions, and user authentication.
This API includes endpoints for user registration, login and logout, adding caption to images and middleware for authorization and caching.

---

## Features

- **User Authentication**: Secure user registration and login with hashed passwords using `bcrypt`.
- **Session Management**: Maintains user sessions using `express-session`.
- **CRUD Operations**: Manage images and captions with robust endpoints.
- **Authorization Middleware**: Restrict certain actions to logged-in users only.
- **Database Integration**: Uses PostgreSQL with Sequelize ORM for database operations.


## Setup and Installation

### Prerequisites

- [Node.js]
- [PostgreSQL]
- [Git]

### Steps to Install

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_url>

2. Install dependencies:

```bash
npm install

3. Set up the database:
   
   ```bash
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=your_database_name
   DB_USER=your_username
   DB_PASSWORD=your_password
   SESSION_SECRET=your_secret_key

4. Run migrations to create the database schema:

   ```bash
   npx sequelize-cli db:migrate

5. Start the server:

   ```bash
   npm start
   ```
   The API will be available at `http://localhost:3001`.

---

## Endpoints

### User Management

| HTTP Method |    Endpoint   |       Description       |                            Request Body                           | Authorization |
|:-----------:|:-------------:|:-----------------------:|:-----------------------------------------------------------------:|:-------------:|
| POST        | /users/signup | Register a new user     | { "username": "string", "email": "string", "password": "string" } | No            |
| POST        | /users/login  | Log in an existing user | { "email": "string", "password": "string" }                       | No            |
| POST        | /users/logout | Log out a user          | None                                                              | No            |

### Image Management

| HTTP Method |   Endpoint  |       Description       | Request Body | Authorization |
|:-----------:|:-----------:|:-----------------------:|:------------:|:-------------:|
| GET         | /images     | Retrieve all images     | None         | No            |
| GET         | /images/:id | Retrieve an image by ID | None         | No            |

### Caption Management

| HTTP Method |         Endpoint         |        Description        |     Request Body     | Authorization |
|:-----------:|:------------------------:|:-------------------------:|:--------------------:|:-------------:|
| POST        | /images/:id/captions/new | Add a caption to an image | { "text": "string" } | Yes           |

---

## Technologies Used

- **Node.js**: Server runtime.
- **Express**: Backend web framework.
- **Sequelize**: ORM for PostgreSQL database interactions.
- **PostgreSQL**: Database system.
- **bcrypt**: Secure password hashing.
- **express-session**: Session management middleware.
- **dotenv**: Handling environmental variables

---

## License

This project is licensed under the MIT License.