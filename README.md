# Project Title

## Description
This project is a chat bot application that utilizes pre-trained AI models. The application is structured to handle user interactions and manage data through a SQL database.

## Getting Started

### Prerequisites
- Node.js
- SQL Database (e.g., MySQL, PostgreSQL)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory and add your SQL database connection details:
   ```
   PORT=5001
   SQL_DATABASE_URI=your_sql_connection_string
   OPENROUTER_API_KEY=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
   ```

### Running the Application
To start the application, run:
```
npm start
```

### API Endpoints
- **GET /api/users**: Retrieve all users.
- **POST /api/users**: Create a new user.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License
This project is licensed under the MIT License.