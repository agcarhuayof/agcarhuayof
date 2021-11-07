import React from 'react'
import '../assets/css/styles.css'

export default function Header()
{
    return(
        <header>
        <section id="primerContenedor">
          <img id="logoEmpresa" src="../assets/images/top-logo.png" alt="" />
          <nav id="navbarPrincipal">
            <ul id="listaEnlace">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
        </section>
      </header>
    )
}