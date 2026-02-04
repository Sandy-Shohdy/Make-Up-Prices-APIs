# Makeup Price Tracker API

A RESTful API for tracking makeup product prices, built with Node.js, Express, and MongoDB.

## Features

- Add, update, delete, and fetch makeup products and their prices
- Built with Express and Mongoose
- JSON-based API

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/Make-Up-Prices-APIs.git
   cd Make-Up-Prices-APIs
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start MongoDB (if not already running):
   ```sh
   mongod (mongoose)
   ```

4. Start the server:
   ```sh
   node app.js
   ```

   The API will run at `http://localhost:5001/`.

## API Endpoints

| Method | Endpoint                | Description                     |
|--------|------------------------ |---------------------------------|
| GET    | `/api/products`         | Get all products                |
| GET    | `/api/products/:id`     | Get a product by ID             |
| POST   | `/api/products`         | Add a new product               |
| PUT    | `/api/products/:id`     | Update a product by ID          |
| DELETE | `/api/products/:id`     | Delete a product by ID          |

## Example Request

```sh
curl http://localhost:5001/api/products
```

## Project Structure

```
/models          # Mongoose models
/routes          # Express route handlers
app.js           # Main application file
```

## License

MIT

---

**Makeup Price Tracker API**  
Created