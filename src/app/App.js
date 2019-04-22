import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import GeneratePage from './pages/GeneratePage/GeneratePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/generate-pdf" exact component={GeneratePage} />
        </div>
      </Router>
    );
  }
}

export default App;
