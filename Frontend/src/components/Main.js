import React from 'react';
import '../assets/css/styles.css';
import AccordionComponent from './AccordionComponent';
import CarouselComponentsecond from './CarouselComponentsecond';
import Carousel from './CarouselComponent';
import Mailer from './Mailer';
export default function Main()
{
    return(
      <main>
        
        <Carousel/>
          
        
        <section id="tercerContenedor">

          <div id="subPTercerContenedor">


          </div>

          <div id="subSTercerContenedor">

            <h2 id="subTituloPTercerContenedor">We Help Businesses <br /> <span id="subTituloSTercerContenedor">Grow and
                Innovate</span></h2>
            <p id="subParrafoTercerContenedor">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
              et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut
            </p>

          </div>

        </section>
        <section id="cuartoContenedor">
        <CarouselComponentsecond/>
          <div className="cuadroPlomo">

          </div>
          


      </section>
     
      <section id="quintoContenedor">
        
        <AccordionComponent/>
      
        <div id="cuadroImagenCaminata">

        </div>
       
      </section>
      
      <Mailer></Mailer>
      </main>
    )
}