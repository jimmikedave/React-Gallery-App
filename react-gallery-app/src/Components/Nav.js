import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

   
export default class Nav extends Component{

    //Creates the paths for Cacti, Dogs, and Blobfish
    render() {
        

        return (
    
            <div className="main-nav">
                 <ul>
                  <li><NavLink to='/Cacti'>Cacti</NavLink></li>
                  <li><NavLink to='/Dogs'>Dogs</NavLink></li>
                  <li><NavLink to='/Blobfish'>Blobfish</NavLink></li>
                 </ul>
            </div>
        );
    }
};


