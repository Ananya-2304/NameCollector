# Name Collector App

A simple web app that collects a user's name, displays buttons, and saves user selections in MongoDB. Built with React.js, Node.js, Express, and MongoDB.

## Features
- Input user name and save it to the database.
- Display buttons for user selection.
- Save button selection in the database.
- User-friendly pop-up on button selection for further actions.
- Error page for users who try to access the buttons page without entering their name.

## Technologies Used
- Frontend: React.js, CSS
- Backend: Node.js, Express
- Database: MongoDB

## Prerequisites

Make sure you have the following installed on your system:
- Npm
- MongoDB

## Cloning the Repository

1. Open your terminal and clone the repository:

   ```bash
   git clone <repository-URL>
   ```

## Installing Dependencies

### Backend Setup:

1. Navigate to the server folder:

   ```bash
   cd server
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   node index.js
   ```

   The backend server will run on http://localhost:5000.

### Frontend Setup:

1. Navigate to the client folder:

   ```bash
   cd name-collector
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend React application:

   ```bash
   npm start
   ```

   The React app will run on http://localhost:3000.

## MongoDB Setup

1. Make sure MongoDB is running on your system.
2. Open **MongoDB Compass** and connect to the local MongoDB instance.
3. Create a new database called `name-collector` with a collection named `users`.

## How to Use the App

1. Open your browser and navigate to http://localhost:3000.
2. Enter your name on the home page and submit.
3. On the next page, select a button, which will save your selection in the database.
4. A pop-up will appear asking if you want to continue selecting buttons:
   - If you choose **Yes**, the pop-up will close and you can select more buttons.
   - If you choose **No**, you will be logged out, and the name will be removed.

## Logging Out

To log out, simply click the **Logout** button. This will remove your name from local storage and redirect you to the home page.

## Error Handling

- If you try to access the buttons page without entering your name, an error page will appear with a button to redirect you to the home page.
```
