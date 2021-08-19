import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div><img src="https://stardewvalleywiki.com/mediawiki/images/6/68/Main_Logo.png" alt="The official Stardew Valley logo" /></div>
                <div className="links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/create">Enter New Animal</NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;