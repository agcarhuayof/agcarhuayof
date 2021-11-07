import React from 'react';
import '../assets/css/styles.css'

export default function Main()
{
    return(
      <main>
        <section id="segundoContenedor">
          <div id="subSegundoContenedor">
            <h1>Sed ut perspiciatis unde omnis iste natus</h1>
            <p id="informacionBanner">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <button class="botones">Read more</button>
          </div>
        </section>
        
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
          <div class="cuadroPlomo">

          </div>
          <div id="imagenContenedor">

            <div id="contenedorTexto">
              <h4 id="textoSed">Sed ut perspiciatis</h4>
              <h1 id="textoNemo">Nemo Enim</h1>
              <p id="textParrafo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam. </p>

              <div id="flechaI">

              </div>

              <div id="flechaD">

              </div>

            </div>



          </div>

      </section>

      <section id="quintoContenedor">

        <div id="cuadroImagenCaminata">

        </div>
        <div id="comboTexto">
          <div class="accordion accordion-flush" id="accordionFlushContenedor">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <p>Sed ut perspiciatis</p>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <p>Ut enim ad minima veniam</p>
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <p>Sit amet, consectetur, adipisci</p>
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
         
      <section id="sextoContenedor">
        <div id="titulosFormulario">
          <h1 id="tituloGet"> Get in touch <span id="tituloWe">
            We are hiring!</span> </h1>  
        </div>
        
        <form action="" id="formulario">
        
          <div class="form-floating mb-3">
              
            <input type="text" class="form-control" id="floatingInput" placeholder="Name"></input>
            <label for="floatingInput">Name</label>

          </div>

          <div class="form-floating mb-3">
              
            <input type="email" class="form-control" id="floatingInput" placeholder="Email"></input>
            <label for="floatingInput">Email</label>

          </div>

          <div class="form-floating mb-3">
              
            <input type="text" class="form-control" id="floatingInput" placeholder="Phone"></input>
            <label for="floatingInput">Phone</label>

          </div>

          <div class="form-floating mb-3">
            
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label for="floatingTextarea2">Message</label>
          </div>
      
          <button class="botones">
            Send
          </button>

        </form>

        <div class="cuadroPlomo">

        </div>
        
        <div id="cuadroImagenGlobo">
          
        </div>

    </section>

      </main>
    )
}