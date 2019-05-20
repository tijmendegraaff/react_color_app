import ApolloClient from 'apollo-boost';

const uri = process.env.NODE_ENV === 'production'
  ? 'https://afternoon-mesa-94126.herokuapp.com/api'
  : 'http://localhost:4000/api';

const client = new ApolloClient({
  uri,
});

export default client;
