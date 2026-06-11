import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Transformo marcas en <span className="highlight">experiencias</span> memorables
            </h1>
            <p>
              Soy diseñadora de marcas y especialista en marketing con pasión por crear identidades visuales que conectan con tu audiencia y generan resultados reales.
            </p>
            <div className="hero-cta">
              <button
                className="btn btn-primary"
                onClick={() => handleScroll('contact')}
              >
                Comienza tu proyecto
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleScroll('portfolio')}
              >
                Ver mi trabajo
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://via.placeholder.com/500x500?text=María+Noel"
              alt="María Noel Viera"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;