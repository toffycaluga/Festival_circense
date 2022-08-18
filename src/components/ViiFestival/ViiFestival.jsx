import { Grid } from '@mui/material'
import './ViiFestival.css'
import React from 'react'

function ViiFestival() {
  return (
    <div className='vii-festival'>
        <h2>VII FESTIVAL INTERNACIONAL DE CIRCO</h2>
        <div className="vii-festival__container">
            <p>En esta séptima versión 2018, realizada en el “CIRCO GIGANTE DE MÉXICO”, bajo la animación de Sergio Parada, se destaca la participación de grandes artistas nacionales, lo que demuestra la preparación y dedicación de los artistas, de los cuales algunos ya han pisado diferentes escenarios en el extranjero,otros artistas internacionales, provenientes de Ucrania, y el destacado mimo nacional que demuestra su versatilidad y capacidad de transformar su arte y llevarlo a lo que es el circo tradicional. </p>

            <Grid container spacing={2} >
                <Grid item xs={12} md={6} className="premios">
                    <img src="./img/festival7-2.png" alt="pista de oro" />
                    <h3>PISTA DE ORO</h3>
                    <h4>Hermanos Cardenas</h4>
                    <h4>Pendulo de la Muerte</h4>
                </Grid>
                <Grid item xs={12} md={6} className="premios">
                <img src="./img/festival7-3.png" alt="pista de plata" />
                <h3>PISTA DE PLATA</h3>
                    <h4>Troupe Magola Ucrania</h4>
                    <h4>Barras Olimpicas</h4>
                </Grid>
            </Grid>
            <Grid container spacing={2} className="premios" >
                <Grid item xs={12} md={6}>
                <img src="./img/festival7-4.png" alt="pista de bronce" />
                <h3>PISTA DE Bronce</h3>
                    <h4>Hermanos Reyes</h4>
                    <h4>Malabares</h4>
                </Grid>
                <Grid item xs={12} md={6}className="premios">
                <img src="./img/festival7-5.png" alt="pista de oro payaso" />
                <h3>PISTA DE ORO</h3>
                    <h4>Categoria Payaso</h4>
                    <h4>Mimo Tuga</h4>
                </Grid>
            </Grid>
        </div>
        
        </div>
  )
}

export default ViiFestival