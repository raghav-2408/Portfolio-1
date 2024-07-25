import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './App.css';
import bg from './bg.png';
import img1 from './react.jpeg';
import img2 from './css1.jpeg';

function App() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleContactClick = () => {
    setFormVisible(true);
  };

  const handleFormClose = () => {
    setFormVisible(false);
  };

  // function scrollToTop(e) {
  //   e.preventDefault();
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

  window.addEventListener('scroll', () => {
    const button = document.getElementById('arrow-up');
    if (window.scrollY > 300) { // Show the button after scrolling down 300px
      button.classList.add('show');
    } else {
      // button.classList.remove('show');
      button.classList.add('hide');
    }
  });

  return (
    <>
      <div className="container">
        <button className='btn' id="arrow-up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i class="fa-solid fa-arrow-up"></i>
        </button>
        <div className="imgg">
          <img src={bg} alt="" className="img1" />
          <img src={bg} alt="" className="img2" />
        </div>
        <div className="land" id="land"></div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-4 text-center" id="nav">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white mx-5" aria-current="page" href="https://drive.google.com/file/d/1HuKwmvZYmSHNULuwWYozBODx3pm7n1ok/view?usp=sharing" target='__blank'>Resume</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-5" href="#edu">Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-5" href="#proj">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-5" href="#tech">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-5" href="#cnt">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="container-fluid my-md-5 text-center my-5" id="box">
          <h1 className="m" id="hey">Hey!</h1>
          <h2 id="name">I'm <span>G</span>adapa <span>R</span>aghavendra</h2>
          <h3 id="web">Aspiring Technologist</h3>
          <p className="my-3" id="self"> <span>{'>>>'}</span> I want to make things easier!</p>
          <p className="my-3"> <span>{'>>>'}</span> I'm currently looking for new opportunities. Feel free to reach out via email or social media!</p>
        </div>

        {/* Education Section */}
        <h1 className="education-header mx-1 text-center my-5" id="edu">Education</h1>
        <div className="education my-5 text-center">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>CMR Institute Of Technology</h3>
                <p>B.Tech ( Computer Science and Engineering )</p>
                <p className="date">Hyderabad</p>
                <p className="date">Dec 2021 - Present</p>
                <p className="date">CGPA : <b>8.92</b> </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Sri Sai Junior College</h3>
                <p>Board Of Intermediate Education (M.P.C)</p>
                <p className="date">Narayanpet</p>
                <p className="date">Jun 2018 - Mar 2020</p>
                <p className="date">Percentage : <b>64.5%</b></p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Ravi Teja High School</h3>
                <p>Board of Secondary Education</p>
                <p className="date">Narayanpet</p>
                <p className="date">Apr 2005 - Mar 2018</p>
                <p className="date">GPA : <b>9.5</b> </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <h1 className="project-header mx-1 text-center my-5" id="proj">Projects</h1>
        <div id="projects" className="container my-5">
          <div className="row">
            {[
              { src: img1, title: "Student Portal", text: "Developed a student portal with React JS, Bootstrap CSS, and PostgreSQL for efficient data management" },
              { src: img2, title: "Facebook Sign-In Clone", text: "Developed a clone of the Facebook sign in page using HTML and CSS, matching the original page." },
              { src: img2, title: "Google Sign-In Clone", text: "Developed a clone of the Google sign in page using HTML and CSS, matching the original page." },
              { src: img2, title: "Pomodoro Timer", text: "Developed a Pomodoro Timer application using HTML, CSS, and JavaScript." },
              { src: img2, title: "To-Do List", text: "Developed a To-Do List application using HTML, CSS, and JavaScript." },
              { src: img2, title: "Password Generator", text: "Developed a Password Generator application using HTML, CSS, and JavaScript." }
            ].map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card" style={{ width: '90%' }}>
                  <img src={project.src} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.text}</p>
                    <a href="/" className="btn btn-dark"><i className='fa fa-link'></i> Visit</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}

        <h1 className='text-center mx-1' id="tech">Technical Skills</h1>

        <div className="skills text-center my-5">
          <div className="row">
            <div className="col-md-3 mb-4" id="skill-items">
              <i class="fa-brands fa-python" id="icon"></i>
              <p className='skills-text'>Python</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i class="fa-brands fa-java" id="icon"></i>
              <p className='skills-text'>Java</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i class="fa-brands fa-html5" id="icon"></i>
              <p className='skills-text'>Html5</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i class="fa-brands fa-css3-alt" id="icon"></i>
              <p className='skills-text'>CSS3</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i class="fa-brands fa-js" id="icon"></i>
              <p className='skills-text'>Javascript</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i class="fa-brands fa-react" id="icon"></i>
              <p className='skills-text'>ReactJS</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i class="fa fa-code" id="icon"></i>
              <p className='skills-text'>MySQL</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i class="fa fa-database" id="icon"></i>
              <p className='skills-text'>MongoDB</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <h1 className="text-center mx-1" id="cnt">Contact Me</h1>
        {/* <h3 className="text-center">Social Links</h3> */}
        <div className="footer d-flex justify-content-around my-5 bg-dark">
          <a href="https://github.com/raghav-2408" className="footer-link" target='__blank'><i className="fa-brands fa-github"></i> Github</a>
          <a href="https://www.linkedin.com/in/gadapa-raghavendra24/" className="footer-link" target='__blank'><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
          <a onClick={handleContactClick} className="footer-link" style={{ cursor: 'pointer' }}><i className="fa-solid fa-envelope"></i> Gmail</a>
          <a href="https://www.instagram.com/raghavvvv.24/" className="footer-link" target='__blank'><i className="fa-brands fa-instagram"></i> Instagram</a>
          <a href="https://x.com/raghav_240824" className="footer-link" target='__blank'><i className="fa-brands fa-x-twitter"></i> Twitter</a>
        </div>
        <p className="date text-center">Designed by Raghavendra</p>
      </div>
      <ContactForm isVisible={isFormVisible} onClose={handleFormClose} />
    </>
  );
}

export default App;
