// Required modules
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const cors = require('cors');
const dotenv = require('dotenv');

// Configure environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();
const port = process.env.PORT || 5000;

// Apply middleware
app.use(cors());             // Handle CORS for frontend-backend requests
app.use(express.json());      // Parse JSON request bodies

// Configure PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Simple test route for server status
app.get('/', (req, res) => {
  res.send('Server is up and running.');
});

// Register route: creates a new user with email and password
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Secure the password with hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, hashedPassword]
    );
    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'There was an error with registration.' });
  }
});

// Login route: checks user credentials and returns a token
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Look for the user by email
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (user && await bcrypt.compare(password, user.password)) {
      // Create JWT token with user info
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.json({ token });  // Respond with the token for client storage
    } else {
      res.status(401).json({ message: 'Invalid email or password.' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Login error. Please try again.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});