# Lakes Auto Website

![Site Demo](./Frontend/public/Site_demo.png)

This website has been created for the dealership Lakes Auto Sales. The website features a modern design and user-friendly interface to help customers browse and purchase vehicles.

## Key Components

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Express**: A minimal and flexible Node.js web application framework for building the backend.
- **MongoDB**: A NoSQL database for storing and managing data.
- **Nodemailer**: A module for Node.js applications to send emails.
- **OTP Authentication**: In-house authentication using generated OTPs sent via email.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## Features

- **Responsive Design**: Ensures the website looks great on all devices, from desktops to mobile phones.
- **Interactive Map**: Displays the dealership's location using Google Maps.
- **Comprehensive Inventory**: Showcases the selection of cars the dealership offers.
- **Admin Dashboard (IN DEV.)**: 

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/yusef800/lakes_auto_vite.git
    ```

## Frontend Deployment

*Skip if using Docker container.*

1. Navigate to the Frontend directory:
    ```bash
    cd Frontend
    ``` 

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

## Backend Deployment

*Skip if using Docker container.*

1. Ensure you have a `config.env` file in the Backend directory with the following environment variables:
    ```
    ATLAS_URI=your_mongodb_uri
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_password
    ```

2. Navigate to the Backend directory:
    ```bash
    cd Backend
    ``` 

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

## Docker Deployment
This will run both backend and frontend in their respective containers.

1. Ensure you have a `.env` file in the root directory with the following environment variables:
    ```
    ATLAS_URI=your_mongodb_uri
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_password
    ```

2. Build the Docker images:
    ```bash
    docker-compose build
    ```

3. Start the containers:
    ```bash
    docker-compose up
    ```

4. Access the application at `http://localhost:5173`
