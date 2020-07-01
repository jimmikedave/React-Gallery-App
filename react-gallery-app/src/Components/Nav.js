import React from 'react';
import {Route} from 'react-router-dom';

const Nav = () => {
return (
    <nav className="main-nav">
         <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
         </ul>
     </nav>

    )
}

export default Nav;