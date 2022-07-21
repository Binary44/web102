import "./Navbarstyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="header">
        <Link to="/">
            <h1>Binary_Coder</h1>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/project">Project</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
            </ul>
            <div className="hamburger">
                <FaBars />
            </div>
    </div>
  )
}

export default Navbar