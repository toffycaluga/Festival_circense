import React from 'react'
import { Grid, Typography ,Card,CardMedia} from '@mui/material'

import './Campeonato.css'
function Campeonato() {
  return (
    <div className="campeonato">

    <Typography color='white'>
            <h2>

            Campeonato Circense de Futbol de Chile
            </h2>
          </Typography>
      <Grid container spacing={2} className='dia_del_circo'>
            <Grid item xs={12} md={6}>
            <Card sx={{ Width:400 ,backgroundColor:'inherit' }} variant='text'>
    
          
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>

    <CardMedia
      component="img"
      height="360"
      image="./img/campeonato1.png"
      alt="campeonato1"
      className='campeonato1'
      />
      </Grid>
      <Grid  item xs={12} md={6}>

    <CardMedia
      component="img"
      height="140"
      image="./img/campeonato2.png"
      alt="campeonato2"
      className='campeonato2'
      />
      </Grid>
      </Grid> 
    <br />
    <CardMedia
      component="img"
      height="350"
      image="./img/campeonato3.png"
      alt="campeonato3"
      className="campeonato3"
      />
  
</Card>
            </Grid>
            <Grid item xs={12} md={6}>
            <Card sx={{ Width:400 ,backgroundColor:'inherit' }} variant='text'>
  
        
     
        

    
 
  <p>Esta actividad es una de las más esperadas por la familia del circo. Cada final 
de temporada se realiza el campeonato de fútbol circense, donde cada circo, 
con sus artistas y trabajadores , forman equipos, que compiten entre sí, siendo 
una competencia vivaz y agotadora. En 10 días de torneo no se descansa, más 
aún, los jugadores deben volver a sus trajes de brillos y lentejuelas, demostrando, así, el gran estado físico de los jugadores. Niños, mujeres, jovenes y 
adultos disfrutan de nuestro campeonato, no solo con el fútbol, sino también 
con las diferentes actividades que se realizan en paralelo (Corridas de sacos, 
competencia de acrobacias, elección de la Reina, entre otros.). Quizás el partido mas esperado es el de los denominados “Viejos Cracks!”, artistas veteranos 
que disfrutan el reencuentro con sus pares en un partido lleno de risas y carcajadas que culminan en un gran asado para la tercera edad. 
</p> 
<br/>

   

<Grid container spacing={2}>
  <Grid  item xs={12} md={6}>
  <Typography variant="body2" color="white" align='left' fontSize={14} >
  <p>Este evento, lo consideran muchos 
como punto de reencuentro entre 
amistades que desde hace un año, 
debido a las giras, no se ven y comparten tanto experiencias, alegrías, 
como penas y anecdotas vividas durante el año circulando por el país.</p>
  </Typography>
      </Grid>
    <Grid item xs={12} md={6}>

<CardMedia
  component="img"
  height="140"
  image="./img/campeonato5.png"
  alt="campeonato5"
  className="campeonato5"
  />
  </Grid>
<CardMedia
  component="img"
  height="250"
  image="./img/campeonato4.png"
  alt="campeonato4"
  className="campeonato4"
  />
  </Grid> 
  

</Card>
            </Grid>
      </Grid>
    </div>

  )
}

export default Campeonato
