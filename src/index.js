import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAzEGJHgd8oM5opEL0DDiHs24R-1pfRJzY';

// Create a new component. this component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
