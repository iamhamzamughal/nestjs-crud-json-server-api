
# 📚 JSON Server Books API

This project uses [`json-server`](https://github.com/typicode/json-server) to mock a fully functional REST API for managing a list of books. Ideal for frontend development, testing, and prototyping.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/json-server-books-api.git
cd json-server-books-api
```

### 2. Install `json-server`

Install globally (if not already installed):

```bash
npm install -g json-server
```

Or locally in the project:

```bash
npm install json-server --save-dev
```

### 3. Start the API Server

```bash
json-server --watch src/db/books.json --port 3001
```

API will be available at:

```
http://localhost:3001/books
```

---

## 📁 Project Structure

```
json-server-books-api/
├── src/
│   └── db/
│       └── books.json
├── package.json
└── README.md
```

---

## 🧪 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/books`         | Get all books           |
| GET    | `/books/:id`     | Get a book by ID        |
| POST   | `/books`         | Add a new book          |
| PUT    | `/books/:id`     | Update full book entry  |
| PATCH  | `/books/:id`     | Update part of a book   |
| DELETE | `/books/:id`     | Delete a book by ID     |

---

## 💾 Sample Data (`books.json`)

```json
[
  {
    "id": "1",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "publishedDate": "1937-09-21",
    "isAvailable": true
  },
  {
    "id": "2",
    "title": "1984",
    "author": "George Orwell",
    "publishedDate": "1949-06-08",
    "isAvailable": false
  }
]
```

---

## 📘 Example Usage

### Add a New Book (POST `/books`)

```json
{
  "title": "Dune",
  "author": "Frank Herbert",
  "publishedDate": "1965-08-01",
  "isAvailable": true
}
```

### Update a Book (PATCH `/books/1`)

```json
{
  "isAvailable": false
}
```

---

## 🛠 Features

- Auto-generated `id` values (unless provided)
- Query filters: `?author=Orwell`, `_sort=title`, etc.
- Watch mode: automatically updates when `books.json` changes

---

## 📎 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Hamza Nasir**

> [GitHub](https://github.com/your-username) · [LinkedIn](https://linkedin.com/in/your-profile)

---

> Inspired by [typicode/json-server](https://github.com/typicode/json-server)
