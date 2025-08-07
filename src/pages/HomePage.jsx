import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { 
  faArrowRight, faUsers, faCalendarAlt, 
  faProjectDiagram, faAward, faLightbulb, faCalendar, faBars 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn, faGithub 
} from '@fortawesome/free-brands-svg-icons';
import placeholderLogo from '../assets/placeholder-logo.png';
import heroImage from '../assets/hero-image.jpg';
import aboutImage from '../assets/about-image.jpg';
import hackathonImage from '../assets/ScotlandYard.jpg';
import aiWorkshopImage from '../assets/squareone.png';
import techTalkImage from '../assets/transcend.webp';
import teamMember1 from '../assets/team-member-1.jpg';
import teamMember2 from '../assets/team-member-2.jpg';
import teamMember3 from '../assets/team-member-3.jpg';
import teamMember4 from '../assets/team-member-4.jpg';
import './Homepage.css';
import { Link } from 'react-router-dom';

// TeamMember component
const TeamMember = ({ image, name, role, altText }) => (
  <div className="team-member-circle">
    <div className="member-image-circle">
      <img src={image} alt={altText} />
      <div className="member-overlay">
        <div className="member-info-hover">
          <h4 className="member-name-hover">{name}</h4>
          <p className="member-role-hover">{role}</p>
        </div>
      </div>
    </div>
  </div>
);


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
      logo: 'src/assets/charge.png',
      description:
'Charge, one of the biggest SIGs on campus, is a haven for budding electronics and electrical engineers. We at Charge cater to the needs of all individuals and nurture them through projects, KEPs and numerous events. We emphasize innovation and strive for excellence. If you are interested in all things electronic, then this is the place to be.',
    },
    {
      name: 'Create',
      logo: 'src/assets/create.png',
      description:
        'This is Create. We Create. Create what though? Media. Be it projects, events, KEPs on things like photography, videography, animation, or music production, we do it all. If you have a passion for anything creative, we\'re the place to be.',
    },
    {
      name: 'Clutch',
      logo: 'src/assets/clutch.png',
      description:
        'Clutch as a SIG is a very interesting one. We do not do all the fun projects alone! We have members with varying fields of interest but still able to implement it in a mechanical project. We have projects in collaboration with Charge and Crypt along with complete mechanical projects also. That sure makes things interesting, doesn\'t it?!',
    },
    {
      name: 'Crypt',
      logo: 'src/assets/concrete.png',
      description:
'To deCrypt our comp SIG is not an unchallenging task! Crypt is home to all things Computer Science. We are a team of passionate programmers enthusiastic about our interests and eager to broaden our spheres. We constantly strive towards learning new skills and updating our knowledge through various KEPs, projects, and exciting events.',
    },
    {
      name: 'Concrete',
      logo: 'src/assets/concrete.png',
      description:
        'We’re one of the few SIGs rocking the world of Civil Engineering! From cracking codes to pouring concrete (figuratively, of course), we host fun KEPs, hands-on workshops, and events that build your inner civil engineer. Love bridges, buildings, or just breaking stuff down? Concrete’s where it’s at!',
    },
    {
      name: 'Catalyst',
      logo: 'src/assets/catalystfinal (1).png',
      description:
        'Catalyst is a special interest group of ISTE-NITK dedicated to engineering applications in the field of Chemical Engineering. Through multiple events, KEPs, and Projects, Catalyst aims to bring out the technical aspect of chemical engineering in everyone. Catalyst provides a platform to always learn more!',
    },
    {
      name: 'Chronicle',
      logo: 'src/assets/chronicle.png',
      description:
        'The Chronicles of ISTE are regaled across the campus, and generally, they revolve around the quirky members of the Chronicle SIG. We are a fraternity that fosters creativity, differing opinions, and being yourself. We bond over a wish to add an aesthetic twist to an otherwise purely technical coterie. To be a part of Chronicle, all you need is a splash of creativity and quirkiness.',
    },
    {
      name: 'Credit',
      logo: 'src/assets/credit (1).png',
      description:
        'If business buzzwords excite you more than buzzers, Credit is your crew! From finance and marketing to product management and analytics, we blend brains and business through KEPs, projects, and growth-driven sessions. Learn, lead, and level up with us!',
    },
  ];

  const coreTeamMembers = [
    {
      id: 1,
      image: teamMember1,
      name: "Likith M",
      role: "Convenor"
    },
    {
      id: 2,
      image: teamMember2,
      name: "Linisha R",
      role: "Joint Convenor"
    },
    {
      id: 3,
      image: teamMember3,
      name: "Ansh Malhotra",
      role: "Secretary"
    },
    {
      id: 4,
      image: teamMember4,
      name: "Anjana T K",
      role: "Cheif Coordinator"
    },
    {
      id: 5,
      image: teamMember1,
      name: "Amaan Farhan",
      role: "Coordinator-Club Events"
    },
    {
      id: 6,
      image: teamMember2,
      name: "Naisha Kishore",
      role: "Coordinator-Technical Affairs"
    },
    {
      id: 7,
      image: teamMember3,
      name: "Jeevotthama Shenoy",
      role: "Coordinator-Club Affairs"
    },
    {
      id: 8,
      image: teamMember3,
      name: "Thatavarthi Rupesh Kumar",
      role: "SIG Head-Crypt"
    },
    {
      id: 9,
      image: teamMember3,
      name: "P Devi Deepika",
      role: "SIG Head-Crypt"
    },
    {
      id: 10,
      image: teamMember3,
      name: "Suveena Sadashiv",
      role: "SIG Head-Crypt"
    },
    {
      id: 11,
      image: teamMember3,
      name: "Pallavi Parage",
      role: "SIG Head-Charge"
    },
    {
      id: 12,
      image: teamMember3,
      name: "Nikhitha Mathew",
      role: "SIG Head-Charge"
    },
    {
      id: 13,
      image: teamMember3,
      name: "Nisarg Rajdeep",
      role: "SIG Head-Chronicle"
    },
    {
      id: 14,
      image: teamMember3,
      name: "Sahil Hinwani",
      role: "SIG Head-Chronicle"
    },
    {
      id: 15,
      image: teamMember3,
      name: "Ajay T S",
      role: "SIG Head-Clutch"
    },
    {
      id: 16,
      image: teamMember3,
      name: "Yash Hurkat",
      role: "SIG Head-Clutch"
    },
    {
      id: 17,
      image: teamMember3,
      name: "Rashmi Murthy",
      role: "SIG Head-Catalyst"
    },
    {
      id: 18,
      image: teamMember3,
      name: "Divyanshu Ratnakar" ,
      role: "SIG Head-Catalyst"
    },
    {
      id: 19,
      image: teamMember3,
      name: "Shambhavi Jha",
      role: "SIG Head-Concrete"
    },
    {
      id: 20,
      image: teamMember3,
      name: "Tammisetti Sesha Satwika",
      role: "SIG Head-Concrete"
    },
    {
      id: 21,
      image: teamMember3,
      name: "Bhagwat Poorva Milind",
      role: "SIG Head-Credit"
    },
    {
      id: 22,
      image: teamMember3,
      name: "Priyanshu Kumar",
      role: "SIG Head-Create"
    }
  ];

  const auxCoreMembers= [
    {
      id: 23,
      image: teamMember3,
      name: "Sanstuti Mishra",
      role: "Secretary-Technical Affairs"
    },
    {
      id: 24,
      image: teamMember3,
      name: "Amarnath Muralidhar",
      role: "Secretary-Club Affairs"
    },
    {
      id: 25,
      image: teamMember3,
      name: "Adhil Ali",
      role: "Secretary-Event Affairs"
    },
    {
      id: 26,
      image: teamMember3,
      name: "Jeeva K V",
      role: "SHE Head"
    },
    {
      id: 27,
      image: teamMember3,
      name: "Mohammed Gulzar Shaikh",
      role: "Social Initiatives Head"
    },
    {
      id: 28,
      image: teamMember3,
      name: "Kommidi Amulya",
      role: "Publicity Coordinator"
    },
    {
      id: 29,
      image: teamMember3,
      name: "Harsh Revar",
      role: "Publicity Coordinator"
    },
    {
      id: 30,
      image: teamMember3,
      name: "BK Hima Bindhu",
      role: "Blog Coordinator"
    },
    {
      id: 31,
      image: teamMember3,
      name: "Jonathan James",
      role: "Treasurer"
    },
    {
      id: 32,
      image: teamMember3,
      name: "Hriday",
      role: "SIG Coordinator-Credit"
    },
    {
      id: 33,
      image: teamMember3,
      name: "Mithul Sourav",
      role: "SIG Coordinator-Credit"
    },
    {
      id: 34,
      image: teamMember3,
      name: "N Kenisha Ishwar",
      role: "SIG Coordinator-Create"
    },
    {
      id: 35,
      image: teamMember3,
      name: "Tanush Abdulpur",
      role: "SIG Coordinator-Create"
    }
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
              <li className="menu-item"><Link to ="/meettheteam">Our Team</Link></li>
              <li className="menu-item"><a href="#events">Events</a></li>
              <li className="menu-item"><Link to="/projects">Projects</Link></li>
              <li className="menu-item"><Link to="/she">SHE</Link></li>
              <li className="menu-item">
  <a href="https://istenitk.wordpress.com/" target="_blank" rel="noopener noreferrer">Blogs</a>
</li>
              <li className="menu-item"><Link to ="/socialinitiatives">Social Initiatives</Link></li>
              <li className="menu-item"><Link to="/gallery">Gallery</Link></li>
            </ul>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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
              <p>ISTE NITK Chapter strives to supplement the campus' academic environment by conducting a host of different technical events, workshops, and annual projects, aimed at making learning fun, insightful and impactful. With a host of various Special Interest Groups, or SIGs, our community specializes in domains ranging from various branches of engineering, to business, literature and media, ISTE NITK constantly strives to develop its' members technical capabilities, and nurture a sense of creativity</p>
              <p>Since our establishment, we have been at the forefront of implementing innovative ideas and creating platforms for students to showcase their technical prowess. Our initiatives span across various domains including software development, electronics, mechanical engineering, and more.</p>
              <p>We collaborate with industry experts and alumni to provide students with real-world exposure and create opportunities for professional growth.</p>
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

      {/* Events Section */}
      <section className="events" id="events">
        <div className="container">
          <h2 className="section-title">Flagship Events</h2>
          <p className="section-subtitle">Participate in our exciting events and enhance your technical skills.</p>
          
          <div className="event-cards">
            <div className="event-card">
              <div className="event-image">
                <img src={hackathonImage} alt="Scotland Yard" />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <FontAwesomeIcon icon={faCalendar} /> October 2, 2024
                </div>
                <h3 className="event-title">Scotland Yard</h3>
                <p className="event-desc">A thrilling campus-wide mystery-solving game where participants decode clues, explore hidden corners of NITK, and compete to be the ultimate detective. It blends storytelling, puzzles, and teamwork—making it one of ISTE’s most iconic and immersive experiences.</p>
                <a href="#" className="btn btn-outline">Register Now</a>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-image">
                <img src={aiWorkshopImage} alt="Square One" />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <FontAwesomeIcon icon={faCalendar} /> November 10, 2024
                </div>
                <h3 className="event-title">Square One</h3>
                <p className="event-desc">Square One is ISTE NITK’s flagship onboarding event for first-year students, designed to introduce them to the club’s vibrant technical and creative culture.</p>
                <a href="#" className="btn btn-outline">Register Now</a>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-image">
                <img src={techTalkImage} alt="Transcend" />
              </div>
              <div className="event-content">
                <div className="event-date">
                  <FontAwesomeIcon icon={faCalendar} /> January 24, 2025
                </div>
                <h3 className="event-title">Transend</h3>
                <p className="event-desc">Transcend is ISTE NITK’s flagship multi-domain event where participants tackle real-world inspired challenges across diverse technical fields. It encourages cross-SIG collaboration, creativity, and strategic thinking—making it a platform for showcasing technical excellence and teamwork.</p>
                <a href="#" className="btn btn-outline">Save Your Seat</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
       {/* Updated Team Section */}
      <section className="team" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The dedicated individuals who make ISTE NITK a success.</p>

          {/* Core Team Section */}
          <div className="team-section">
            <h3 className="team-section-title">THE CORE</h3>
            <div className="team-circles">
              {coreTeamMembers.map((member) => (
                <TeamMember 
                  key={member.id}
                  image={member.image} 
                  name={member.name} 
                  role={member.role} 
                  altText={`${member.name} - ${member.role}`}
                />
              ))}
            </div>
          </div>

          {/* Auxiliary Core Team Section */}
          <div className="team-section">
            <h3 className="team-section-title">AUXILIARY CORE</h3>
            <div className="team-circles">
              {auxCoreMembers.map((member) => (
                <TeamMember 
                  key={member.id}
                  image={member.image} 
                  name={member.name} 
                  role={member.role} 
                  altText={`${member.name} - ${member.role}`}
                />
              ))}
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
                <li className="footer-link"><Link to="/projects">Projects</Link></li>
                <li className="footer-link"><a href="#">Gallery</a></li>
                <li className="footer-link"><a href="#">Blog</a></li>
                <li className="footer-link"><a href="#">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-links-section">
              <h3 className="footer-title">Follow Us</h3>
              <ul className="footer-links">
                <li className="footer-link"><a href="https://www.instagram.com/istenitk/?hl=en">Instagram</a></li>
                <li className="footer-link"><a href="https://www.linkedin.com/company/istenitk/posts/?feedView=all">LinkedIn</a></li>
                <li className="footer-link"><a href="#">Telegram</a></li>
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