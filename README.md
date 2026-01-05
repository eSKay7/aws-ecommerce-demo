# AWS Deployed E-Commerce Demo

This is a basic demo e-commerce application deployed on **AWS Elastic Beanstalk**, with a **MySQL RDS backend**.  
The project demonstrates full-stack deployment of a **Node.js application** with database connectivity, dynamic product listing, and secure environment configuration.

---

## Features

- **Node.js backend** using Express  
- **MySQL database** hosted on AWS RDS  
- **Static frontend** served via Elastic Beanstalk  
- **Dynamic product catalog** fetched from RDS  
- **Images served locally** from the public folder  
- **Environment configuration** via `.env` variables  
- **Fully deployed on AWS** (Elastic Beanstalk & RDS)  

---

## AWS Architecture

- **Elastic Beanstalk**: Hosts the Node.js application and serves the frontend  
- **RDS (MySQL)**: Stores product data such as names, prices, and image paths  
- **Environment Properties**: Securely stores database credentials and other secrets  
- **EC2 Instances**: Managed by Elastic Beanstalk, running the Node.js server  
- **Images**: Served locally from the `public` folder to simplify deployment (S3 integration considered but not implemented in this demo)  

---

## Getting Started

### Clone the Repository
    git clone https://github.com/eSKay7/aws-ecommerce-demo.git
    cd aws-ecommerce-demo

### Install Dependencies
    npm install

### Configure Environment Variables

Create a .env file in the root directory with the following variables:

    DB_HOST={your-rds-endpoint}
    DB_USER={your-db-username}
    DB_PASSWORD={your-db-password}
    DB_NAME={your-db-name}

### Start the Server
    node server.js
Open your browser at http://localhost:3000 to see the demo.

Navigate to http://localhost:3000/products when running the server locally to view the product data in **JSON format**, dynamically fetched from the MySQL RDS database 

## Screenshots

### 1. E-Commerce Site Frontend

<img width="1916" height="907" alt="image" src="https://github.com/user-attachments/assets/b0b3b7fe-facc-4587-9041-1c621ccc1ffa" />

### 2. AWS Elastic Beanstalk Environment

<img width="1905" height="823" alt="image" src="https://github.com/user-attachments/assets/067672b4-9e1a-4e86-b02e-5266987d52c3" />

### 3. AWS RDS Dashboard

<img width="1904" height="822" alt="image" src="https://github.com/user-attachments/assets/38275b54-7a55-4b34-92a0-b2109244c113" />

### 4. Product Catalog JSON Response

<img width="374" height="351" alt="image" src="https://github.com/user-attachments/assets/ae8cd3ad-ce0d-4cee-9c66-83b88afa53d0" />


