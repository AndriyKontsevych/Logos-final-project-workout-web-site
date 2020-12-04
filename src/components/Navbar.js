import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-secondary" >
        <div className="navbar-brand">
            <Logo />
        </div>
         <ul className="navbar-nav">
            <li className="nav-item">
               <NavLink 
               className="nav-link"
               to="/"
               exact>
                   Home 
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink 
               className="nav-link"
               to="/WorkOut">
                   Work Out
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink 
               className="nav-link"
               to="/Diet">
                   Diet
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink 
               className="nav-link"
               to="/Connect">
                   Connect
               </NavLink>
            </li>
        </ul>
    </nav>
)