import React from 'react'
import { Grid, Typography,} from '@mui/material'

import './Mausoleo.css'

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';


function Mausoleo() {
  return (
    <div className="mausoleo">
      <Typography color='white'>
            <h2>

            Mausoleo Circense de Chile
            </h2>
          </Typography>
      <Grid container spacing={2} className='mausoleo__conatiner'>
            <Grid item xs={12} md={6}>
            <Card className="cardMausoleo" sx={{ Width:400 ,backgroundColor:'inherit' }} variant='text'>
      
          
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>

                <CardMedia
                  component="img"
                  height="300"
                  image="./img/mausoleo2.png"
                  alt="dia3"
                  className="m1"
                  />
          </Grid>
         
        <CardMedia
          component="img"
          height="300px"
        //   width="100%"
          image="./img/mausoleo1.png"
          alt="dia1"
          className='m2'
          />
          </Grid> 
        
      
    </Card>
                {/* <Card_circus_day /> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <Card sx={{ Width:400 ,backgroundColor:'inherit' }} variant='text' className=''>
      
          
       
          

      

          <p>En 1942, el sindicato de artistas y 
trabajadores circense de Chile logra inaugurar, en el cementerio general, el mausoleo circense, cuyo 
objetivo era que las distintas personas que pertenecían al gremio 
tuvieran un lugar de descanso eterno, siendo la puerta de entrada para 
muchos al llamado “CIRCO CELESTIAL”.</p> 
<br/>
<p>Nuestro mausoleo, orgullo de la 
institución y su gente, es el único 
en su tipo en Latinoamérica, y no 
se sabe de uno similar en el mundo, lo cual lo hace muy particular.</p><br/><p>Cada año, en la celebración de aniversario del sindicato, la comunidad circense se reune en la entrada principal del cementerio general 
para realizar cada 25 de Julio la gran 
procesión que desfila al compás de 
músicos circenses hasta el mausoleo, y celebrar una gran “Romería”, 
acompañado de discursos, recuerdos, historias y anecdotas de sus difuntos.</p><br /><p>Es una instancia de reencuentro, 
ánimo y por sobre todas las cosas, 
es un momento en que se recuerdan 
a los que fueron los grandes artistas 
y empresarios del Circo chileno.
Se ha transformado en la mayor fiesta de tradición de la comunidad circense de Chile.</p>
 

        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

        <CardMedia
          component="img"
          height="140"
          image="./img/mausoleo3.png"
          alt="mausoleo3"
          className="mausoleo3"
          />
          </Grid>
          <Grid  item xs={12} md={6}>

        <CardMedia
          component="img"
          height="140"
          image="./img/mausoleo4.png"
          alt="mausoleo4"
          className="mausoleo4"
          />
          </Grid>
          </Grid> 
          
      
    </Card>
            </Grid>
      </Grid>

    </div>
  )
}

export default Mausoleo