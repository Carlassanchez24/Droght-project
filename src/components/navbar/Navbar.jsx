import React, { useState } from 'react';
import './navbar.css'



function NavBar(){
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 80){
            setColor(true)
        } else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor);


  return (
   <>

   <nav className={color ? "nav nav-bg" : "nav"}>
        
       
        <div className="rightNavbar">
            <ul className="navbarUl">
                <li className="navbarLi">Home</li>
                <li className="navbarLi">Prevention</li>
                <li className="navbarLi">Pages</li>
                <li className="navbarLi">About</li>
                <li className="navbarLi">Help</li>
                <button  className="trackerNavbar">Know more</button>
            </ul>
        </div>
       
        </nav>
        </>
    )
   
};


export default NavBar;
