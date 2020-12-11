import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import './style.scss';

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-sm bg-secondary" >
        <div className="navbar-logo">
            <Logo />
        </div>
         <ul className="navbar-nav">
            <li className="nav-item">
               <NavLink 
               className="nav-link"
               to="/"
               exact>
                   <i className="fas fa-university"></i>&nbsp;
                   Home 
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink 
               className="nav-link"
               to="/WorkOut">
                <i className="fas fa-dumbbell"></i>&nbsp;
                   Work Out
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink 
               className="nav-link"
               to="/Diet">
                <i className="fas fa-utensils"></i>&nbsp;
                   Diet
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink 
               className="nav-link"
               to="/Connect">
                <i className="fas fa-envelope-open"></i>&nbsp;
                   Connect
               </NavLink>
            </li>
        </ul>
    </nav>
)