import { gql } from 'apollo-boost';

export default gql`
  mutation createUser($input: UserInputType!) {
    createUser(input: $input) {
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
