import ApolloClient from 'apollo-boost';
import { AUTH_TOKEN } from '../constants/constants';

const uri = process.env.NODE_ENV === 'production'
  ? 'https://afternoon-mesa-94126.herokuapp.com/api'
  : 'http://localhost:4000/api';

const token = localStorage.getItem(AUTH_TOKEN);

const client = new ApolloClient({
  uri,
  headers: { authorization: token ? `Bearer ${token}` : '' },
});

export default client;
