import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Header from '../components/Header';
import sheLogo from '../assets/she_logo.5f1c62ff.jpeg';


const SHE = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e8e8e8 100%)',
      minHeight: '100vh',
      width: '100vw'
    },
    header: {
      background: '#2c2c2c',
      padding: '15px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    },
    nav: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontSize: '16px'
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      marginRight: '10px',
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      color: '#2c2c2c',
      fontWeight: 'bold'
    },
    navLinks: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '16px',
      transition: 'color 0.3s',
      padding: '5px 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px 0'
    },
    heroSection: {
      textAlign: 'center',
      marginBottom: '80px',
      position: 'relative',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    sheLogoContainer: {
      position: 'relative',
      display: 'inline-block'
    },
    sheImage: {
  maxWidth: '80%',
  height: 'auto',
  objectFit: 'contain',
  display: 'block',
  margin: '0 auto'
},
    tagline: {
      fontSize: '28px',
      color: '#333',
      fontWeight: '300',
      marginTop: '40px',
      textAlign: 'center'
    },
    section: {
      background: 'white',
      border: '3px solid #e91c91',
      borderRadius: '0',
      'margin-bottom': '40px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      minHeight: '150px'
    },
    sectionHeader: {
  fontFamily: `'PannaCotta', cursive`,
  color: 'rgb(234, 27, 145)', // Same as #ea1b91
  fontSize: '48px',
  textTransform: 'capitalize',
  textAlign: 'center',
  lineHeight: '110%',
  fontWeight: '400',
  margin: '2.3rem 0 1.4rem'
},
    sectionContent: {
    fontFamily: '"Montserrat", sans-serif',
  fontSize: '16px',
  textAlign: 'center',
  color: 'rgba(0, 0, 0, 0.87)',
  fontWeight: 400,
  marginLeft: '0px',
  padding: '0px',
  border: 'none',
  lineHeight: '1.5',
    },
    missionPoints: {
      fontFamily: '"Montserrat", sans-serif',
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    missionPoint: {
      fontFamily: '"Montserrat", sans-serif',
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px'
    },
    heart: {
      color: '#ea1c91',
      fontSize: '16px',
      marginTop: '3px',
      flexShrink: 0
    },
    showMore: {
      color: '#e91e63',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '16px'
    },
    coreValues: {
      textAlign: 'center',
      fontSize: '20px',
      color: '#333',
      marginBottom: '60px',
      padding: '20px 0'
    },
    coreValuesHighlight: {
      color: '#ea1c91',
      fontWeight: 'bold'
    },
    teamSection: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    teamTitle: {
      fontSize: '64px',
      color: '#e91e63',
      fontWeight: 'normal',
      marginBottom: '50px',
      fontFamily: 'serif'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      marginBottom: '60px'
    },
    teamMember: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto',
      boxShadow: '0 8px 25px rgba(233, 30, 99, 0.3)',
      border: '4px solid white'
    },
    teamMemberImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    footer: {
  background: '#e91c91',
  paddingTop: '40px',
  color: 'white',
  fontFamily: 'Arial, sans-serif'
},
footerContentCentered: {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '40px',
  maxWidth: '800px',
  margin: '0 auto',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 20px 40px'
},
footerBlock: {
  textAlign: 'center'
},
footerTitle: {
  fontSize: '24px',
  marginBottom: '20px'
},
quickAccessTitle: {
  fontSize: '24px',
  marginBottom: '20px'
},
socialLinks: {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  fontSize: '24px',
  flexWrap: 'wrap'
},
socialLink: {
  color: 'white',
  background: 'rgba(255, 255, 255, 0.2)',
  padding: '10px',
  borderRadius: '10px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'opacity 0.3s'
},
quickAccessList: {
  listStyle: 'none',
  padding: 0,
  margin: 0
},
quickAccessItem: {
  marginBottom: '10px'
},
quickAccessLink: {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
  transition: 'opacity 0.3s'
},
footerBottom: {
  background: '#dc1d8a',
  textAlign: 'center',
  padding: '15px 0',
  fontSize: '14px'
}

  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <Header />
      {/* Main Container */}
      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.sheLogoContainer}>
            <img src={sheLogo} alt="SHE" style={styles.sheImage} />
          </div>
        </div>
        {/* Sections */}
        <div style={styles.sectionsContainer}>
          <div style={styles.section}>
            <div style={styles.sectionHeader}>Our Mission</div>
            <div style={styles.sectionContent}>
              <ul style={styles.missionPoints}>
                <li style={styles.missionPoint}>
                  <span style={styles.heart}>♡</span>
                  <span>To unite and create a community that provides opportunities for women in ISTE, NITK and encourage them to achieve their goals.</span>
                </li>
                <li style={styles.missionPoint}>
                  <span style={styles.heart}>♡</span>
                  <span>To create a safe space within the club and ensure equality among both male and female students.</span>
                </li>
                <li style={styles.missionPoint}>
                  <span style={styles.heart}>♡</span>
                  <span>Act as role models for young girls by setting examples, helping one another, and leading the change.</span>
                </li>
              </ul>
            </div>
          </div>

          <div style={styles.section}>
            <div style={styles.sectionHeader}>Our Vision</div>
            <div style={styles.sectionContent}>
              To be a community that empowers women to develop their technical abilities to their fullest potential and equip them to excel as leaders.
            </div>
          </div>

          <div style={styles.section}>
            <div style={styles.sectionHeader}>What Is SHE?</div>
            <div style={styles.sectionContent}>
              The Society for Her Empowerment (SHE) is a women's group that focuses on helping female students in ISTE NITK advance in their careers in engineering, business, and everything beyond. This group is dedicated to empowering women and providing them with the tools and resources they need to succeed in any environment. Through a plethora of events, we aim to create valuable and career-defining milestones for women and support their cause in pursuing a career of their choice.
            </div>
          </div>
        </div>

        <div style={styles.section}>
            <div style={styles.sectionHeader}>Why She ?</div>
            <div style={styles.sectionContent}>
                Let's look very briefly at the statistics on women in the technology oriented industries. This industry has long been a male dominated world, but as we enter a new decade it is time to revisit the position of women in technology.
Results from global reports on the state of play for women in technology show that,
              <ul style={styles.missionPoints}>
                <li style={styles.missionPoint}>
                  <span style={styles.heart}>♡</span>
                  <span>Women make up an estimated 26% of workers in Data and Artificial Intelligence roles, 15% of workers in Engineering roles and 12% of workers in Cloud Computing roles.</span>
                </li>
                <li style={styles.missionPoint}>
                  <span style={styles.heart}>♡</span>
                  <span>Only 34% of STEM graduates are women.</span>
                </li>
                <li style={styles.missionPoint}>
                  <span style={styles.heart}>♡</span>
                  <span>93% of capital invested in tech companies went to all male founding teams..</span>
                </li>
              </ul>
              Our motto 'Empowering Women, Engineering the Future' is aptly put forward for women to seek inspiration and prepare you specifically for professional practice and future leadership roles.
            </div>
          </div>

          <div style={styles.section}>
            <div style={styles.sectionHeader}>Our Events</div>
            <div style={styles.sectionContent}>
              SHE aims to host a variety of events and activities throughout the year, including guest lectures from successful female engineers, workshops on resume building and interview skills, events focused on topics such as coding, data science and networking opportunities with alumni that support the advancement of women in engineering.
            </div>
          </div>

        {/* Core Values */}
        <section className="she-core-values">
  SHE’s core values are <span>Inclusion, Integrity, Teamwork, Respect, and Dedication.</span>
</section>

        {/* Team Section */}
        <div style={styles.teamSection}>
          <h2 style={styles.teamTitle}>The Team</h2>
          <div style={styles.teamGrid}>
            <div style={styles.teamMember}>
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b332c133?w=300&h=300&fit=crop&crop=face" 
                alt="Team Member 1"
                style={styles.teamMemberImg}
              />
            </div>
            <div style={styles.teamMember}>
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" 
                alt="Team Member 2"
                style={styles.teamMemberImg}
              />
            </div>
            <div style={styles.teamMember}>
              <img 
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face" 
                alt="Team Member 3"
                style={styles.teamMemberImg}
              />
            </div>
            <div style={styles.teamMember}>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" 
                alt="Team Member 4"
                style={styles.teamMemberImg}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
  <div style={styles.footerContentCentered}>
    <div style={styles.footerBlock}>
      <h3 style={styles.footerTitle}>Reach us at:</h3>
      <div style={styles.socialLinks}>
        <a href="https://facebook.com" style={styles.socialLink} aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" style={styles.socialLink} aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" style={styles.socialLink} aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://linkedin.com" style={styles.socialLink} aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
    <div style={styles.footerBlock}>
      <h3 style={styles.quickAccessTitle}>Quick Access</h3>
      <ul style={styles.quickAccessList}>
        <li style={styles.quickAccessItem}><a href="#" style={styles.quickAccessLink}>Our Team</a></li>
        <li style={styles.quickAccessItem}><a href="#" style={styles.quickAccessLink}>SHE</a></li>
        <li style={styles.quickAccessItem}><a href="#" style={styles.quickAccessLink}>Social Initiatives</a></li>
        <li style={styles.quickAccessItem}><a href="#" style={styles.quickAccessLink}>Event Gallery</a></li>
        <li style={styles.quickAccessItem}><a href="#" style={styles.quickAccessLink}>Blog</a></li>
      </ul>
    </div>
  </div>
  <div style={styles.footerBottom}>
    Made with <span style={{ color: '#ffb3c6' }}>❤️</span> by ISTE WebDev Team
  </div>
</footer>


    </div>
  );
};

export default SHE;