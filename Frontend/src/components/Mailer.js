import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';

function Mailer()
{
  const [data,setData]=useState({
    nombres:"",
    telefono:"",
    correo:"",
    mensaje:""
  })

  function handle(e)
  {
    const newdata={...data}
    newdata[e.target.name]= e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e)
  {
    var request={
      nombres:data.nombres,
      telefono:data.telefono,
      correo:data.correo,
      mensaje:data.mensaje
    }
    e.preventDefault();
    axios.post("http://backendapiclientes.herokuapp.com/public/api/clientes",request)
    .then(res=>
      {
        console.log(res.data)
        e.preventDefault(); 
            emailjs.sendForm(
              "service_gmrkxg3",
              "template_rg3rep1", 
                e.target,
                "user_tKtumt9zQPdnxTcIFigdf"
                ).then(res=>
                    {
                        console.log(res);
                        alert("El formulario ha sido registrado exitosamente");
                        e.target.reset()
      
                        
                    }).catch(err=>console.log(err));
      })
      .catch(error => console.error(error));

  }
    return(
    
      <section id="sextoContenedor">
          <div id="titulosFormulario">
              <h1 id="tituloGet"> Get in touch <span id="tituloWe">
                  We are hiring!</span> </h1>  
          </div>

      <form id="formulario" onSubmit={(e)=>submit(e)} >
      
        <div className="form-floating mb-3">
            
          <input type="text" 
          className="form-control" 
          id="floatingInput" 
          placeholder="Name"
          name="nombres"
          onChange={(e)=>handle(e)}
          value={data.name}
          required></input>
          <label htmlFor="floatingInput">Name</label>

        </div>

        <div className="form-floating mb-3">
            
          <input type="email" 
          className="form-control" 
          id="floatingInput" 
          placeholder="Email"
          name="correo"
          onChange={(e)=>handle(e)}
          value={data.correo}
          required></input>
          <label htmlFor="floatingInput">Email</label>

        </div>

        <div className="form-floating mb-3">
            
          <input type="text" 
          className="form-control" 
          id="floatingInput" 
          placeholder="Phone"
          name="telefono" 
          onChange={(e)=>handle(e)}
          value={data.telefono}
          required></input>
          <label htmlFor="floatingInput">Phone</label>

        </div>

        <div className="form-floating mb-3">
          
          <textarea className="form-control" 
          placeholder="Leave a comment here" 
          id="floatingTextarea2"
          name="mensaje"
          onChange={(e)=>handle(e)}
          value={data.mensaje}
          required>
          
          </textarea>
          <label htmlFor="floatingTextarea2"
          >Message</label>
        </div>
    
        <button className="botones">
          Send
        </button>

      </form> 
      
        
        <div className="cuadroPlomo">

        </div>
        
        <div id="cuadroImagenGlobo">
          
        </div>

    </section>

  );

 
}


export default Mailer;