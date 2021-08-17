import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div>Stardew Valley Farm Animals</div>
                <div className="links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/create">Enter New Animal</NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;