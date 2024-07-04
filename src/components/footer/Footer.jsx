import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className ="footer">
          <div className ="footer-section logo-section">
          </div>
          <div className="footer-section ">
                    <ul className='footerUl'>
                    <li>Aviso legal</li>
                    <li>Política de cookies</li>
                    <li>Accesibilidad</li>
                    <li></li>
                    <li>Webs relacionados </li>
                    </ul>   
          </div>
          <div className="footer-bottom">
                    <p className='footer-botton-copy'>
                      &copy; Copyright 2020. All Rights Reserved
                    </p>
                   
          </div>
    </footer>
  );
};
export default Footer
