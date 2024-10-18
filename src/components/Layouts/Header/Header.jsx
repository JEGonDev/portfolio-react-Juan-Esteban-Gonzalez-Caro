import React from 'react';
import './Navbar.css'

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about-me">About Me</a>
          </li>
          <li className="navbar-item">
            <a href="/contact-me">Contact Me</a>
          </li>
          <li className="navbar-item">
            <a href="/other-routes">Other Routes</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}


