import React from 'react'
import styles from './Header.module.css'
import logo from './images/Recidivistlogo.png.png'

function Header() {
  return (
    <header>
      <img src={logo} alt="" className={styles.logo}/>
    </header>
  )
}

export default Header
