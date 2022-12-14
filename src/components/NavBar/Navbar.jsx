import React from 'react'
import CartWidget from '../CartWidget/cartWidget';
import './navbar.css'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav-brand">
                <h2>Cafetería Maraschio</h2>
            </div>
            <ul className="nav-list">
                <li>
                    <NavLink to="/" className="nav-link">Inicio</NavLink>
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
