import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';

   
export default class Nav extends Component{

    render() {
        

        return (
    
            <div className="main-nav">
                 <ul>
                  <li><NavLink to='/Cats'>Cats</NavLink></li>
                  <li><NavLink to='/Dogs'>Dogs</NavLink></li>
                  <li><NavLink to='/Computers'>Computers</NavLink></li>
                 </ul>
            </div>
        
        );
    }
};


