import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($fN: String!, $lN: String!, $email: String!, $pW: String!) {
    addUser(fN: $fN, lN: $lN, email: $email, pW: $pW) {
      token
      user {
        _id
        fN
        lN
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $pW: String!) {
    login(email: $email, pW: $pW) {
      token
      user {
        _id
        fN
        lN
        email
      }
    }
  }
`;

export const ADD_CART = gql`
  mutation addCart($Items: [ID]!) {
    addCart(Items: $Items) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($fN: String!, $lN: String!, $email: String!, $country: String!, $streetAddress: String!,  $city: String!,  $state: String!,  $zip: Int!,  $phone: Int!) {
    addUser(fN: $fN, lN: $lN, email: $email, country: $country, streetAddress: $streetAddress, city: $city, state: $state, zip: $zip, phone: $phone, ) {
      Order {
        _id
        fN
        lN
        email
        country
        streetAddress
        city
        state
        zip
        phone
      }
    }
  }
`;

