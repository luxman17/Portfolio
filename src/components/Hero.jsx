import React, { useRef } from 'react';
import '../index.css';
import luxImage from './lux.jpg';
import embrossImage from './embross.jpg';
import eagleImage from './eagleview.jpg';
import gymImage from './gym.jpg';
import gameImage from './game.jpg';
import sqlImage from './sql.jpg';
import binImage from './bin.jpg';
import snakeImage from './snake.jpg';
import COriginal from 'devicons-react/lib/icons/COriginal'; // Importing the C icon
import JavaOriginal from 'devicons-react/lib/icons/JavaOriginal'; // Importing the C icon
import Python from 'devicons-react/lib/icons/PythonOriginal'; // Importing the C icon
import JS from 'devicons-react/lib/icons/JavaScriptOriginal'; // Importing the C icon
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import HTML from 'devicons-react/lib/icons/Html5Original';
import CSS from 'devicons-react/lib/icons/Css3Original';
import { FaGithub, FaLinkedin, FaFileAlt, FaFile} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';  // Example of a general email icon
// Or for a specific Gmail icon if available
function Hero() {
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);

    const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

    return (
        <div className="hero">
            <div className="top-nav">            
                 
              
                <div className="right">
                    <a href="#contact" onClick={() => scrollToRef(contactRef)}>Contact</a> 
                    <a href="#experience" onClick={() => scrollToRef(experienceRef)}>Experience</a>
                    <a href="#projects" onClick={() => scrollToRef(projectsRef)}>Projects</a>
                    <a href="#skills" onClick={() => scrollToRef(skillsRef)}>Skills</a>
                </div>
            </div>
            <div className="profile">
                <img src={luxImage} alt="Luxman Varatharaj" className="profile-image"/>
                <h1>Luxman Varatharaj</h1>
                <div className="profile-links">
                <a href="https://github.com/luxman17" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
        </a>
                    <a href="https://www.linkedin.com/in/luxman-varatharaj/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                    <a href="luxmanva@gmail.com"><AiOutlineMail /> Gmail</a>
                    <a href="https://drive.google.com/file/d/1bbCzf7BtCQ9pHVWHKhTmGDMBwHKfz-GO/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FaFileAlt />Resume</a>
                </div>
            <div className="about">
            <p>
            I am currently in my third year of studying Computer Science at Toronto Metropolitan University. My academic journey is fueled by a deep interest in developing innovative software solutions and exploring the latest technologies in artificial intelligence and machine learning. I am passionate about applying my skills to solve real-world problems and am always eager to engage in projects that challenge my technical abilities and expand my knowledge.
            </p>

            </div>
            </div>

            <div className="hero">
            {/* Other sections and nav here */}
            <div className = "title">
            <h2>Experience</h2>
            </div>
            <div ref={experienceRef} id="experience" className="experience-container">
              
                <div className="experience-section">
                   
                    <div className="experience-image-container">
                    <h3>Embross</h3>
                        <img src={embrossImage} alt="Experience Image" className="experience-image"/>
                    </div>
                    
                    <div className="experience-description">
                        <p>- Assembled and configured 165 self-service kiosks for major airline clients, ensuring compliance with client specifications and on-time delivery, enhancing customer satisfaction.</p>
                        <p>- Installed and configured Windows operating systems on kiosks, integrating seamlessly with proprietary airline software, resulting in smooth functionality and stability.</p>
                        <p>- Performed QA checks and resolved issues, identifying and fixing hardware and software problems, ensuring all kiosks met quality standards before deployment, minimizing post-deployment errors.</p>
                     
                    </div>
                </div>


                <div className="experience-section">
                    <div className="experience-image-container">
                    <h3>Eagleview Managed Services</h3>
                        <img src={eagleImage} alt="Experience Image" className="experience-image"/>
                    </div>
                    <div className="experience-description">
                    
                        <p>- Provided extensive technical support to diverse clients, addressing various computer-related issues.</p>
                        <p>- Utilized remote access via Eagleview Managed Services in order to optimize efficient problem resolution.</p>
                        <p>- Employed critical thinking for troubleshooting and resolving computer issues, including SSD replacements and
                        installations.</p>
                        <p>- Managed client concerns through a ticketing software, ensuring timely issue resolution and detailed reporting</p>
                    </div>
                </div>
            </div>
            </div>
            
            <div ref={projectsRef} id="projects" className="section">
            <h2>Projects</h2>
            <div className="project-section">
                   
                   <div className="experience-image-container">
                   <h3>Gym Club Website</h3>
                       <img src={gymImage} alt="Experience Image" className="experience-image"/>
                       <h2><a href="https://github.com/Raymond3lam/Recreational-Club-Membership.git">Project Repository</a></h2>
                       
                   </div>
                   <div className="experience-image-container">
                   <h3>Robot Attack Game</h3>
                       <img src={gameImage} alt="Experience Image" className="experience-image"/>
                       <h2><a href="">Project Repository</a></h2>
                   </div>
                   <div className="experience-image-container">
                   <h3>Movie Store App</h3>
                       <img src={sqlImage} alt="Experience Image" className="experience-image"/>
                       <h2><a href="">Project Repository</a></h2>
                   </div>
                   <div className="experience-image-container">
                   <h3>Snakes and Ladders</h3>
                       <img src={snakeImage} alt="Experience Image" className="experience-image"/>
                       <h2><a href="">Project Repository</a></h2>
                   </div>


                   <div className="experience-image-container">
                   <h3>Binary countdown webserver</h3>
                       <img src={binImage} alt="Experience Image" className="experience-image"/>
                       <h2><a href="">Project Repository</a></h2>
                   </div>


               </div>

               
               
            </div>
            <div className = "title">
                <h2>Skills</h2>
            </div>
            
            <div ref={skillsRef} id="skills" className="section">
                
                <div>
                <JavaOriginal size={100} /> <span></span>
                <COriginal size={100} /> <span></span>
                <Python size={100} /> <span></span>
                <JS size={100} /> <span></span>
                <ReactOriginal size={100} /> <span></span>
                <HTML size={100} /> <span></span>
                <CSS size={100} /> <span></span>
                </div>
            </div>

        </div>
    );
}

export default Hero;
