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
    name: "Venus Flytrap(King Henry)",
    description:
      "Fascinating carnivorous plant which attracts insects and then snares them by closing around it's prey. 'King Henry' is a large variety of Venus Flytrap named after King Henry because of his size and voracious appetite. A very fast growing and attractive clone.",
    price: 19.99,
    quantity: 10,
    image: "/kinghenry.png",
    category: "Venus Flytrap",
  },
  {
    name: "Venus Flytrap(Typical)",
    description:
      "Fascinating carnivorous plant that catches and digests insect prey. Standard Venus Flytrap. Native to North Carolina",
    price: 9.99,
    quantity: 18,
    image: "/plant.jpg",
    category: "Venus Flytrap",
  },
  {
    name: "Heliamphora",
    description:
      "Features deep cavities filled with digestive fluid to trap insects. Slower growing and requires more advanced care in a controlled environment.",
    price: 29.99,
    quantity: 8,
    image: "/heliamphora.jpg",
    category: "Pitcher Plant",
  },
  {
    name: "Drosera Spatulata(Sundew)",
    description:
      "Covered in sticky, sweet dew that attracts and traps insects. Vibrant red colored rosette makes a good companion plant or ground cover in displays. Grows to approx. 3 inches in diameter.",
    price: 20.99,
    quantity: 15,
    image: "/spatulata.png",
    category: "Sundew",
  },
  {
    name: "Pinguicula 'Pirouette'",
    description:
      "Uses sticky leaves to trap insects, digesting them with enzymes. Pirouette is a very adaptable and beautifully colored hybrid that stands out in a collection.",
    price: 14.99,
    quantity: 12,
    image: "/pirouette.png",
    category: "Butterwort",
  },
  {
    name: "Pinguicula Moranensis",
    description:
      "Uses sticky leaves to trap insects, digesting them with enzymes. Pinguicula Moranensis is one of the larger species that stays low growing and has a very rich pink color. In the winter, the carnivorous leaves disappear and are replaced by non-carnivorous succulent leaves until spring when the rain returns. ",
    price: 18.99,
    quantity: 6,
    image: "/moranensis.png",
    category: "Butterwort",
  },
  {
    name: "Cephalotus 'Hummer's Giant'",
    description:
      "This pitcher plant native to Australia is very unique. The pitchers secrete an enzyme to attract insects to the rim which the insects will try to drink and slip into the pitcher. Lining the inside of the rim are small barbs. The pitcher has a lid that slightly covers the pitcher to prevent evaporation and aid in trapping. This particular clone was bred and named by John Hummer and is known for its impressive size. About twice that of a typical Cephalotus.",
    price: 59.99,
    quantity: 8,
    image: "/cephalotushg.png",
    category: "Pitcher Plant",
  },
  {
    name: "Nepenthes (Tropical Pitcher Plant)",
    description:
      "Nepenthes vary from all other pitcher plants in that they are a vining plant. Many live in humid or tropical environments making them suitable to grow outdoors in warmer climates. They can get very large and some species have been reported to eat creatures as large as rats. Many Nepenthes have two separate types of pitchers, ones that grow near the base of the plant and 'upper pitchers' which grow once the plant begins to extend and vine upwards.",
    price: 29.99,
    quantity: 7,
    image: "/nepenthes.jpg",
    category: "Pitcher Plant",
  },
];

const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

// Connect to MongoDB
// mongoose
//   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected successfully."))
//   .catch((err) => console.error("MongoDB connection error:", err));
// // Connect to MongoDB
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
