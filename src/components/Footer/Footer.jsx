// import { Box } from '@mui/material'
import './Footer.css'
import React from 'react'

function Footer() {
  return (
    <footer className="footer">
        <div className="group-1">
            <div className="box">
                <figure>
                    <a href="/">
                        <img src="./img/logo_festival.png" alt="logo festival" />
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>Siguenos</h2>
                <div className="red-social">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-youtube"></a>
                </div>
            </div>
            <div className="box">
                <p>

                afiliados a:  
                <img src="./img/mincul.png" alt="ministerio de cultura" />
                </p>

            </div>
        </div>
        <div className="group-2">
            <small>
                &copy; 2022 <b>Festival circense</b> - Todos los Derechos reservados.
            </small>
        </div>
    </footer>
  )
}

export default Footer