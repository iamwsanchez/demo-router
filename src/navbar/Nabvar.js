import React from 'react'
import { Link } from 'react-router-dom'
export const Nabvar = () => {
  return (
    <>
        <header>
            <nav>
                <div className="nav-wrapper blue">
                    <Link to="#" className="brand-logo">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/"><i className="material-icons left">home</i>Inicio</Link></li>
                        <li><Link to="/About"><i className="material-icons left">recent_actors</i>Acerca de...</Link></li>
                        <li><Link to="/Contact"><i className="material-icons left">send</i>Contáctanos</Link></li>
                        <li><Link to="/Login"><i className="material-icons left">key</i>Iniciar sesión</Link></li>
                    </ul>
                </div>
            </nav>           
        </header>
    </>
  )
}
