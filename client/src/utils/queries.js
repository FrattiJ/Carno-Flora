import { gql } from "@apollo/client";

export const SEARCH_ITEMS = gql`
  query SearchItems($query: String!) {
    searchItems(query: $query) {
      id
      name
      description
    }
  }
`;

// Added query to get all items for Jumbotron/Shop
export const GET_ITEMS = gql`
  query GetItems {
    items {
      _id
      name
      description
      price
      image
    }
  }
`;

export const QUERY_CART = gql`
  query getCart($Items: [itemInput]) {
    checkout(Items: $Items) {
      session
    }
  }
`;

export const SEARCH_USER = gql`
  query SearchUser($_id: ID!) {
    user(_id: $_id) {
    _id
    fN
    lN
    email
    pW
    country
    streetAddress
    city
    state
    zip
    phone
    orders{
      _id
    }
    }
  }
`;