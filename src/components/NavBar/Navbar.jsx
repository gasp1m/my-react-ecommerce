import React from 'react'
import CartWidget from '../CartWidget/cartWidget';
import './navbar.css'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav-brand">
                <NavLink href="#" className="nav-link">Maraschio</NavLink>
            </div>
            <ul className="nav-list">
                <li>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/cafes" className="nav-link">Cafés</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/tes" className="nav-link">Tés</NavLink>
                </li>
                <li> 
                    <NavLink className="nav-link" to="cart">
                        <CartWidget/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;
