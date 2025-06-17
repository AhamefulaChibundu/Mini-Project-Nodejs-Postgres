# Node.js And PostgreSQL API Project

This is a simple RESTful API built with **Node.js**, **Express**, and **PostgreSQL**. It allows you to create, read, update, and delete user data.

---

## How to Run This Project

### Prerequisites

- Node.js installed (v14+ recommended)
- PostgreSQL installed and running
- pgAdmin or any PostgreSQL client (optional for database management)

---

## Installation

### 1. **Clone the Repository**

```bash
git clone https://github.com/AhamefulaChibundu/Mini-Project-Nodejs-Postgres.git
cd Mini-Project-Nodejs-Postgres
```

### 2. **Install Dependences**

```bash
npm install
```

### 3. **Set Up Environment Variables**

Create a .env file in the root directory and add your PostgreSQL credentials:

USER=your_postgres_username

PASSWORD=your_postgres_password

HOST=localhost

PORT=5432

DATABASE=your_database_name


##### Note: Make sure to add .env to your .gitignore to avoid pushing your sensitive data.

### 4. **Start the Server**
```bash
npm start
```
Visit Url http://localhost:2000


### API Endpoints
Example base route:

GET / → Welcome message

GET /users → List all users

POST /users → Create a new user

PUT /users/:id → Update user

DELETE /users/:id → Delete user

You can test the endpoints using Postman, Insomnia, or any REST client.


#### Tech Stack
Node.js

Express.js

PostgreSQL

pg (PostgreSQL client)

dotenv

uuid