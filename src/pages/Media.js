import React, { Component } from 'react'

class Media extends Component{
    constructor(props){
        super(props)
        this.initializeCanvas = this.initializeCanvas.bind(this);
        this.drawEllipse = this.drawEllipse.bind(this);
        this.state = {
            
        }
    }
    componentDidMount(){
        this.initializeCanvas();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.audio !== this.props.audio);
    }
    componentDidUpdate() {
        
    }
    initializeCanvas() { 
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        context.fillStyle="#0d6efd";
        context.fillRect(0,0,300,40);
    }
    drawEllipse() {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.ellipse(60, 95, 50, 30, Math.PI * .25, 0, Math.PI * 1.5);
        ctx.fill();
        
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.ellipse(150, 95, 50, 30, Math.PI * .25, 0, Math.PI);
        ctx.fill();
        
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.ellipse(240, 95, 50, 30, Math.PI * .25, 0, Math.PI, true);
        ctx.fill();

        alert("El trazo ha finalizado");
    }
    render(){
        return(
            <>
                <div className='row'>
                    <div className='col s6'>
                        <figure>
                            <img src="assets/img/lion2.webp" alt="León" width={320}/>
                            <figcaption>León</figcaption>
                        </figure>
                        <div className='row'>
                            <audio controls>
                                <source src="assets/audio/lion.mp3" type="audio/mpeg"/>
                                <source src="assets/audio/lion.ogg" type="audio/ogg"/>
                                Tu navegador no sopota el formato de audio disponible.
                            </audio>
                        </div>
                    </div>
                    <div className='col s6'>
                        <video controls autoPlay loop width={420} height={320}>
                            <source src="assets/video/class.mp4" type="video/mp4"/>
                            <source src="assets/video/class.ogv" type="video/ogg"/>
                        </video>
                    </div>
                </div>
                <div className='row'>
                    <button className="waves-effect waves-light btn btn-draw" onClick={this.drawEllipse}>Trazar</button>
                    <br/><br/>
                    <canvas id="myCanvas">
                        Este contenido no puede ser mostrado por tu navegador.
                    </canvas>
                </div>
            </>
        )
    }
}

export default Media;