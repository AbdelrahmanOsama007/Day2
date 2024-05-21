Nursery Management Web Application
Table of Contents
Project Overview
Features
Technologies Used
Installation
Usage
API Endpoints
Contributing
License
Project Overview
This project is a web application designed to streamline the management of a nursery. It provides functionalities for handling nursery data securely and efficiently. The application includes user authentication, data encryption, auto-increment fields for unique IDs, and comprehensive API documentation.

Features
Secure Authentication & Authorization: Implemented using JSON Web Tokens (JWT).
Password Encryption: Utilized bcrypt.js for hashing passwords.
Auto-Increment IDs: Automatically assigns unique incrementing IDs to nursery entries.
CRUD Operations: Full suite of Create, Read, Update, and Delete operations for managing nursery data.
API Documentation: Integrated with Swagger for interactive API documentation.
Testing & Validation: Endpoints tested with Postman for robustness.
Technologies Used
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Encryption: bcrypt.js
API Documentation: Swagger
Testing: Postman
Usage
After setting up and starting the server, the application will be running at http://localhost:5000. Use Postman or any API client to interact with the endpoints.

API Endpoints
Authentication
Register Nursery

POST /api/nurseries/register
Body: { "name": "Nursery Name", "email": "email@example.com", "password": "password" }
Login

POST /api/nurseries/login
Body: { "email": "email@example.com", "password": "password" }
Nursery Management (Authenticated Routes)
Get All Nurseries

GET /api/nurseries/
Header: Authorization: Bearer <token>
Get Nursery by ID

GET /api/nurseries/:id
Header: Authorization: Bearer <token>
Update Nursery

PUT /api/nurseries/:id
Header: Authorization: Bearer <token>
Body: { "name": "New Name", "email": "newemail@example.com" }
Delete Nursery

DELETE /api/nurseries/:id
Header: Authorization: Bearer <token>
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and include tests for new features.

License
This project is licensed under the MIT License. See the LICENSE file for details.

