# User Card App

## Project Description

User Card App is a web application that retrieves a list of users from the API and displays them as cards. The application also provides functionality to filter cards by user properties.

## Main Functions

- Retrieving the list of users from the endpoint https://jsonplaceholder.typicode.com/users
- Displaying the list of users as cards
- Filtering cards by any property from the user description
- Adaptive layout for correct display on all screen sizes

## Technology

- JavaScript (ES6+)
- HTML5
- CSS3
- Webpack to build the project

Note: The project is implemented without using any frameworks or libraries.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/kosmodromm/user-card-app.git
   ```
2. Navigate to the project directory:
   ```
   cd user-card-app
   ```
3. Establish dependencies:
   ```
   npm install
   ```

## Launching the application

- To run in development mode:
  ```
  npm run start
  ```
  This will start the application at `http://localhost:9001`.

- To build a production version:
  ```
  npm run build
  ```
  This will create an optimized version of the application in the `dist` folder.

## Project structure

```
user-card-app/
├── src/
│   ├── index.js
│   ├── styles.css
│   └── components/
│       └── [Application components]
│   └── utils/
│       └── [Support functions and utilities]
├── webpack.config.js
├── package.json
└── README.md
```

## Additional Notes

- Make sure you have Node.js and npm installed before starting the project.
- The application requires a stable internet connection to receive data from the API in order to work properly.