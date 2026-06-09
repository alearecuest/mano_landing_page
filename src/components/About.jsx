import React from 'react';
import '../styles/about.css';

const About = () => {
	const skills = [
		'Branding',
		'Diseño Gráfico',
		'Marketing Digital',
		'Identidad Visual',
		'Estrategia de Marca',
		'Social Media',
		'Diseño Web',
		'Packaging',
		'Copywriting',
		'Community Management',
	];

	return (
		<section className="about" id="about">
			<div className="container">
				<div className="about-content">
					<div className="about-image">
						<img
							src="https://via.placeholder.com/400x400?text=Sobre+Mi"
							alt="María Noel Viera"
						/>
					</div>

					<div className="about-text">
						<h2>
							Conozca mi <span className="highlight">trayectoria</span>
						</h2>
						<p>
							Con más de 8 años de experiencia en diseño y marketing, he trabajado con empresas de diversos sectores, desde startups hasta marcas consolidadas. Mi enfoque siempre ha sido entender profundamente el negocio de cada cliente para crear soluciones visuales que no solo sean hermosas, sino también efectivas.
						</p>
						<p>
							Mi pasión por el detalle y la creatividad me ha permitido desarrollar un método único que combina investigación de mercado, psicología del consumidor y diseño estratégico para generar marcas que verdaderamente dejan huella.
						</p>

						<div className="about-skills">
							<h3>Mis especialidades</h3>
							<div className="skills-list">
								{skills.map((skill, index) => (
									<span key={index} className="skill-tag">
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="about-cta">
							<button className="btn btn-primary">
								Descargar CV
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;