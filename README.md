# iPhone Comparator Project

## Overview
The iPhone Comparator project is designed to help users compare different iPhone models by providing a user-friendly interface and a robust backend API. The application is structured using the Model-View-Controller (MVC) architecture, ensuring a clear separation of concerns and maintainability.

## Project Structure
The project is organized into the following main directories:

- **backend**: Contains the server-side code, including controllers, models, and routes for handling API requests.
- **frontend**: Contains the client-side code built with React, including components and pages for the user interface.
- **database**: Contains configuration files for database connections.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **docker-compose.yml**: Defines the services and configurations for deploying the application using Docker.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MySQL (managed via phpMyAdmin)
- **Containerization**: Docker

## Features
- Compare different iPhone models based on specifications.
- User-friendly interface for easy navigation and comparison.
- RESTful API for fetching product data and handling user requests.

## Getting Started
To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd iphone-comparator
   ```

2. **Set up the backend**:
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Start the server:
     ```
     npm start
     ```

3. **Set up the frontend**:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm start
     ```

4. **Database Configuration**:
   - Ensure that your MySQL database is running and accessible.
   - Configure the database connection settings in `database/dbConfig.js`.

5. **Access the Application**:
   - Open your web browser and navigate to `http://localhost:3000` to access the frontend application.

## Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.