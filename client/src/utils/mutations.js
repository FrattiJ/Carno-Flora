import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($fN: String!, $lN: String!, $email: String!, $pW: String!) {
    addUser(fN: $fN, lN: $lN, email: $email, pW: $pW) {
      token
      user {
        _id
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
