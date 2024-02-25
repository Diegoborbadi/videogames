import React from 'react';
import foto from "./foto.jpg"; // Importa tu foto aquí
import './About.style.css'; // Importa tu archivo de estilos CSS

const About = () => {
    return (
        <div className="about-container">
            <h2>About</h2>
            <div className="about-content">
                <img className="profile-img" src={foto} alt="Mi Foto" />
                <p>
                    Hola, soy Diego Martin. Bienvenido a mi primera pagina web, pase de estudiante de medicina hasta bartender hoy en dia me siento mas completo al estudiar programacion y lograr mi primer proyecto relativamente solo espero que lo disfruten, en un futuro volvere con mas proyectos hasta lograr mi primer empleo como Full Stack Developer
                </p>
            </div>
        </div>
    );
}

export default About;
