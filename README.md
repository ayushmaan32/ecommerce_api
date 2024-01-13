# E-Commerce API

This repository contains the source code for an e-commerce API built with Node.js, Nest.js, and MongoDB.

## Getting Started

### Prerequisites

- Node.js and npm: [Install Node.js](https://nodejs.org/)
- MongoDB: [Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ayushmaan32/ecommerce_api
   ```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Reference

```http

POST /api/products: Create a new product.

GET /api/products: Retrieve all products.

GET /api/products/:id: Retrieve a specific product by ID.

PUT /api/products/:id: Update a specific product by ID.

DELETE /api/products/:id: Delete a specific product by ID.
```
