import React from 'react'
import './Sindicato.css';
import {Grid,Typography} from '@mui/material'

function Sindicato() {
  return (
    <div className="sindicato">
        <h2>Sindicato De Artistas Circenses de Chile</h2>
        <Grid container spacing={3} className='sindicato__container'>
            <Grid item xs={12} md={2} className='sindicato__img'>
          
                <img src="./img/sindicato1.png" alt="logo sindicato"  />
                <img src="./img/sindicato3.png" alt="logo sindicato"  />
            
        
            </Grid>
            <Grid item xs={12} md={8}>
            <p>Fundado el 25 de Julio de 1935, 
El sindicato de artistas y traba
-
jadores circenses de Chile es la 
entidad sindical mas antigua del 
mundo circense en Latinoamerica. Con 86 años de historia y arduo trabajo para la protección, fomento y desarrollo de la actividad 
circense nacional e internacional.</p>
<p>Nuestro sindicato, sin duda, es la 
institución mas representativa del 
mundo circense actual, destacan
-
do acciones pro circo, generando 
políticas públicas que ayudan a 
visivilizar el trabajo, el oficio y 
los “años de circo” de la comunidad circense, funciones de beneficencia, actividades deportivas, 
reconocimientos artísticos y pro
-
fesionales a nuestros asociados </p>
<p>El sindicato circense de Chile, todos 
los años celebra su aniversario, gatillando, a través de los años, una serie 
de actividades tales como la romería, 
expo-circo, campeonatos deportivos, 
día nacional del circo, festival internacional, funciones benéficas, y galas de celebración y reconocimiento 
tanto a artistas consagrados , como 
también a nuevas promesas, futuras 
estrellas del circo.</p>
<p>Adicionalmente, no podemos dejar 
fuera los avances en materia de legislación, los que de a poco han dotado 
al circo de diferentes herramientas a 
favor de su salvaguarda y fomento.</p>

<p>A través de cada una de sus directivas, el sindicato circense de Chile se ha posicionado en las artes escénicas 
nacionales y ha construido bases sólidas para el crecimiento de la industria circense a lo largo de su historia.</p>

<p>Hoy, orgullosamente podemos decir que tenemos una institución fuerte, consolidada y que podrá, por muchos años, gracias a sus asociados seguir trabajando por las personas, artistas, y el circo chileno.</p>

            </Grid>
            <Grid item xs={12} md={2} className='sindicato__news'>
                    <img src="./img/sindicato2.png" alt="" /><br />
            <Typography>

                <p>Una de las actividades del sindicato que se ha vuelto tradición, es visitar en diciembre a los artistas retirados,regalandoles una cajita navideña, recordandoles lo importante que son para nuestra comunidad</p>
            </Typography>
              
                
            </Grid>
        </Grid>

    </div>
        
    
  )
}

export default Sindicato