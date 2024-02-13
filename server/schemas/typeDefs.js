const typeDefs = `
  type Item {
    _id: ID
    name: String
    description: String
    price: Float
    quantity: Int
    image: String
  }

  type Cart {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type User {
    _id: ID  
    fN: String
    lN: String
    email: String
    pW: String
    orders: [Order]
  }

  type Order {
    _id: ID
    fN: String
    lN: String
    email: String
    country: String
    streetAddress: String
    city: String
    state: String
    zip: String
    phone: Int
    carts: [Cart]
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    items: [Item]
    item(_id: ID!): Item
    orders: [Order]
    order(_id: ID!): Order  
    carts: [Cart]
    cart(_id: ID!): Cart 
  }
`;

module.exports = typeDefs;
