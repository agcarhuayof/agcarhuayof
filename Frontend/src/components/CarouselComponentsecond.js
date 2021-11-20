import React from "react";
import {Carousel} from 'react-bootstrap';

import image1 from '../assets/images/section3-image.png';


const CarouselComponentsecond=()=>
{
    return(
      <section id="imagenContenedor">
         <Carousel className="segundoContenedorCarousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
              <Carousel.Caption id="contenedorTexto">
                      <div id="subSegundoContenedor">
                      <h4 id="textoSed">Sed ut perspiciatis</h4>
                      <h1 id="textoNemo">Nemo Enim</h1>
                      <p id="textParrafo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque

                        laudantium, totam rem aperiam. </p>
                    </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="Second slide"
              />

              <Carousel.Caption id="contenedorTexto">
                      <div id="subSegundoContenedor">
                      <h4 id="textoSed">Alan Carhuayo</h4>
                      <h1 id="textoNemo">Full Stack</h1>
                      <p id="textParrafo">Mayo 2021 - Noviembre 2021. </p>
                    </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="Third slide"
              />

              <Carousel.Caption id="contenedorTexto">
                      <div id="subSegundoContenedor">
                      <h4 id="textoSed">Enlaces</h4>
                      <h1 id="textoNemo"><a href="https://github.com/agcarhuayof/agcarhuayof">Repositorio</a></h1>
                      <p id="textParrafo"><a href="https://backendapiclientes.herokuapp.com/public/api/clientes">Enlace a la API</a></p>
                
                      
                    </div>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>



</section>
 

    )
}



export default CarouselComponentsecond;