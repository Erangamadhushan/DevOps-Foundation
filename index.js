const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API',
        endpoints: {
            health: '/health',
            users: '/api/users'
        }
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});