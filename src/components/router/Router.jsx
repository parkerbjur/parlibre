import {Router, route} from 'preact-router';

class ParlibreRouter extends Router {
  constructor(props){
    super(props);
  }

  /**
   * Removes the #! injected into the url
   * A #! is prefixed to all requests sent to our S3 instance so that we send the index no matter what path is requested
   * This allows the Router component to handle Routing and prevents 404/403 errors from requesting files which don't exist
   * [More Info](https://via.studio/journal/hosting-a-reactjs-app-with-routing-on-aws-s3)
   */
  sanitizeHashPrefix = () => {
    console.log('sanitize hash prefix');
    const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
    if (path) {
      console.log(path);
      route(path);
    }
  }

  render(){
    return(
      <Router onChange={this.sanitizeHashPrefix()}>{this.props.children}</Router>
    )
  }
}

export { ParlibreRouter as Router };
