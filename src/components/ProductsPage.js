import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ProductsAssembling from './products/ProductsAssembling';
import Nike from './products/Nike' ;
import Polo from './products/Polo' ;
import Adidas from './products/Adidas' ;
import Cooper from './products/Cooper' ;




const CategoryPage = () =>{

    return (
      <div >
        <Router>
        <div className="flex-it">
        <ProductsAssembling/>
        <Switch>
          <div >
          <Route path="/nike" component={Nike}/>
        <Route path="/polo" component={Polo}/>
        <Route path="/adidas" component={Adidas}/>
        <Route path="/cooper" component={Cooper}/>
        
        </div>
        </Switch>
        </div>
        </Router>
      </div>
    )
  }

export default CategoryPage;