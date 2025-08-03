const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Breakfast', 'Appetizers', 'Mains', 'Desserts', 'Drinks'], // ✅ updated enum
    required: true
  },
  mealTime: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Anytime'], // ✅ added mealTime
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
