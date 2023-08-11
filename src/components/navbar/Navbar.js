import React from 'react';
import style from '../navbar/navbar.module.css'

export default function Navbar() {
  return (
    <>

        <div className= {`${style.container} container`}>

            <div className="logo">
                <img src="/images/Frame.png" alt="" />
            </div>

            <div className= {style.navigation} >
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
            </div>

        </div>
     
    </>
  )
}
