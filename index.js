import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Apollo
import client from './config/apollo.js';
import {ApolloProvider} from "@apollo/client";

const marketplace = () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
)

AppRegistry.registerComponent(appName, () => marketplace);
