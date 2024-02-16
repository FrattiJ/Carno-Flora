import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CartProvider } from "./utils/GlobalState";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notification from "./components/Notification";

const httpLink = createHttpLink({
  uri: "/graphql",
});

//changed /graphql to http://localhost:3001/graphql to stop 404 error

// const httpLink = createHttpLink({
//   uri: "http://localhost:3001/graphql",
// });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <div>
          <Navbar />
          {/* <Main /> */}
          <Notification />
          <main className="">
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ApolloProvider>
  );
}

export default App;
