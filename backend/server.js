const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
const menuItemRoutes = require('./routes/menuItems');
const uploadRoutes = require('./routes/upload');

// COMMENT OUT all route mounts for now to test
// app.use('/users', userRoutes);
// app.use('/menu-items', menuItemRoutes);
// app.use('/upload', uploadRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log(err));

// Serve static frontend files in production
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Simple test route
app.get('/test', (req, res) => {
  res.send('Test route works!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
