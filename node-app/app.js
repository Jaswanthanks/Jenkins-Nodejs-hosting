const express = require('express');
const app = express();

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello from Node.js App via Jenkins CI/CD!');
});

// Set the port (default to 3000 if not provided)
const port = process.env.PORT || 3000;

// Start the server and bind to 0.0.0.0 so it’s accessible externally
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running and listening on port ${port}`);
});

// Export for testing or future expansion
module.exports = app;
