import { Router, route } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Library from '../routes/library';
import LibraryCreator from '../routes/libraryCreator';

/**
 * Removes the #! injected into the url
 * A #! is prefixed to all requests sent to our S3 instance so that we send the index no matter what path is requested
 * This allows the Router component to handle Routing and prevents 404/403 errors from requesting files which don't exist
 * [More Info](https://via.studio/journal/hosting-a-reactjs-app-with-routing-on-aws-s3)
 */
const sanitizeHashPrefix = () => {
	const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
	if (path) {
		route(path);
	}
}

const App = () => (
	<div id="app">
		<Header />
		<Router onChange={sanitizeHashPrefix()}>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
			<Library path="/library/:library" />
			<LibraryCreator path="/library/newLibrary" />
		</Router>
	</div>
)

export default App;
