const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
const menuItemRoutes = require('./routes/menuItems');
const uploadRoutes = require('./routes/upload');

// Use routes
app.use('/users', userRoutes);
app.use('/menu-items', menuItemRoutes);
app.use('/upload', uploadRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log(err));

// Test route
app.get('/', (req, res) => {
    res.send('MIS Backend is Running 🚀');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
