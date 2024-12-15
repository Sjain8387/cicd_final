const express = require('express');
const app = express();
const port = 3001;

// Define a route
app.get('/api/status', (req, res) => {
    res.json({ status: 'Healthy' });
});

// Start the server
app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
