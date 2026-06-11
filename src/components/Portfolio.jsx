import React, { useState } from 'react';
import '../styles/portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Identidad Visual - TechStart',
      category: 'branding',
      image: 'https://via.placeholder.com/300x300?text=TechStart',
      description: 'Diseño completo de identidad visual para startup de tecnología, incluyendo logo, paleta de colores y guía de marca.',
      tags: ['Branding', 'Logo Design'],
    },
    {
      id: 2,
      title: 'E-commerce Design - Fashion Co',
      category: 'web',
      image: 'https://via.placeholder.com/300x300?text=Fashion+Co',
      description: 'Diseño y desarrollo de plataforma e-commerce para tienda de moda con enfoque en conversión y experiencia del usuario.',
      tags: ['Web Design', 'E-commerce'],
    },
    {
      id: 3,
      title: 'Campaña Social Media - Café Aromas',
      category: 'marketing',
      image: 'https://via.placeholder.com/300x300?text=Cafe+Aromas',
      description: 'Estrategia completa de redes sociales con contenido visual, gestión de comunidad y análisis de resultados.',
      tags: ['Social Media', 'Marketing'],
    },
    {
      id: 4,
      title: 'Packaging - Productos Naturales',
      category: 'packaging',
      image: 'https://via.placeholder.com/300x300?text=Natural+Products',
      description: 'Diseño de empaque sostenible para línea de productos naturales con impacto visual en punto de venta.',
      tags: ['Packaging', 'Design'],
    },
    {
      id: 5,
      title: 'Rebrand - Empresa Familiar',
      category: 'branding',
      image: 'https://via.placeholder.com/300x300?text=Rebrand',
      description: 'Renovación completa de identidad para empresa familiar con más de 20 años en el mercado.',
      tags: ['Branding', 'Rebranding'],
    },
    {
      id: 6,
      title: 'Sitio Web - Consultoría',
      category: 'web',
      image: 'https://via.placeholder.com/300x300?text=Consultoria',
      description: 'Sitio web profesional para firma de consultoría con secciones de servicios, casos de éxito y formulario de contacto.',
      tags: ['Web Design', 'Corporate'],
    },
    {
      id: 7,
      title: 'Fotografía Comercial - Restaurante',
      category: 'fotografia',
      image: 'https://via.placeholder.com/300x300?text=Restaurante',
      description: 'Sesión de fotografía comercial para restaurante de comida gourmet incluyendo platos y espacios.',
      tags: ['Photography', 'Commercial'],
    },
    {
      id: 8,
      title: 'Estrategia Digital - Retail',
      category: 'marketing',
      image: 'https://via.placeholder.com/300x300?text=Retail+Strategy',
      description: 'Plan integral de marketing digital incluyendo SEO, SEM, email marketing y redes sociales.',
      tags: ['Digital Marketing', 'Strategy'],
    },
  ];

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'branding', label: 'Branding' },
    { value: 'web', label: 'Web Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'packaging', label: 'Packaging' },
    { value: 'fotografia', label: 'Fotografía' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Mi Portfolio</h2>
        <p className="section-subtitle">
          Explora algunos de los proyectos en los que he trabajado
        </p>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn ${activeFilter === cat.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  {project.tags.map((tag, index) => (
                    <span key={index} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-view-all">
          <button className="btn btn-primary">Ver más proyectos</button>
        </div>
      </div>

      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <div className="modal-text">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div>
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="portfolio-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;