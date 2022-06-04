import React, { Component } from 'react'

class About extends Component{
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
        this.refs.audio.load();
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
                        <audio ref="assets/audio/lion.mp3">
                            <source src="assets/audio/lion.mp3" type="audio/mpeg"/>
                            <source src="assets/audio/lion.ogg" type="audio/ogg"/>
                            Tu navegador no sopota el formato de audio disponible.
                        </audio>
                </div>
                <div className='row'>
                    <button className="waves-effect waves-light btn btn-draw" onClick={this.drawEllipse}>Trazar</button>
                    <br/><br/>
                    <canvas id="myCanvas" width="900">
                        Este contenido no puede ser mostrado por tu navegador.
                    </canvas>
                </div>
            </>
        )
    }
}

export default About;