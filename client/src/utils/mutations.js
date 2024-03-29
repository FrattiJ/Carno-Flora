import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($fN: String!, $lN: String!, $email: String!, $pW: String!, $country: String!, $streetAddress: String!,  $city: String!,  $state: String!,  $zip: String!,  $phone: String!) {
    addUser(fN: $fN, lN: $lN, email: $email, pW: $pW,country: $country, streetAddress: $streetAddress, city: $city, state: $state, zip: $zip, phone: $phone) {
      token
      user {
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
      Items {
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
  mutation addOrder($fN: String!, $lN: String!, $email: String!, $country: String!, $streetAddress: String!,  $city: String!,  $state: String!,  $zip: String!,  $phone: String!) {
    addUser(fN: $fN, lN: $lN, email: $email, country: $country, streetAddress: $streetAddress, city: $city, state: $state, zip: $zip, phone: $phone) {
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

export const UPDATE_USER = gql`
  mutation updateUser($fN: String, $lN: String, $email: String, $pW: String, $country: String, $streetAddress: String,  $city: String,  $state: String,  $zip: String,  $phone: String) {
    updateUser(fN: $fN, lN: $lN, email: $email, pW: $pW, country: $country, streetAddress: $streetAddress, city: $city, state: $state, zip: $zip, phone: $phone) {
      user {
        _id
        fN
        lN
        pW
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

export const DELETE_USER = gql`
  mutation deleteuser($ID: String!) {
    deleteuser(_id: $ID) {
      user {
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

