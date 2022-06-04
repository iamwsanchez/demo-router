import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

class Navbar extends Component{
    constructor(props){
        super(props)
        this.initSideNav = this.initSideNav.bind(this);
        this.state = {
            
        }
    }
    componentDidMount(){
        this.initSideNav();
    }
    initSideNav() { 
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav',{});
            M.Sidenav.init(elems);
        })
    }
    render(){
        return(
            <header>
                <nav>
                    <div className="nav-wrapper blue">
                        <Link to="/" className="brand-logo">&nbsp;&nbsp;WS Store</Link>
                        <a href="#!" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/"><i className="material-icons left">home</i>Inicio</Link></li>
                            <li><Link to="/About"><i className="material-icons left">recent_actors</i>Acerca de...</Link></li>
                            <li><Link to="/Contact"><i className="material-icons left">send</i>Contáctanos</Link></li>
                            <li><Link to="/Login"><i className="material-icons left">key</i>Iniciar sesión</Link></li>
                        </ul>
                    </div>
                </nav>
                <ul id="mobile-nav" className="sidenav">
                    <li><Link to="/"><i className="material-icons left">home</i>Inicio</Link></li>
                    <li><Link to="/About"><i className="material-icons left">recent_actors</i>Acerca de...</Link></li>
                    <li><Link to="/Contact"><i className="material-icons left">send</i>Contáctanos</Link></li>
                    <li><Link to="/Login"><i className="material-icons left">key</i>Iniciar sesión</Link></li>
                </ul>                    
            </header>
        )
    }
}

export default Navbar;