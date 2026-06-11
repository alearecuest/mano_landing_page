import React from 'react';
import { FiPenTool, FiBarChart2, FiShoppingBag, FiShare2, FiCamera, FiLayout } from 'react-icons/fi';
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FiPenTool />,
      title: 'Diseño de Marca',
      description: 'Creación completa de identidad visual: logo, paleta de colores, tipografía y guías de marca que reflejan la esencia de tu negocio.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography Selection'],
    },
    {
      id: 2,
      icon: <FiLayout />,
      title: 'Diseño Web',
      description: 'Sitios web modernos y responsivos que no solo se ven hermosos, sino que también convierten visitantes en clientes.',
      features: ['Responsive Design', 'UX/UI Optimization', 'Fast Loading', 'SEO Ready'],
    },
    {
      id: 3,
      icon: <FiBarChart2 />,
      title: 'Estrategia de Marketing',
      description: 'Planes estratégicos de marketing digital que te ayudan a llegar a tu audiencia ideal y aumentar tus ventas.',
      features: ['Market Research', 'Campaign Strategy', 'Analytics Setup', 'Content Planning'],
    },
    {
      id: 4,
      icon: <FiShare2 />,
      title: 'Social Media',
      description: 'Gestión completa de redes sociales: contenido estratégico, diseño visual y community management que genera engagement.',
      features: ['Content Calendar', 'Visual Design', 'Community Management', 'Analytics Reports'],
    },
    {
      id: 5,
      icon: <FiShoppingBag />,
      title: 'Diseño de Packaging',
      description: 'Empaques y etiquetas que captan la atención en el punto de venta y refuerzan la identidad de tu marca.',
      features: ['Package Design', 'Label Design', 'Product Photography', 'Brand Consistency'],
    },
    {
      id: 6,
      icon: <FiCamera />,
      title: 'Fotografía Comercial',
      description: 'Fotografía profesional para productos, servicios y contenido que potencia tu presencia en línea.',
      features: ['Product Photography', 'Lifestyle Shots', 'Photo Editing', 'Content Library'],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">Mis Servicios</h2>
        <p className="section-subtitle">
          Soluciones completas de diseño y marketing para llevar tu marca al siguiente nivel
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <span className="learn-more">Más información</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;