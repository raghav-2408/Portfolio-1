import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import './App.css';
import bg from './images/bg.png';

// project images
import img1 from './images/react.svg';
import img2 from './images/fb.svg';
import img22 from './images/google.svg';
import img3 from './images/racism.svg';
import img4 from './images/todo.svg';
import img5 from './images/password.svg';

// certificate images
import img6 from './images/coursera.png';
import img7 from './images/smart.png';
import img8 from './images/infosys1.png';

function App() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleContactClick = () => {
    setFormVisible(true);
  };

  const handleFormClose = () => {
    setFormVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('arrow-up');
      if (window.scrollY > 300) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Current Scroll Y:', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {showWelcome && (
        <div className="welcome-message">
          <h1>Welcome!</h1>
        </div>
      )}

      <div className="container">
        <button className='btn' id="arrow-up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fa-solid fa-arrow-up"></i>
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
                  <a className="nav-link text-white mx-5" href="#edu">Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-5" href="#proj">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-5" href="#tech">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white mx-5" href="#certificate">Certificates</a>
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

          <a className="nav-link active text-white mx-5" aria-current="page" href="https://drive.google.com/file/d/1CBONB2Jhvgd2P__G_kRJa4r-8_oCoXUQ/view?usp=sharing" target='__blank'>
            <button className='btn btn-dark text-center my-5' style={{ border: "3px solid white", width: '25%' }}>Resume</button>
          </a>
        </div>

        {/* Education Section */}
        <h1 className="education-header mx-1 text-center" id="edu">Education</h1>
        <div className="education my-5 text-center">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>CMR Institute Of Technology</h3>
                <p>B.Tech ( Computer Science and Engineering )</p>
                <p className="date">Hyderabad</p>
                <p className="date">Dec 2021 - Present</p>
                <p className="date">CGPA : <b>8.95</b> </p>
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
            <div className="col-md-4 mb-4">

              <div className="card" style={{ width: '100%' }}>
                <img src={img1} className="card-img-top my-3" alt="YapSphere" style={{ width: '75%', height: '90%', alignSelf: 'center' }} />
                <div className="card-body">
                  <h5 className="card-title"> <b>YapSphere</b></h5>
                  <p className="card-text"> - Developed a real-time web chat app using HTML, EJS, CSS, JavaScript, Socket.io, and MongoDB Atlas.
                    <br></br> - Features include user authentication, a central chat room, and live messaging. </p>
                  <a href="https://yapsphere.onrender.com/" className="btn btn-dark" target="__blank"><i className='fa fa-link'></i> Visit</a>
                </div>
              </div>
            </div>


            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '100%' }}>
                <img src={img3} className="card-img-top my-1" alt="Racism Detection" style={{ width: '45%', alignSelf: 'center' }} />
                <div className="card-body">
                  <h5 className="card-title"> <b>Racism Detection by using Sentiment Analysis</b></h5>
                  <p className="card-text">- Built a stacked ensemble GCR-NN model to detect racist content in Twitter posts by analyzing sentiment and identifying harmful language, enhancing online safety.</p>
                  <a href="https://github.com/raghav-2408/Racism-Detection" className="btn btn-dark" target="__blanks"><i className='fa fa-link'></i> Visit</a>
                </div>
              </div>
            </div>


            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '100%' }}>
                <img src={img2} className="card-img-top" alt="Facebook Sign-In Clone" style={{ width: '85%', alignSelf: 'center' }} />
                <div className="card-body">
                  <h5 className="card-title"> <b>Facebook Sign-In Clone</b> </h5>
                  <p className="card-text"> - Developed a clone of the Facebook sign in page using HTML and CSS, matching the original page.
                    <br></br>
                    - Focused on replicating the exact layout, styling, and user interface
                  </p>
                  <a href="https://raghav-fb-clone.netlify.app/" className="btn btn-dark" target='__blank'><i className='fa fa-link'></i> Visit</a>
                </div>
              </div>
            </div>



            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '100%' }}>
                <img src={img22} className="card-img-top" alt="Google Sign-In Clone" style={{ width: "61%", alignSelf: 'center' }} />
                <div className="card-body">
                  <h5 className="card-title"> <b>Google Sign-In Clone</b> </h5>
                  <p className="card-text"> - Developed a clone of the Google sign in page using HTML and CSS, matching the original page.</p>
                  <a href="https://raghav-google-clone.netlify.app/" className="btn btn-dark" target='__blank'><i className='fa fa-link'></i>Visit</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">

              <div className="card" style={{ width: '100%' }}>
                <img src={img4} className="card-img-top" alt="To-Do List" style={{ width: '95%', alignSelf: 'center' }} />
                <div className="card-body">
                  <h5 className="card-title"> <b>To-Do List</b> </h5>
                  <p className="card-text"> - Developed a To-Do List application using HTML, CSS, and JavaScript.</p>
                  <a href="/" className="btn btn-dark" target='__blank'><i className='fa fa-link'></i> Visit</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '100%' }}>
                <img src={img5} className="card-img-top" alt="Password Generator" style={{ width: '75%', alignSelf: 'center' }} />
                <div className="card-body">
                  <h5 className="card-title"> <b>Password Generator</b> </h5>
                  <p className="card-text"> - Developed a Password Generator application using HTML, CSS, and JavaScript.</p>
                  <a href="https://password-generator-raghav.netlify.app/" className="btn btn-dark" target="__blank"><i className='fa fa-link' ></i> Visit</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <h1 className='text-center mx-1' id="tech">Technical Skills</h1>
        <div className="skills text-center my-5">
          <div className="row">
            <div className="col-md-3 mb-4" id="skill-items">
              <i className="fa-brands fa-python" id="icon"></i>
              <p className='skills-text'>Python</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">

              <i className="fa-brands fa-html5" id="icon"></i>
              <p className='skills-text'>HTML</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i className="fa-brands fa-css3-alt" id="icon"></i>
              <p className='skills-text'>CSS</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i className="fa-brands fa-js" id="icon"></i>
              <p className='skills-text'>Javascript</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i className="fa-brands fa-react" id="icon"></i>

              <p className='skills-text'>React.js</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i className="fa-solid fa-database" id="icon"></i>
              <p className='skills-text'>MongoDB</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i className="fa-brands fa-js" id="icon"></i>
              <p className='skills-text'>EJS</p>
            </div>
            <div className="col-md-3 mb-4" id="skill-items">
              <i className="fa fa-plug" id="icon"></i>
              <p className='skills-text'>Socket.io</p>
            </div>
          </div>
        </div>


        <div className="certificates">

          <h1 className='text-center mx-1 my-5' id="certificate">Certifications</h1>
          <div className="row my-5">
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '90%' }}>
                <div className="card-body">
                  <h5 className="card-title text-center">Google Crash Course On Python</h5>
                  <center>
                    <img src={img6} alt="..." style={{ width: '64%' }} />
                  </center>
                  <p className="card-text text-center"> <b>Python</b></p>
                  <a href="https://www.coursera.org/account/accomplishments/verify/L78N2DWT4AQZ?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=link" className="btn btn-dark" target="__blank"><i className='fa fa-link'></i> Visit</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '90%' }}>
                <div className="card-body">
                  <h3 className="card-title text-center">Smart Interviews</h3>
                  <h5 className='card-title text-center'> (Smart Coder) </h5>
                  <center>
                    <img src={img7} alt="" />
                  </center>
                  <p className="card-text text-center"> <b>Data Structures & Algorithms</b> </p>
                  <a href="https://smartinterviews.in/certificate/bd117769" className="btn btn-dark" target="__blank"><i className='fa fa-link'></i> Visit</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '90%' }}>
                <div className="card-body">
                  <h5 className="card-title text-center">Infosys Python Foundation Certication</h5>
                  <center>
                    <img src={img8} alt="" />
                  </center>
                  <p className="card-text text-center"><b>Python</b></p>
                  <a href="https://drive.google.com/file/d/1BfgtllseY9PqugVapdl3t-pZNchNwQQI/view?usp=sharing" className="btn btn-dark" target="__blank"><i className='fa fa-link'></i> Visit</a>
                </div>
              </div>
            </div>

          </div>
        </div>



        {/* Footer Section */}
        <h1 className="text-center mx-1" id="cnt">Contact Me</h1>
        <div className="footer d-flex justify-content-around my-5 bg-dark">
          <a href="https://github.com/raghav-2408" className="footer-link" target='__blank'><i className="fa-brands fa-github"></i> Github</a>
          <a href="https://www.linkedin.com/in/gadapa-raghavendra24/" className="footer-link" target='__blank'><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
          <button onClick={handleContactClick} className="footer-link" style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, color: 'inherit' }}>
            <i className="fa-solid fa-envelope"></i> Gmail
          </button>
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
