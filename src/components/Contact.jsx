import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormMessage('Por favor completa todos los campos requeridos.');
      setFormStatus('error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormMessage('Por favor ingresa un email válido.');
      setFormStatus('error');
      return;
    }

    // Simulate form submission
    console.log('Form Data:', formData);

    setFormMessage(
      '¡Mensaje enviado exitosamente! Me pondré en contacto pronto.'
    );
    setFormStatus('success');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    // Clear message after 5 seconds
    setTimeout(() => {
      setFormMessage('');
      setFormStatus('');
    }, 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Trabajemos juntos</h2>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>¿Listo para transformar tu marca?</h2>
            <p>
              Estoy aquí para ayudarte a crear una marca que realmente se destaque.
              Contactame y conversemos sobre tu proyecto.
            </p>

            {/* Contact Items */}
            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div className="contact-item-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:maria@example.com">maria@example.com</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div className="contact-item-content">
                <h3>Teléfono</h3>
                <p>
                  <a href="tel:+598123456789">+598 (123) 456-789</a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-item-content">
                <h3>Ubicación</h3>
                <p>Montevideo, Uruguay</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                Sígueme en redes
              </h3>
              <div className="social-links">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Envíame un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿De qué se trata tu proyecto?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame más sobre tu idea..."
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Enviar Mensaje
              </button>

              {formMessage && (
                <div className={`form-message ${formStatus}`}>
                  {formMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;