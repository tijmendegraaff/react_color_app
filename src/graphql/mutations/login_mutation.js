import { gql } from 'apollo-boost';

export default gql`
  mutation createSession($input: SessionInputType!) {
    createSession(input: $input) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
