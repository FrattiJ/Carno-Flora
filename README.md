# MERN Stack Carnivorous Plants Storefront
Welcome to the MERN Stack Carnivorous Plants Storefront! This project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It aims to provide a user-friendly and engaging platform for selling and buying carnivorous plants.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Product Listings:** Browse a variety of carnivorous plants with detailed descriptions and images.

- **User Authentication:** Register an account, log in, and manage your profile.

- **Shopping Cart:** Add plants to your cart and proceed to checkout.

- **Payment Integration:** Securely make purchases using integrated payment options.

- **Order History:** View your order history and track the status of your deliveries.

- **Admin Panel:** Manage product listings, user accounts, and monitor sales through an admin dashboard.

## Getting Started
#### Prerequisites
Make sure you have the following installed on your machine:

- Node.js
- MongoDB
### Installation
1. Clone the repository:

```bash
git clone https://github.com/yourusername/mern-carnivorous-plants-storefront.git
```

2. Navigate to the project directory:

```bash
cd mern-carnivorous-plants-storefront
```

3. Install server dependencies:

```bash
cd server
npm install
```

4. Install client dependencies:

```bash
cd ../client
npm install
```

5. Create a .env file in the server directory and configure the following environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Replace your_mongodb_connection_string with your MongoDB connection string and your_jwt_secret_key with a secure secret for JWT.

6. Run the server:

```bash
cd ../server
npm start
```

7. Run the client:

```bash
cd ../client
npm start
```

8. http://localhost:3000 will automatically open in your browser to see the carnivorous plants storefront.

## Usage
- Explore the catalog, add plants to your cart, and proceed to checkout.
- Register an account to track your order history.
- Admins can manage products and users through the admin dashboard.

## Technologies

- #### Frontend:

    - React.js
    - Redux for state management
    - React Router for navigation
    - Material-UI for UI components
- #### Backend:

    - Node.js
    - Express.js
    - MongoDB for data storage
    - Mongoose for MongoDB object modeling
- #### Authentication:

    - JSON Web Tokens (JWT)
- #### Payment:

    - Stripe

## Contributing
Contributions are welcome! Please follow the contribution guidelines.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.