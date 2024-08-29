import React from 'react'
import '../../styles/navbar.styles.scss'
import vector1 from '../../assets/Vector.svg'
import Button from '../../common/Button'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h1 className='title'>CHILLED GRAPE</h1>
      <img src={vector1} className='background-image' alt='Background' />
      <div className='menu-container'>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Pricing</li>
        <Button text="login" />
      </div>
    </div>


  )
}

export default Navbar