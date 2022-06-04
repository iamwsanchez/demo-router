import React from 'react'

export const Contact = () => {
  return (
    <section>
      <div className="row">
          <div  className="col s6">
        
            <form id="contactForm">
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" id="name" name="name" className="validate" required/>
                        <label for="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="email" id="email" name="email" className="validate" required/>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="message" name="message"  className="materialize-textarea" rows="4" required></textarea>
                        <label for="message">Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="file-field input-field">
                            <div className="btn">
                              <span>Archivo</span>
                              <input type="file" multiple/>
                            </div>
                            <div className="file-path-wrapper">
                              <input className="file-path validate" type="text" placeholder="Adjunta uno o mas archivos"/>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className="row">
                    <div className="col s12">
                        <button type="submit" className="waves-effect waves-light btn btn-block">Enviar</button>
                    </div>                   
                </div>              
            </form>           
          </div>
          <div className="col s6">
            <address>
              Paseo de la Unión Europea, Los Robles 14005
            </address>
            <iframe title='Ubicación' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7669286381265!2d-86.26714168569282!3d12.128093236106736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7bd96be25d71d4a!2sMetrocentro!5e0!3m2!1ses-419!2sni!4v1498911501665" width={600} height={450} frameBorder={0} allowfullscreen></iframe>
          </div>
      </div>
    </section>
  )
}
