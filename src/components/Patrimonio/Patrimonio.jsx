import React from 'react'
import './Patrimonio.css'
import  {Typography,Grid, CardMedia}  from '@mui/material'

function Patrimonio() {
    return (
      <div container spacing={1} className="patrimonio">
      <Typography><h2>Circo en Chile Patrimonio Cultural</h2></Typography>
        <Grid container spacing={2} className="patrimonio__content" fixed>
            <Grid  item xs={12} md={6}>
        <CardMedia
          component="img"
          height="240"
          image="./img/pendulo.png"
          alt="Hnos Cardenas"
          
          />

        <CardMedia/>
          </Grid>
        <Grid item xs={12} md={6}>
            
                <p>Durante años, las distintas entidades del circo chileno se han esforzado en su gestión, en conjunto con diversas reuniones con diferentes entidades de gobierno, para reconocer y colocar al circo chileno en un sitio 
cultural importante a nivel país. </p>
<br/>
<p>
Es así como, el día 10 de abril de 2019, el circo tradicional ingresa al registro del patrimonio cultural inmaterial, a partir de una solicitud ciudadana, 
patrocinada por nuestro sindicato, donde 617 artistas, cultores general el documento de petición. El estado chileno reconoce que las representaciones, expresiones, conocimientos y técnicas (junto con los intrumentos, objetos, artefactos y espacios que les son inherentes). El Ministerio de las Culturas y las Artes confirmó el 4 de Julio de 2019, en una gran ceremonia junto a otras expresiones culturales, que el Circo Tradicional La experiencia del circo va más allá de la puesta en escena de cada uno 
de los artistas que se presentan a lo largo y ancho de nuestgro país, sino 
que vive al límite de las emociones, entregando intriga, emoción, adrenalina a todo espectador que visitan las mas de 100 carpas que recorren 
cada rincón del territorio nacional. </p><br/>
            
        </Grid>
       
        </Grid>
        <Grid container spacing={2} className="patrimonio__content" fixed>

        
        <Grid item xs={12} md={6}>
            <Typography variant="body2" color="white" align='left' fontSize={12}>
                <p>
El circo en Chile, sigue, en su gran mayoría, una tradición familiar que 
expresan su originalidad y trayectoria en distintos espacios que les da la 
unicidad a cada circo, asociada a la carpa, la pista, las casas rodantes, 
entre otros. En estos espacios tiene lugar la función y la vida circense, 
definiendo un espacio cultural comprendido como trashumante.</p><br/><p>
Quizás, este ha sido el hito mas importante que ha tenido el circo tradicional chileno, que permite reconocer el idherente valor de este tradicional oficio, que durante siglos, temporada tras temporada, se ha 
presentado de norte a sur, en los lugares mas remotos del país, transformando espacios y llenando de magia las diferentes localidades.</p><br/><p>
Al ingresar al inventario de patrimonio, esperamos que el estado chileno tome una serie de medidas encaminadas a garantizar las sostenibilidad de patrimonio cultural inmaterial del gran circo chileno.
</p><br/>
<strong>Pilar Ducci.</strong>
            </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
        <CardMedia
          component="img"
          height="200"
          image="./img/patri.png"
          alt="Ballet circo"
          
          />

        <CardMedia/>
            
        </Grid>
        </Grid>
        {/* <Button></Button> */}
    </div>
            
  )
}

export default Patrimonio