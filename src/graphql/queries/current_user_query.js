import { gql } from 'apollo-boost';

export default gql`
  query {
    currentUser {
      firstName
      lastName
      email
      palettes {
        id
        name
        emoji
        colors {
          id
          name
          colorCode
        }
      }
    }
  }
`;
