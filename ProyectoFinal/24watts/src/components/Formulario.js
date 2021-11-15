import React, {Component, useState} from 'react';
import '../assets/css/styles.css'
import emailjs from 'emailjs-com'
import { render } from '@testing-library/react';


export default function Formulario()
{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [message,setMessage]=useState("");

    
 
    // handleSubmit = async e =>
    // {
    //     e.preventDefault()
    //     try
    //     {
    //         let config=
    //         {
    //             method: 'POST',
    //             headers:
    //             {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(this.state.form)
    //         }
    //         let res= await fetch('http://localhost:8000/api/clientes',config)
    //         let json = await res.json()

    //     }catch(error)
    //     {

    //     }
    //     console.log(this.state)
    // }
    const handleSubmit= e=>{
        e.preventDefault();
        alert("El formulario ha sido exitosamente");

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
                    
                  
                }).catch(err=>console.log(err));
         e.target.reset()

    }

    render()
    {
        // const {onChange,onSubmit,form} = this.props
        
        return(
        

            <section id="sextoContenedor">
            <div id="titulosFormulario">
              <h1 id="tituloGet"> Get in touch <span id="tituloWe">
                We are hiring!</span> </h1>  
            </div>
    
            <form id="formulario" onSubmit={sendEmail}>
            
              <div class="form-floating mb-3">
                  
                <input type="text" 
                class="form-control" 
                id="floatingInput" 
                placeholder="Name" 
                name="name"
                value={name} onChange={(e)=>setName(e.target.value)}>
                </input>
                <label for="floatingInput">Name</label>
    
              </div>
    
              <div class="form-floating mb-3">
                  
                <input type="email" 
                class="form-control" 
                id="floatingInput" 
                placeholder="Email"
                name="email"
                value={email} onChange={(e)=>setEmail(e.target.value)}>
    
                </input>
                <label for="floatingInput">Email</label>
    
              </div>
    
              <div class="form-floating mb-3">
                  
                <input type="text" 
                class="form-control" 
                id="floatingInput" 
                placeholder="Phone" 
                name="phone"
                value={phone} onChange={(e)=>setPhone(e.target.value)}>
    
                </input>
                <label for="floatingInput">Phone</label>
    
              </div>
    
              <div class="form-floating mb-3">
                
                <textarea class="form-control" 
                placeholder="Leave a comment here" 
                id="floatingTextarea2"
                name="message"
                value={message} onChange={(e)=>setMessage(e.target.value)}>
    
                </textarea>
                <label for="floatingTextarea2">Message</label>
              </div>
          
              <button class="botones" onSubmit={handleSubmit}>
              {/* <button class="botones" onSubmit={handleSubmit}> */}
                Send
              </button>
    
            </form>
            
        
            <div class="cuadroPlomo">
    
            </div>
            
            <div id="cuadroImagenGlobo">
              
            </div>
    
        </section>
    
        )
    }
}