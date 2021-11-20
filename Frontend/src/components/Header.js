import React from 'react'
import '../assets/css/styles.css'

export default function Header()
{
    return(
        <header>
        <section id="primerContenedor">
        <a href="index"><img id="logoEmpresa" src="../assets/images/top-logo.png" alt="" ></img></a>
          <nav id="navbarPrincipal">
            <ul id="listaEnlace">
              <li><a href="#tercerContenedor">Home</a></li>
              <li><a href="#copyRight">About</a></li>
              <li><a href="#cuartoContenedor">Products</a></li>
              <li><a href="#quintoContenedor">Services</a></li>
              <li><a href="#sextoContenedor">Contact</a></li>
            </ul>
          </nav>
        </section>
      </header>
    )
}