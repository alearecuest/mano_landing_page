import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo_mano.png" alt="Mano Logo" />
            <p>María Noel</p>
          </div>
          <p>
            Diseñadora de marcas y especialista en marketing digital. Transformo
            ideas en identidades visuales que generan impacto y resultados.
          </p>
          <div className="footer-social">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Servicios</h3>
          <ul>
            <li>
              <a href="#services">Diseño de Marca</a>
            </li>
            <li>
              <a href="#services">Diseño Web</a>
            </li>
            <li>
              <a href="#services">Estrategia de Marketing</a>
            </li>
            <li>
              <a href="#services">Social Media</a>
            </li>
            <li>
              <a href="#services">Packaging</a>
            </li>
            <li>
              <a href="#services">Fotografía Comercial</a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#process">Mi Proceso</a>
            </li>
            <li>
              <a href="#testimonials">Testimonios</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Suscríbete para recibir tips de diseño y marketing.</p>
          <div className="footer-newsletter">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('¡Gracias por suscribirte!');
              }}
              className="newsletter-form"
            >
              <input
                type="email"
                placeholder="Tu email"
                required
              />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © {currentYear} María Noel Viera. Todos los derechos reservados.
          </p>
          <div className="footer-links">
            <a href="#privacy">Política de Privacidad</a>
            <a href="#terms">Términos de Servicio</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollToTop ? 'show' : ''}`}
        onClick={scrollToTop}
        title="Volver al inicio"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;