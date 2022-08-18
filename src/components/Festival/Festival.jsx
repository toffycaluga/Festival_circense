import React from 'react'
import './Festival.css'
import {Grid} from '@mui/material'

function Festival() {
  return (
    <div className="festival">
      <img src="./img/logo_festival.png" alt=""className='f0' />
        <h2>Un Festival Para todos</h2>
        <p>En septiembre de 2012, un grupo de dirigentes de nuestro sindicato, deciden democratizar los reconocimientos artísticos que, hasta esta fecha, se realizaban a través de comisiones que no lograban llegar a todos los circos y a todos los artistas limitandoce en el gran Santiago, Bajo la necesidad de que todos tuvieran igualdad de oportunidades, y poder ser reconocidos por su s pares , nace el primer festival internacional de circo, santiago de Chile (Pista de Oro), creandose una importante gala, que año tras año impulsa, reconoce, a los mejores exponentes circenses en un sin fin de disciplinas evaluadas por destacadas personalidades del circo mundial, que viajan a Chile invitados como jurados</p>
        <p>Cada año, nuestro festival crece, y hoy pertenece al circuito de festivales de circo mundial, siendo así, la mas importante plataforma del ámbito circense, tanto nacional como internacional, que nos visita cada temporada de septiembre</p>
        <p>El festival nace con la misión y el objetivo de ser un trampolín de oportunidades para sus participantes y ha logrado generar ser un lugar de encuentro para agentes, productores y empresarios de la industria, que busca nuevas atracciones que puedan integrar en sus propios espectáculos, transformando el festival circense de Chile en la vitrina artística mas importante de latinoamérica.</p>
        <p>Los invitamos a ser parte de este magno evento.</p>
        <img src="./img/festival1.png" alt="" className='f1'/>
          <br />
          <h2>FESTIVAL INTERNACIONAL</h2>
          <p>Cada año nuestro festival rompe más fronteras, convirtiendose en uno de los festivales de circo mas importantes de América, y así, del mundo, tanto por su destacado y renombrado Jurado Internacional, como por los diferentes artistas que compiten para obtener la anhelada “PISTA DE ORO”.</p>
          <p>Es así, como cada vez se suman mas paises participantes, presentando distintas disciplinas y producciones que deleitan al público de nuestro país con su destacado profesionalismo y dedicación.</p>
          <p>Argentina, Perú, Brasil, Colombia, Venezuela, Puerto Rico, México, Rusia, Ucrania, Japón, Kenia, Rumania se han sumado a Chile en las últimas ediciones del concurso.</p>
          <p>Dado este carácter “Internacional” que se le ha dado, la competencia se ha transformado en una ventana abierta que permite ser el trampolín para los concursantes y obtener invitaciones a participar en espectaculos internacionales y , también,poder ser invitados a participar en diferentes festivales del mundo, siendo esto un incentivo para los artistas de mejorar, perfeccionar,producir y crear nuevos actos de destreza y habilidad que los hagan únicos y merecedores de la gran oportunidad de participaren el.

</p>
<img src="./img/festival2.png" alt="" />

                <h2>Ve nuestros Festivales anteriores</h2>
      <Grid container spacing={2} className='festival__container-1'>
            <Grid item xs={6} md={6}>
                    <a href='/vii-festival' className="link-festival">
                         VII FESTIVAL </a>
            </Grid>
            <Grid item xs={6} md={6}>
            <a href='/viii-festival' className="link-festival">VII FESTIVAL</a>
                
            </Grid>
      </Grid>
    </div>
  )
}

export default Festival
