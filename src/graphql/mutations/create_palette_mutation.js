import { gql } from 'apollo-boost';

export default gql`
  mutation createPalette($input: PaletteInputType!) {
    createPalette(input: $input) {
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
`;
