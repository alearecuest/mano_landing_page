import React, { useState } from 'react';
import '../styles/testimonials.css';

const Testimonials = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const testimonials = [
		{
			id: 1,
			name: 'Carlos Mendez',
			title: 'CEO - TechStart',
			avatar: 'https://via.placeholder.com/50x50?text=CM',
			text: 'María transformó completamente nuestra identidad visual. El logo y la guía de marca que creó capturan perfectamente la esencia de nuestra empresa. Recomendamos altamente sus servicios.',
			rating: 5,
		},
		{
			id: 2,
			name: 'Laura Rodríguez',
			title: 'Directora - Fashion Co',
			avatar: 'https://via.placeholder.com/50x50?text=LR',
			text: 'El sitio web que diseñó María para nuestra tienda online no solo se ve increíble, sino que nuestras conversiones aumentaron un 45%. Es una profesional excepcional.',
			rating: 5,
		},
		{
			id: 3,
			name: 'Jorge Delgado',
			title: 'Gerente - Café Aromas',
			avatar: 'https://via.placeholder.com/50x50?text=JD',
			text: 'La estrategia de social media de María nos ayudó a aumentar nuestro engagement en un 300%. Es creativa, estratégica y muy fácil de trabajar con ella.',
			rating: 5,
		},
		{
			id: 4,
			name: 'Sofía García',
			title: 'Emprendedora - Productos Naturales',
			avatar: 'https://via.placeholder.com/50x50?text=SG',
			text: 'Desde el branding hasta el packaging, María cuidó cada detalle. Mis productos ahora se destacan en el mercado y los clientes reconocen mi marca al instante.',
			rating: 5,
		},
		{
			id: 5,
			name: 'Ricardo Torres',
			title: 'Propietario - Restaurante Gourmet',
			avatar: 'https://via.placeholder.com/50x50?text=RT',
			text: 'La fotografía comercial que María realizó para nuestro restaurante es de profesional. Las imágenes se usan en todas nuestras plataformas y generan mucho interés.',
			rating: 5,
		},
	];

	const nextSlide = () => {
		setActiveSlide((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setActiveSlide((prev) =>
			prev === 0 ? testimonials.length - 1 : prev - 1
		);
	};

	const goToSlide = (index) => {
		setActiveSlide(index);
	};

	return (
		<section className="testimonials" id="testimonials">
			<div className="testimonials-container">
				<h2 className="section-title">Lo que mis clientes dicen</h2>
				<p className="section-subtitle">
					Testimonios de clientes satisfechos que han visto crecer sus marcas
				</p>

				{/* Grid View for Desktop */}
				<div className="testimonials-grid">
					{testimonials.map((testimonial) => (
						<div key={testimonial.id} className="testimonial-card">
							<div className="testimonial-stars">
								{'★'.repeat(testimonial.rating)}
							</div>
							<p className="testimonial-text">"{testimonial.text}"</p>
							<div className="testimonial-author">
								<img
									src={testimonial.avatar}
									alt={testimonial.name}
									className="author-avatar"
								/>
								<div className="author-info">
									<h4>{testimonial.name}</h4>
									<p>{testimonial.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Carousel View for Mobile */}
				<div className="testimonials-carousel">
					<div className="carousel-container">
						<div className="carousel-slide active">
							{testimonials.map((testimonial, index) => (
								<div
									key={testimonial.id}
									className={`carousel-slide ${index === activeSlide ? 'active' : ''
										}`}
								>
									<div className="testimonial-card">
										<div className="testimonial-stars">
											{'★'.repeat(testimonial.rating)}
										</div>
										<p className="testimonial-text">"{testimonial.text}"</p>
										<div className="testimonial-author">
											<img
												src={testimonial.avatar}
												alt={testimonial.name}
												className="author-avatar"
											/>
											<div className="author-info">
												<h4>{testimonial.name}</h4>
												<p>{testimonial.title}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="carousel-controls">
						<button className="carousel-btn" onClick={prevSlide}>
							←
						</button>
						<button className="carousel-btn" onClick={nextSlide}>
							→
						</button>
					</div>

					<div className="carousel-indicators">
						{testimonials.map((_, index) => (
							<div
								key={index}
								className={`indicator ${index === activeSlide ? 'active' : ''}`}
								onClick={() => goToSlide(index)}
							></div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;