import React from 'react'
import '../../styles/About.css'
import AboutImg from '../../assets/Images/Jared/about.jpeg'
import ExperienceElement from '../../components/ExperienceElement/ExperienceElement'
import { useExperienceElement } from '../../hooks/useExperienceElement'


const About = () => {
	const { dataToFill } = useExperienceElement()

	return (
		<div className='section'>
			<div className='name-section'>
				<p className='section-subtitle'>
					Conoce más
				</p>
				<p className='section-title'>
					Sobre Mí
				</p>
			</div>
			<div className='about-cont'>
				<div className='top-row'>
					<div className='about-img-section'>
						<img src={AboutImg} className='about-img' alt='about-img'/>
					</div>
						<div className='about-text-section'>
							<div className='experience-elements'>
								{dataToFill.map((element, index) => (
									<ExperienceElement 
										key={index}
										icon={element.icon}
										title={element.title}
										description={element.description}
										descriptionBold={element.descriptionBold}
										button={element.button}
										onclick={element.onclick}
									/>
								))}
							</div>
						</div>
					</div>
				<div className='bot-row'>
					<div className='experience-text'>
						<p className='text'>
								Hola, soy <b>Jared Vazquez</b>, desarrollador de aplicaciones web con más de 3 años de experiencia creando soluciones funcionales, modernas y eficientes. He participado en proyectos institucionales exitosos como el desarrollo del sitio web oficial de la Universidad Tecnológica de Acapulco y el Sistema Integral de Gestión Escolar (SIGEA). Domino tecnologías como React, Node.js, Express, PHP, MySQL, Bootstrap y GitHub. Me destaco por mi compromiso, profesionalismo y capacidad para trabajar en equipo, además de mantenerme en constante aprendizaje. Mi enfoque está en entregar software de calidad que resuelva necesidades reales.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
