// queries.js
import { gql } from '@apollo/client';

export const SEARCH_ITEMS = gql`
  query SearchItems($query: String!) {
    searchItems(query: $query) {
      id
      name
      description
    }
  }
`;
