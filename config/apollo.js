import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from "@react-native-async-storage/async-storage";

const httpLink = createHttpLink({
	uri: "http://192.168.0.18:4000/"
})

const authLink = setContext(async(_, { headers }) => {
  const token = await AsyncStorage.getItem('tokenLogin');

  return {
  	headers: {
  		...headers,
  		authorization: token ? `Bearer ${token}` : ""
  	}
  }
});

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink)
});

export default client;