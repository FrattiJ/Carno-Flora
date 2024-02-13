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

  input itemInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }


  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    items: [Item]
    item(_id: ID!): Item
    itemName(name: String!): [Item]
    orders: [Order]
    order(_id: ID!): Order  
    carts: [Cart]
    cart(_id: ID!): Cart 
    checkout(Items: [itemInput]): Checkout
  }
`;

module.exports = typeDefs;
