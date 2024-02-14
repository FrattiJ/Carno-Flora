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
