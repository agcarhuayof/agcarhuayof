import React from "react";
import {Carousel} from 'react-bootstrap';

import image1 from '../assets/images/slider-1.png';


const CarouselComponent=()=>
{
    return(
      <section id="segundoContenedor">
         <Carousel className="segundoContenedorCarousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
              <Carousel.Caption>
              <div id="subSegundoContenedor">
                      <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                      <p id="informacionBanner">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque.
                      </p>
                      <button className="botones">Read more</button>
                      
                    </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="Second slide"
              />

              <Carousel.Caption>
              <div id="subSegundoContenedor">
                      <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                      <p id="informacionBanner">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque.
                      </p>
                      <button className="botones">Read more</button>
                    </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="Third slide"
              />

              <Carousel.Caption>
              <div id="subSegundoContenedor">
                      <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                      <p id="informacionBanner">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque.
                      </p>
                      <button className="botones">Read more</button>
                    </div>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>



</section>
 

    )
}



export default CarouselComponent;