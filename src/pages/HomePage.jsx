import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, faUsers, faCalendarAlt, 
  faProjectDiagram, faAward, faLightbulb, faCalendar, faBars 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn, faTwitter, faGithub 
} from '@fortawesome/free-brands-svg-icons';
import placeholderLogo from '../assets/placeholder-logo.png';
import heroImage from '../assets/hero-image.png';
import aboutImage from '../assets/about-image.jpg';
import hackathonImage from '../assets/hackathon-image.jpg';
import aiWorkshopImage from '../assets/ai-workshop.jpg';
import techTalkImage from '../assets/tech-talk.jpg';
import teamMember1 from '../assets/team-member-1.jpg';
import teamMember2 from '../assets/team-member-2.jpg';
import teamMember3 from '../assets/team-member-3.jpg';
import teamMember4 from '../assets/team-member-4.jpg';
import './Homepage.css';

// Note: You'll need to install:
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
// And create/import your images or use actual URLs

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSig, setActiveSig] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize any animations or scroll triggers here
    // For example, you could use GSAP here if you add it to your project

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const sigs = [
    {
      name: 'Charge',
      logo: 'src/assets/Charge.jpg',
      description:
        'Electronics & Robotics SIG focused on embedded systems, IoT, and innovation in hardware.',
    },
    {
      name: 'Create',
      logo: 'src/assets/Create.jpg',
      description:
        'Design & UI/UX SIG empowering visual storytelling, branding, and user experience.',
    },
    {
      name: 'Clutch',
      logo: 'src/assets/Clutch.jpg',
      description:
        'Coding SIG sharpening programming, problem-solving, and competitive coding skills.',
    },
    {
      name: 'Crypt',
      logo: 'src/assets/Crypt.jpg',
      description:
        'Cybersecurity SIG exploring ethical hacking, cryptography, and digital safety.',
    },
    {
      name: 'Concrete',
      logo: 'src/assets/Concrete.jpg',
      description:
        'Core Engineering SIG promoting practical projects and strong technical foundations.',
    },
    {
      name: 'Catalyst',
      logo: 'src/assets/Catalyst.jpg',
      description:
        'AI/ML SIG diving into intelligent systems, data science, and machine learning.',
    },
    {
      name: 'Chronicle',
      logo: 'src/assets/Chronicle.jpg',
      description:
        'Content & Media SIG creating compelling articles, blogs, and digital content.',
    },
    {
      name: 'Credit',
      logo: 'src/assets/Credit.jpg',
      description:
        'Finance & Management SIG building strategy, budgeting, and leadership skills.',
    },
  ]

  return (
    <>
      {/* Header */}
      <header className={isScrolled ? 'header-scrolled' : ''}>
        <div className="container">
          <nav className="navbar">
            <a href="#" className="logo">
              <img src={placeholderLogo} alt="ISTE NITK Logo" />
              <div className="logo-text">
                ISTE NITK
                <span>Indian Society for Technical Education</span>
              </div>
            </a>
            <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li className="menu-item"><a href="#">Home</a></li>
              <li className="menu-item"><a href="#about">About</a></li>
              <li className="menu-item dropdown">
                <a href="#sigs">SIGs</a>
                <ul className="dropdown-menu">
                  <li><a href="#charge">Charge</a></li>
                  <li><a href="#crypt">Crypt</a></li>
                  <li><a href="#create">Create</a></li>
                  <li><a href="#chronicle">Chronicle</a></li>
                  <li><a href="#catalyst">Catalyst</a></li>
                  <li><a href="#credit">Credit</a></li>
                  <li><a href="#clutch">Clutch</a></li>
                  <li><a href="#concrete">Concrete</a></li>
                </ul>
              </li>
              <li className="menu-item"><a href="#team">Our Team</a></li>
              <li className="menu-item"><a href="#events">Events</a></li>
              <li className="menu-item"><a href="#projects">Projects</a></li>
              <li className="menu-item"><a href="#blogs">Blogs</a></li>
              <li className="menu-item"><a href="#she">SHE</a></li>
              <li className="menu-item"><a href="#socialinitiatives">Social Initiatives</a></li>
              <li className="menu-item"><a href="#gallery">Gallery</a></li>
            </ul>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </nav>
        </div>
      </header>

{/* {HERO SECTION} */}
  <section className="hero">
  <div className="container">
    <div className="hero-content">
      {/* Overlay Text */}
      <div className="hero-text-overlay">
        <h3>Welcome to </h3>
        <h1>
          <span className="hero-heading-inline">
            ISTE NITK
          </span>
        </h1>
        <p>where technology meets creativity... </p>
      </div>

      {/* Image */}
      <div className="hero-image animate__animated animate__fadeInRight">
        <img src={heroImage} alt="ISTE NITK Events" />
      </div>
    </div>
  </div>

  <div className="hero-shapes">
    <div className="shape shape-1"></div>
    <div className="shape shape-2"></div>
  </div>
</section>


      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About ISTE NITK</h2>
          <p className="section-subtitle">We are a group of passionate individuals driven by innovation and technical excellence.</p>
          
          <div className="about-content">
            <div className="about-image">
              <img src={aboutImage} alt="About ISTE NITK" />
            </div>
            <div className="about-text">
              <p>ISTE NITK Chapter strives to supplement the campus’ academic environment by conducting a host of different technical events, workshops, and annual projects, aimed at making learning fun, insightful and impactful.               With a host of various Special Interest Groups, or SIGs, our community specializes in domains ranging from various branches of engineering, to business, literature and media, ISTE NITK constantly strives to develop its’ members technical capabilities, and nurture a sense of creativity</p>
              <p>Since our establishment, we have been at the forefront of implementing innovative ideas and creating platforms for students to showcase their technical prowess. Our initiatives span across various domains including software development, electronics, mechanical engineering, and more.</p>
              <p>We collaborate with industry experts and alumni to provide students with real-world exposure and create opportunities for professional growth.</p>
              <a href="#" className="btn">
                Our Vision <FontAwesomeIcon icon={faLightbulb} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SIGs Section */}
      <section className="sigs" id="sigs">
        <div className="container">
          <h2 className="section-title">Special Interest Groups [SIGs]</h2>
          <p className="section-subtitle">ISTE comprises 8 vibrant Special Interest Groups (SIGs), each fostering a community of
            students passionate about a specific domain. These SIGs serve as collaborative spaces
            where members engage in active discussions, organize Knowledge Exchange Programs (KEPs),
            conduct hands-on workshops and fun events, and work on impactful projects. Through
            continuous learning and collaboration, our SIGs empower members to deepen their
            expertise and contribute meaningfully to their chosen fields.</p>
          
          <div className="sigs-content">
            <div className='cards-container'>
                <div className="sig-cards">
                  {sigs.map((sig, index) => (
                    <div key={index} className={`sig-card ${activeSig === index ? 'show-overlay' : ''}`}>
                      <div className="sig-logo">
                        <img src={sig.logo} alt={`${sig.name} Logo`} />
                      </div>
                      <h3 className="sig-name">{sig.name}</h3>

                      <button
                        className="btn btn-outline"
                        onClick={() =>
                          setActiveSig(activeSig === index ? null : index)
                        }
                      >
                        {activeSig === index ? 'Close' : 'Read More'}
                      </button>

                      <div className="card-overlay">
                        <p className="sig-description">{sig.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <FontAwesomeIcon icon={faUsers} className="stat-icon" />
              <div className="stat-number">500+</div>
              <div className="stat-text">Active Members</div>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faCalendarAlt} className="stat-icon" />
              <div className="stat-number">20+</div>
              <div className="stat-text">Annual Events</div>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faProjectDiagram} className="stat-icon" />
              <div className="stat-number">30+</div>
              <div className="stat-text">Projects</div>
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faAward} className="stat-icon" />
              <div className="stat-number">15+</div>
              <div className="stat-text">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events" id="events">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">Participate in our exciting events and enhance your technical skills.</p>
          
          <div className="event-cards">
            <div className="event-card">
              <div className="event-image">
                <img src={hackathonImage} alt="Hackathon Event" />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <FontAwesomeIcon icon={faCalendar} /> May 25, 2025
                </div>
                <h3 className="event-title">Annual Hackathon</h3>
                <p className="event-desc">A 24-hour coding marathon where participants collaborate to build innovative solutions to real-world problems.</p>
                <a href="#" className="btn btn-outline">Learn More</a>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-image">
                <img src={aiWorkshopImage} alt="Workshop Event" />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <FontAwesomeIcon icon={faCalendar} /> June 10, 2025
                </div>
                <h3 className="event-title">AI Workshop</h3>
                <p className="event-desc">Learn the fundamentals of artificial intelligence and machine learning from industry experts.</p>
                <a href="#" className="btn btn-outline">Register Now</a>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-image">
                <img src={techTalkImage} alt="Tech Talk Event" />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <FontAwesomeIcon icon={faCalendar} /> June 18, 2025
                </div>
                <h3 className="event-title">Tech Talk Series</h3>
                <p className="event-desc">An engaging session featuring industry leaders sharing insights about emerging technologies.</p>
                <a href="#" className="btn btn-outline">Save Your Seat</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The dedicated individuals who make ISTE NITK a success.</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={teamMember1} alt="Team Member" />
              </div>
              <div className="member-info">
                <h3 className="member-name">Ananya Sharma</h3>
                <p className="member-role">Convenor</p>
                <div className="social-links">
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={teamMember2} alt="Team Member" />
              </div>
              <div className="member-info">
                <h3 className="member-name">Rahul Singh</h3>
                <p className="member-role">Co-Convenor</p>
                <div className="social-links">
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={teamMember3} alt="Team Member" />
              </div>
              <div className="member-info">
                <h3 className="member-name">Priya Patel</h3>
                <p className="member-role">Technical Head</p>
                <div className="social-links">
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src={teamMember4} alt="Team Member" />
              </div>
              <div className="member-info">
                <h3 className="member-name">Vikram Nair</h3>
                <p className="member-role">Events Coordinator</p>
                <div className="social-links">
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="social-link"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-desc">Subscribe to our newsletter to get the latest updates on events, workshops, and opportunities.</p>
          <form className="newsletter-form">
            <input type="email" className="newsletter-input" placeholder="Enter your email" required />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">
                <img src={placeholderLogo} alt="ISTE NITK Logo" />
                <div className="logo-text">ISTE NITK</div>
              </div>
              <p>Empowering students with technical knowledge and fostering innovation at NITK Surathkal.</p>
              <div className="footer-contact">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>NITK Surathkal, Mangalore, Karnataka - 575025</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>iste@nitk.edu.in</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            
            <div className="footer-links-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="#">Home</a></li>
                <li className="footer-link"><a href="#about">About Us</a></li>
                <li className="footer-link"><a href="#events">Events</a></li>
                <li className="footer-link"><a href="#team">Our Team</a></li>
              </ul>
            </div>
            
            <div className="footer-links-section">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="#">Projects</a></li>
                <li className="footer-link"><a href="#">Gallery</a></li>
                <li className="footer-link"><a href="#">Blog</a></li>
                <li className="footer-link"><a href="#">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-links-section">
              <h3 className="footer-title">Follow Us</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="#">Facebook</a></li>
                <li className="footer-link"><a href="#">Instagram</a></li>
                <li className="footer-link"><a href="#">LinkedIn</a></li>
                <li className="footer-link"><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} ISTE NITK Chapter. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Homepage;