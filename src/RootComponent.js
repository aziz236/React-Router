import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductsPage from './components/ProductsPage'
import CategoryPage from './components/CategoryPage'
import HomePage from './components/HomePage'
import AdminPage from './components/AdminPage'
import Nav from './components/Nav'
import AdminIsHere from './components/adminFolder/GreetingAdmin'


const RootComponent = () =>{

    return (
      <div className="App">
        <Router>
        <div>
        <Nav/>
        
        <Switch>
          <div className="components">
        <Route path="/" exact component={HomePage}/>
        <Route path="/category" exact component={CategoryPage}/>
        <Route path="/product" component={ProductsPage}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/adminIsHere" component={AdminIsHere}/>
        </div>
        </Switch>
        </div>
        </Router>
      </div>
    )
  }

export default RootComponent;
