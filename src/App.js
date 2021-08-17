import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from './Create.js';
import AnimalList from './AnimalList.js';
import AnimalDetail from './AnimalDetail.js';
import Header from './Header.js';
import './Styles/App.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={AnimalList} />
            <Route path="/animal/:id" component={AnimalDetail} />
            <Route path="/create" component={Create} />
          </Switch>
        </BrowserRouter>
      </>
     );
  }
}
 
export default App;
