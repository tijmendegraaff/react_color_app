import ApolloClient from 'apollo-boost';

const uri = process.env.NODE_ENV === 'production' ? process.env.API_URL : 'http://localhost:4000/api';
const client = new ApolloClient({
  uri,
});

export default client;
