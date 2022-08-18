import React from 'react'
import './ViiiFestival.css'
import {Grid} from '@mui/material'

function ViiiFestival() {
  return (
    <div className="viii-festival">
        <h2>VIII FESTIVAL INTERNACIONAL DE CIRCO</h2>
        <div className="viii-festival__container">
            <p>En 2019 se realiza la octava versión del Festival Internacional de Circo Pista de Oro. En esta oportunidad se realizó bajo las instalaciones del “CIRCO VASQUEZ” de Eleodoro Godoy y Araceli Galvez.</p>
            <p>sta version se caracteriza por ser una de las mas exitosas pues se destacaron una enorme variedad de actos, disciplinas, destrezas y profesionalismo, además de contar con un Jurado Internacional, reuniendo a los diferentes empresarios, artistas y reconocidas identidades del circo mundial para escoger a los ganadores del premio mayor, dandole así a este festival la calidad y prestigio que se merece.</p>
            <p>Se destaca la participación tanto de artistas nacionales, de familias reconocidas en el gremio circense nacional, como de artistas internacionales que se han presentado en diferentes pistas alrededor del mundo y que demostraron su enorme talento al competir en busca de este galardón.</p>
        <Grid container spacing={2} >
                <Grid item xs={12} md={6} className="premios">
                    <img src="./img/festival8-1.png" alt="pista de oro" />
                    <h3>PISTA DE ORO</h3>
                    <h4>Hermanos Segura</h4>
                    <h4>Argentina</h4>
                </Grid>
                <Grid item xs={12} md={6} className="premios">
                <img src="./img/festival8-2.png" alt="pista de plata" />
                <h3>PISTA DE PLATA</h3>
                    <h4>Victor Krachinov</h4>
                    <h4>Rusia</h4>
                </Grid>
            </Grid>
            <Grid container spacing={2} className="premios" >
                <Grid item xs={12} md={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={4} md={4}>

                <img src="./img/festival8-4.png" alt="pista de bronce" />
                <h3>PISTA DE Bronce</h3>
                    <h4>Laureys Cartes</h4>
                    <h4>Chile</h4>
                        </Grid>
                        <Grid item xs={4} md={4}>

                <img src="./img/festival8-3.png" alt="pista de bronce" />
                <h3>PISTA DE Bronce</h3>
                    
                        </Grid>
                        <Grid item xs={4} md={4}>

                <img src="./img/festival8-5.png" alt="pista de bronce" />
                <h3>PISTA DE Bronce</h3>
                    <h4>Leonel Vanegas</h4>
                    <h4>El Salvador</h4>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}className="premios">
                <img src="./img/festival8-6.png" alt="pista de oro payaso" />
                <h3>PISTA DE ORO</h3>
                    <h4>Categoria Payaso</h4>
                    <h4>Kukin y Kukin Jr</h4>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default ViiiFestival
