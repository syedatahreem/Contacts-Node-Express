# 📇 Contacts Manager API (Node.js + Express)

A RESTful API for managing contacts, built with **Node.js**, **Express**, and **MongoDB**. This project demonstrates secure authentication, protected routes, and clean backend architecture.

---

## 🚀 Features

- Full CRUD functionality for contacts  
- User registration & login  
- JWT-based authentication  
- 🔒 Only authenticated users can perform CRUD operations on contacts  
- Protected routes using middleware  
- Centralized error handling  

---

## 🧰 Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT (JSON Web Tokens)  
- dotenv  

---

## 📁 Project Structure

    ├── config/         # Database connection
    ├── controllers/    # Business logic
    ├── middleware/     # Auth & error handling
    ├── models/         # Database schemas
    ├── routes/         # API routes
    ├── .env            # Environment variables
    └── server.js       # Entry point

---

## ⚙️ Installation

1. Clone the repository  
```bash
git clone https://github.com/syedatahreem/Contacts-Node-Express.git
```

2. Navigate into the project  
```bash
cd Contacts-Node-Express
```

3. Install dependencies  
```bash
npm install
```

4. Create a `.env` file and add:  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_secret_key
```

5. Run the server  
```bash
npm run dev
```


---

## 🔐 Authentication

This API uses JWT for authentication.
Include the token in headers:
Authorization: Bearer <token>

---

## 📡 API Endpoints

### 👤 Auth Routes

| Method | Endpoint             | Description       |
|--------|---------------------|-------------------|
| POST   | /api/users/register | Register user     |
| POST   | /api/users/login    | Login user        |
| GET    | /api/users/current  | Get current user  |

---

### 📇 Contact Routes (Protected)

| Method | Endpoint           | Description        |
|--------|-------------------|--------------------|
| GET    | /api/contacts     | Get all contacts   |
| GET    | /api/contacts/:id | Get contact by ID  |
| POST   | /api/contacts     | Create contact     |
| PUT    | /api/contacts/:id | Update contact     |
| DELETE | /api/contacts/:id | Delete contact     |

---

## 🧪 Testing

- Postman  
- Thunder Client (VS Code)

---

## 📌 Future Improvements

- Pagination & filtering  
- Validation (Joi / Zod)  
- Unit & integration tests  
- Docker support  

---

## 🙌 Author

**Syeda Tahreem Azeez**  
https://github.com/syedatahreem  

---

## ⭐️ Support

If you found this useful, give it a ⭐️
