import { Grid, Typography,CardMedia,Card } from '@mui/material'
import React from 'react'
import './DiaDelCirco.css'
function DiaDelCirco() {
  return (
    <div className="circusDay">
      <Typography color ="white" variant='h2'>
            <h2>
            Dia Nacional Del Circo en Chile
            </h2>
          </Typography>
      <Grid container spacing={2} className='dia_del_circo'>
            <Grid item xs={12} md={6}>
            <Card sx={{ Width:400 ,backgroundColor:'inherit' }} variant='text'>
      
          
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

        <CardMedia
          component="img"
          height="140"
          image="./img/dia1.png"
          alt="dia1"
          />
          </Grid>
          <Grid  item xs={12} md={6}>

        <CardMedia
          component="img"
          height="140"
          image="./img/dia2.png"
          alt="dia2"
          />
          </Grid>
          </Grid> 
      
          <p variant="body2" color="white" align='left' fontSize={14} >
          En Julio de 2003, el sindicato de artistas y trabajadores circenses de Chile, en conjunto con las distintas autoridades de ese entonces, firman en la plaza de la Constitución 
el acuerdo de celebrar cada año, en el primer sabado de Septiembre, el “Día Nacional 
del circo Chileno”. Desde ese entonces, cada año, los distintos circos se reunen para 
celebrar con bombos y platillos este dia tan especial para la familia del circo tradicional, empezando con un gran desfile en la Alameda y terminando con muestras artísticas y reconocimientos, que hoy en día se realizan en el centro cultural mas importante de Chile GABRIELA MISTRAL “GAM”, en el casco histórico de Santiago. 
          </p>
        
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

        <CardMedia
          component="img"
          height="140"
          image="./img/dia3.png"
          alt="dia3"
          />
          </Grid>
          <Grid  item xs={12} md={6}>

        <CardMedia
          component="img"
          height="140"
          image="./img/dia4.png"
          alt="dia4"
          />
          </Grid>
          </Grid> 
          <Typography variant="body2" color="white" align='left' fontSize={14} >
          El 31 de Julio de 2017, bajo la promulgación presidencial, nace la Ley 21.026 
que declara esta celebración como el “Día nacional del Circo Chileno”, el cual, 
hoy en día, es celebrado a lo largo y ancho de nuestro país.
          </Typography>
      
    </Card>
            </Grid>
            <Grid item xs={12} md={6}>
            <Card sx={{ Width:400 ,backgroundColor:'inherit' }} variant='text'>
    
          
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>

        <CardMedia
          component="img"
          height="140"
          image="./img/dia6.png"
          alt="dia1"
          className='foto1'
          />
          </Grid>
          <Grid  item xs={12} md={6}>

        <CardMedia
          component="img"
          height="140"
          image="./img/dia7.png"
          alt="dia2"
          className='foto2'
          />
          </Grid>
          </Grid> 
        <CardMedia
          component="img"
          height="350"
          image="./img/dia5.png"
          alt="dia3"
          />
      
    </Card>
            </Grid>
      </Grid>

    </div>
  )
}

export default DiaDelCirco
