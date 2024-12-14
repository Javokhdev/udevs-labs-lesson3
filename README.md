# Udevs Labs - Lesson 3

This is a simple Node.js project designed to demonstrate basic project structure and functionality, including controllers, models, and routes. The application uses Express to handle requests related to products and orders.



## Project Structure

- **src/config/database.js**: Contains database configuration.
- **src/controllers/productsController.js**: Handles product-related requests.
- **src/controllers/ordersController.js**: Handles order-related requests.
- **src/models/product.js**: Defines the product model.
- **src/models/order.js**: Defines the order model.
- **src/routes/index.js**: Contains route definitions for the application.
- **src/server.js**: The main server file that starts the application.
- **package.json**: Lists the project dependencies and scripts.

## How to Use

1. Clone the repository:

   ```bash
   git clone git@github.com:Javokhdev/udevs-labs-lesson3.git
   ```

2. Navigate to the project directory:

    ```bash
    cd udevs-labs-lesson3
    ```

3. Install dependencies:

    ```bash
    npm install
    ```
4. Start the server:

    ```bash
    npm start
    ```

    or

    ```bash
    docker compose ub --build
    ```

The server will be running on http://localhost:3000/api-docs/#/. You can access the routes for products and orders from the defined endpoints.
