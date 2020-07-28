import React from 'react';
import '../App.css'
 
import CategoryAssembling from './category/Categoryassembling'
import Shoes from './category/Shoes'
import Boots from './category/Boots'
import Footwear from './category/Footwear'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const CategoryPage = () =>{

    return (
      <div className="App">
        <Router>
        <div>
        <CategoryAssembling/>
        <Switch>
          <div className="components">
          <Route path="/shoes" component={Shoes}/>
        <Route path="/boots" component={Boots}/>
        <Route path="/footwear" component={Footwear}/>
        
        </div>
        </Switch>
        </div>
        </Router>
      </div>
    )
  }

export default CategoryPage;