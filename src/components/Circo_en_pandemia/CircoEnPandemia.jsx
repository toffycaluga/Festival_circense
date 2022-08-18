import React from 'react'
import './CircoEnPandemia.css'
import { Grid, Typography,Card,CardMedia } from '@mui/material'

function CircoEnPandemia() {
  return (
    

      <Grid container spacing={2} className='circo_en_pandemia'>
            <Grid item xs={12} md={6}>
    <Typography color='white'>
            <h2>

            Circo en Pandemia
            </h2>
          </Typography>
        
        <Card sx={{ Width:400 ,backgroundColor:'inherit' }} variant='text'>
    
          
    
            
                <p>Tras perder temporadas, como vacaciones de invierno, día del niño, y la tradicional temporada de fiestas patrias en septiembre , la familia circense ha 
sido una de las mas golpeadas en el mundo.</p><br />
<p>Una actividad que se ha visto duramente mermada al no poder realizar sus 
shows y actuaciones . Sin embargo, la pandemia del Coronavirus no detuvo a 
quienes conforman esta comunidad. La resiliencia del circense le ha obligado 
buscar nuevas formas de llegar a su público, Músicas y anuncios por un alto 
parlante irrumpen el silencio generado por la cuarentena a lo largo de Chile, 
en todos aquellos pueblos y ciudades donde quedo varado un circo, se escucha una voz típica del señor corales anunciando “Llegaron las golosinas del 
circo, Niños, Niñas, Mamitas, Papitos, salgan a disfrutar las delicias del circo 
a la puerta de su casa...”. </p><br />
<p>Algodón de azucar, manzanas confitadas, palomitas!, donde una vez se anunciaban grandes atracciones artisticas, hoy se anuncian estas delicias del circo, que logran captar la atención de los vecinos, de cada uno de los circos en 
cada rincón de Chile.. </p>
           
                  
        
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>

        <CardMedia
          component="img"
          height="300"
          image="./img/pandemia1.png"
          alt="pandemia1"
          className='pandemia1'
          />
          </Grid>
          <Grid  item xs={12} md={12}>

        <CardMedia
          component="img"
          height="140"
          image="./img/pandemia2.png"
          alt="pandemia2"
          className='pandemia2'
          />
          </Grid>
          </Grid> 
      
    </Card>
    
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography color='white'>
            <h2>

            La Funcion debe continuar
            </h2>
          </Typography>
        
    <Card sx={{ Width:400 ,backgroundColor:'inherit' }} variant='text'>

  
        <Typography>
            <p>EL nuevo trabajo de los circenses para 
poder subsistir, improvisando estas 
“PYMES” que recorren las calles con 
música de circo, y con distintos productos a la venta, han hecho salir adelante 
a los circenses en esta pandemia.</p><br />
<p>Cada día salen a recorrer las calles buscando llevar el sustento a sus hogares.</p><br />
<p>Aunque muchos admiten el exito que han tenido, no dejan de extrañar la magia, el brillo, las luces que componen el circo.</p><br /> 
 <p>
Durante la pandemia , aventureros 
empresarios, quisieron sacar el circo 
adelante, creando el “AUTO CIRCO”, 
o haciendo presentaciones online, y 
presentaciones con aforos muy reducidos cuando se les permitió, intentando dejar vivo el arte circense en 
los corazones de todos los chilenos</p><br />
<p>A pesar de todas estas dificultades, 
la gente de circo está tranquila, pues 
saben que esta pandemia no durará 
para siempre y ya llegará el día en 
que podamos reabrir nuestras puertas y volver a llevar el arte circense a cada rincón de nuestro país.

</p>
        </Typography>
              
    <CardMedia
      component="img"
      height="250"
      image="./img/funcion1.png"
      alt="campeonato3"
      className="campeonato3"
      />
  
</Card>

            </Grid>
      </Grid>
    
  )
}

export default CircoEnPandemia
