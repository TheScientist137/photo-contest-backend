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

1. Clone the repository
   ```bash
   git clone <repository_url>
   cd <repository_url>