import React from 'react';
import {NavLink} from "react-router-dom";
import './navbar.css'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <NavLink to="/">
                        <li>Dashboard</li>
                    </NavLink>
                    <NavLink to="/api">
                        <li>Api</li>
                    </NavLink>
                </ul>
                
            </div>);
    }
}