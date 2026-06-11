import React from 'react';
import '../styles/process.css';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Descubrimiento',
      description: 'Nos sumergimos en tu negocio, entendemos tus objetivos, audiencia y competencia para crear una estrategia sólida.',
    },
    {
      number: 2,
      title: 'Conceptualización',
      description: 'Desarrollamos conceptos creativos y propuestas visuales que alinean con tu visión y estrategia de marca.',
    },
    {
      number: 3,
      title: 'Diseño',
      description: 'Creamos diseños detallados y pulidos, iterando según tu feedback para asegurar que sea perfecto.',
    },
    {
      number: 4,
      title: 'Refinamiento',
      description: 'Hacemos ajustes finales, optimizamos cada elemento y preparamos todos los archivos necesarios.',
    },
    {
      number: 5,
      title: 'Lanzamiento',
      description: 'Entregamos tu proyecto completo con documentación, guías de uso y soporte para su implementación.',
    },
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <h2 className="section-title">Mi Proceso de Trabajo</h2>
        <p className="section-subtitle">
          Un enfoque metodológico que garantiza resultados excepcionales
        </p>

        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="process-arrow">→</span>
            </div>
          ))}
        </div>

        {/* Alternative Timeline View */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '2px solid var(--border-color)' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>
            Cada proyecto es único
          </h3>
          <div className="process-timeline">
            {steps.map((step) => (
              <div key={step.number} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;