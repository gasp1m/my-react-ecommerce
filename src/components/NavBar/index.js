import React from 'react'
import CartWidget from '../CartWidget';

export const NavBar = () => {
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav-brand">
                <a href="#" className="nav-link">Maraschio</a>
            </div>
            <ul className="nav-list">
                <li>
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="#" className="nav-link">Categoría 1</a>
                </li>
                <li>
                    <a href="#" className="nav-link">Categoría 2</a>
                </li>
                <li>
                    <CartWidget/>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;
