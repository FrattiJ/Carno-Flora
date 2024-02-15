const cors = require("cors"); // Added to allow cross-origin requests
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { auth } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors()); // Added to allow cross-origin requests
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.use("/images", express.static(path.join(__dirname, "../client/public")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: auth,
    })
  );

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://t:${PORT}/graphql`);
    });
  });
};

startApolloServer();
