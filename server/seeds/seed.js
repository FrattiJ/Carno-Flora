const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Users, Items, Carts, Orders } = require("../models");

// MongoDB connection string
const dbURI = "mongodb://127.0.0.1:27017/pro2";

const usersData = [
  {
    fN: "Alice",
    lN: "Johnson",
    email: "alice@example.com",
    pW: "password1",
  },
  {
    fN: "Bob",
    lN: "Smith",
    email: "bob@example.com",
    pW: "password2",
  },
];

// Items Data
const itemsData = [
  {
    name: "Venus Flytrap",
    description:
      "Fascinating carnivorous plant that catches and digests insect prey.",
    price: 25.99,
    quantity: 10,
    image: "/plant.jpg",
  },
  {
    name: "Pitcher Plant",
    description:
      "Features deep cavities filled with digestive fluid to trap insects.",
    price: 30.99,
    quantity: 8,
    image: "/heliamphora.jpg",
  },
  {
    name: "Sundew",
    description:
      "Covered in sticky, sweet dew that attracts and traps insects.",
    price: 20.99,
    quantity: 15,
    image: "/plant.jpg",
  },
  {
    name: "Butterwort",
    description:
      "Uses sticky leaves to trap insects, digesting them with enzymes.",
    price: 18.99,
    quantity: 12,
    image: "/heliamphora.jpg",
  },
];

const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

// Connect to MongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => console.error("MongoDB connection error:", err));

// Seed function
const seedDB = async () => {
  try {
    // Hash user passwords
    for (const user of usersData) {
      user.pW = await hashPassword(user.pW);
    }

    // Clear existing data
    await Promise.all([
      Users.deleteMany({}),
      Items.deleteMany({}),
      Carts.deleteMany({}),
      Orders.deleteMany({}),
    ]);
    Users.collection.drop();
    await Users.insertMany(usersData);
    await Items.insertMany(itemsData);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
