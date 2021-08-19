import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Styles/App.css';
import AnimalDetail from './AnimalDetail.js';
import AnimalList from './AnimalList.js';
import Create from './Create.js';
import Header from './Header.js';

class App extends Component {
  state = {};
  render() { 
    return ( 
      <>
        <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={AnimalList} />
              <Route path="/animals/:id" component={AnimalDetail} />
              <Route path="/create" component={Create} />
            </Switch>
        </BrowserRouter>
      </>
     );
  }
}
 
export default App;
