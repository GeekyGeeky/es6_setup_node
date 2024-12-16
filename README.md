# **To-Do API**

A simple **To-Do API** built with **Node.js**, **Express**, and **ES6** (using Babel). This API allows users to manage a list of to-do items with CRUD functionality.

---

## **Features**

- **Create** a new to-do item.
- **Read** all to-do items.
- **Update** an existing to-do item.
- **Delete** a to-do item.

---

## **Getting Started**

### **Prerequisites**

- **Node.js** (v14+ recommended)
- **npm** (comes with Node.js)

---

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/geekygeeky/es6_setup_node.git
   cd es6_setup_node
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

### **Run the API**

Start the development server:

```bash
npm run start:dev
```

The API will run on `http://localhost:3000`.

---

## **API Endpoints**

### **Base URL**

`http://localhost:3000`

### **Endpoints**

#### **Get All Todos**

- **GET** `/todos`
- **Description**: Retrieve all to-do items.
- **Response Example**:
  
  ```json
  [
    { "id": 1, "title": "Buy groceries", "completed": false },
    { "id": 2, "title": "Clean the house", "completed": true }
  ]
  ```

#### **Create a New Todo**

- **POST** `/todos`
- **Description**: Create a new to-do item.
- **Request Body**:
  
  ```json
  {
    "title": "Task title"
  }
  ```

- **Response Example**:
  
  ```json
  {
    "id": 3,
    "title": "Task title",
    "completed": false
  }
  ```

#### **Update a Todo**

- **PUT** `/todos/:id`
- **Description**: Update an existing to-do item by ID.
- **Request Body**:
  
  ```json
  {
    "title": "Updated title",
    "completed": true
  }
  ```
  
- **Response Example**:
  
  ```json
  {
    "id": 3,
    "title": "Updated title",
    "completed": true
  }
  ```

#### **Delete a Todo**

- **DELETE** `/todos/:id`
- **Description**: Delete a to-do item by ID.
- **Response**: No content (204 status).

---

## **Project Structure**

```bash
todo-api/
├── src/
│   ├── index.js         # API entry point
│   ├── store.js         # In-memory data store
├── .babelrc             # Babel configuration
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

---

## **Development Workflow**

### **Add Dependencies**

To add new dependencies:

```bash
npm install <package-name>
```

### **Linting**

Install ESLint or Prettier for code consistency:

```bash
npm install eslint --save-dev
```

---

## **Contributing**

Feel free to fork the project, create a feature branch, and submit a pull request. Contributions are welcome!

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## **Acknowledgments**

- Built with [Express](https://expressjs.com/) for server-side logic.
- Babel for ES6+ support in Node.js.

Enjoy building your to-do list! 🚀
