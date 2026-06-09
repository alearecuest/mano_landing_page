import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/header.css';

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			closeMenu();
		}
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header-content">
					<div className="logo-container" onClick={() => handleScroll('hero')}>
						<img src="/logo_mano.png" alt="Mano Logo" className="logo-img" />
						<div className="logo-text">
							María <span className="highlight">Noel</span>
						</div>
					</div>

					<nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
						<a href="#about" onClick={() => handleScroll('about')}>
							Sobre mí
						</a>
						<a href="#services" onClick={() => handleScroll('services')}>
							Servicios
						</a>
						<a href="#portfolio" onClick={() => handleScroll('portfolio')}>
							Portfolio
						</a>
						<a href="#testimonials" onClick={() => handleScroll('testimonials')}>
							Testimonios
						</a>
						<a href="#contact" onClick={() => handleScroll('contact')}>
							Contacto
						</a>
						<button
							className="cta-button"
							onClick={() => handleScroll('contact')}
						>
							Comenzar
						</button>
					</nav>

					<div className="mobile-menu-icon" onClick={toggleMenu}>
						{isMenuOpen ? <FiX /> : <FiMenu />}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navigation;