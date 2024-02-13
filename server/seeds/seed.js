const mongoose = require('mongoose');
const User = require('../server/models/User'); 
const Plant = require('../server/models/Item'); 

// Connect to MongoDB database
mongoose.connect('mongodb://your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

// Seed data
const users = [
  { username: 'JungleExplorer42' },
  { username: 'PixelPioneer' },
  { username: 'QuantumNomad' },
  { username: 'StarryAdventurer' }
];

const plants = [
  { name: 'VenusFlytrap' },
  { name: 'SnapDragon' },
  { name: 'RazorLeaf' },
  { name: 'Sundew' }
];

// Function to seed data
async function seedData() {
  try {
    // Clear existing data
    await User.deleteMany();
    await Plant.deleteMany();

    // Insert new data
    const createdUsers = await User.create(users);
    const createdPlants = await Plant.create(plants);

    console.log('Data seeded successfully:', createdUsers, createdPlants);
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
