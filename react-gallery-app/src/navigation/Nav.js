import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import Cats from './Cats';
import Dogs from './Dogs';
import Computers from './Computers';

const Nav = () => (

    <div className="main-nav">
         <ul>
          <li><NavLink to='/Cats'>Cats</NavLink></li>
          <li><NavLink to='/Dogs'>Dogs</NavLink></li>
          <li><NavLink to='/Computers'>Computers</NavLink></li>
         </ul>

    <Route path="navigation/Cats" component={Cats} />
    <Route path="navigation/Dogs" component={Dogs} />
    <Route path="navigation/Computers" component={Computers} />

    </div>

);


export default Nav;