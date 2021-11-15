import React, {Component, useState} from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { render } from '@testing-library/react';

function Mailer2()
{
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [message,setMessage]=useState("");


  function handleFile(e) {
    let name = e.target.files[0];
    let email = e.target.files[1];
    let phone = e.target.files[2]; 
    let message = e.target.files[3]; 
    setName(name)
    setEmail(email)
    setPhone(phone)
    setMessage(message)
}

async function handleUpload(e){
  e.preventDefault()
  let formData = new FormData();
  formData.append("name", JSON.stringify(name));
  formData.append("email", JSON.stringify(email));
  formData.append("phone", JSON.stringify(phone));
  formData.append("message", JSON.stringify(message));
  axios({
      url: 'http://127.0.0.1:8000/api/clientes',
      method: "POST",
      data: formData,
      headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
  })
  .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });



}

  function sendEmail(e)
  {
      e.preventDefault();
      emailjs.sendForm(
        "service_gmrkxg3",
        "template_rg3rep1", 
          e.target,
          "user_tKtumt9zQPdnxTcIFigdf"
          ).then(res=>
              {
                  console.log(res);
                  alert("El formulario ha sido exitosamente");
                  e.target.reset()
              }).catch(err=>console.log(err));

  }

    return(
    
      <section id="sextoContenedor">
          <div id="titulosFormulario">
              <h1 id="tituloGet"> Get in touch <span id="tituloWe">
                  We are hiring!</span> </h1>  
          </div>

      <form id="formulario" onSubmit={sendEmail,handleUpload}>
      
        <div class="form-floating mb-3">
            
          <input type="text" 
          class="form-control" 
          id="floatingInput" 
          placeholder="Name"
          name="name"
          onChange={handleFile} 
          value={name} onChange={(e)=>setName(e.target.value)}></input>
          <label for="floatingInput">Name</label>

        </div>

        <div class="form-floating mb-3">
            
          <input type="email" 
          class="form-control" 
          id="floatingInput" 
          placeholder="Email"
          onChange={handleFile} 
          name="email"
          value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          <label for="floatingInput">Email</label>

        </div>

        <div class="form-floating mb-3">
            
          <input type="text" 
          class="form-control" 
          id="floatingInput" 
          placeholder="Phone"
          onChange={handleFile} 
          name="phone" 
          value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
          <label for="floatingInput">Phone</label>

        </div>

        <div class="form-floating mb-3">
          
          <textarea class="form-control" 
          placeholder="Leave a comment here" 
          id="floatingTextarea2"
          name="message"
          onChange={handleFile} 
          value={message} onChange={(e)=>setMessage(e.target.value)}>
          </textarea>
          <label for="floatingTextarea2">Message</label>
        </div>
    
        <button class="botones" type="submit">
          Send
        </button>

      </form> 
        <div class="cuadroPlomo">

        </div>
        
        <div id="cuadroImagenGlobo">
          
        </div>

    </section>

  );

 
}


export default Mailer2;