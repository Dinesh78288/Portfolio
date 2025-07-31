const express = require('express');
const bodyParser = require('contactForm');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    // Save the message data to a file (or database)
    const formData = { name, email, message, date: new Date().toISOString() };
    fs.appendFile('messages.json', JSON.stringify(formData) + '\n', (err) => {
        if (err) {
            console.error('Error saving message:', err);
            return res.status(500).send('Internal server error.');
        }
        res.status(200).send('Message saved successfully!');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});