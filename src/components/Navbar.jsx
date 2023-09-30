import React from 'react'
import './css/Navbar.css'
import logo from '../utils/images/Youtube-Logo-Font.webp'
import { SearchBar } from './'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div className='navbar-container'>
      <Link to='/' className="logo">
        <img src={logo} alt="youtube logo" />
      </Link>
      <div>
        <SearchBar />
      </div>
    </div>
  )
}
