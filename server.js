// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { sql, connectToDatabase } = require('./bd'); // Import your database connection
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the public directory

// Connect to the database
connectToDatabase();

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await sql.query`SELECT * FROM users WHERE username = ${username} AND password = ${password}`;
        if (result.recordset.length > 0) {
            res.redirect('/dashboard.html');
        } else {
            res.send('Invalid credentials');
        }
    } catch (err) {
        console.error('SQL query error:', err);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
