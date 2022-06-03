import React from 'react'
import { Link } from 'react-router-dom'
export const Nabvar = () => {
  return (
    <>
        <header>
            <nav>
                <div class="nav-wrapper">
                    <Link to="#" class="brand-logo">Logo</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="/"><i class="material-icons left">home</i>Inicio</Link></li>
                        <li><Link to="/About"><i class="material-icons left">recent_actors</i>Acerca de...</Link></li>
                        <li><Link to="/Contact"><i class="material-icons left">send</i>Contáctanos</Link></li>
                    </ul>
                </div>
            </nav>           
        </header>
    </>
  )
}
