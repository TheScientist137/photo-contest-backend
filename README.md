# Photo Caption Contest API

A backend API built with Node.js, Express, and Sequelize for managing images, captions, and user authentication.
This API includes endpoints for user registration, login and logout, adding caption to images and middleware for authorization and caching

---

## Features

- **User Authentication**: Secure user registration and login with hashed passwords using bcrypt.
- **Session Management**: Maintains user sessions using `express-session`.
- **CRUD Operations**: Manage images and captions with robust endpoints.
- **Authorization Middleware**: Restrict certain actions to logged-in users only.
- **Caching**: Optimized image retrieval with in-memory caching using `node-cache`.
- **Database Integration**: Uses PostgreSQL with Sequelize ORM for database operations.

---

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

  - Create a PostgreSQL database
  - Configure your .env file with the following environment variables:

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

   The API will be available at `http://localhost:3001`