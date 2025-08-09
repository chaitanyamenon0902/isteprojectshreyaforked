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
    sectionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      marginBottom: '60px'
    },
    section: {
      background: 'white',
      border: '3px solid #e91c91',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '200px'
    },
    sectionHeader: {
      fontFamily: 'serif',
      color: '#ea1b91',
      fontSize: '48px',
      textTransform: 'capitalize',
      textAlign: 'center',
      lineHeight: '1.2',
      fontWeight: '400',
      margin: '30px 0 20px',
      padding: '0 20px'
    },
    sectionContent: {
      fontFamily: '"Arial", sans-serif',
      fontSize: '16px',
      textAlign: 'left',
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 400,
      padding: '0 40px 40px',
      lineHeight: '1.6',
      flex: 1
    },
    missionPoints: {
      fontFamily: '"Arial", sans-serif',
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    missionPoint: {
      fontFamily: '"Arial", sans-serif',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '15px',
      lineHeight: '1.6'
    },
    heart: {
      color: '#ea1c91',
      fontSize: '18px',
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
      padding: '40px 20px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      lineHeight: '1.6'
    },
    coreValuesHighlight: {
      color: '#ea1c91',
      fontWeight: 'bold'
    },
    teamSection: {
      textAlign: 'center',
      marginBottom: '60px',
      background: 'white',
      borderRadius: '12px',
      padding: '60px 40px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    teamTitle: {
      fontSize: '48px',
      color: '#e91e63',
      fontWeight: 'normal',
      marginBottom: '50px',
      fontFamily: 'serif'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      justifyItems: 'center'
    },
    teamMember: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      overflow: 'hidden',
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
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      justifyContent: 'center',
      alignItems: 'start',
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
    },
    whySheSection: {
      background: 'white',
      padding: '100px 0',
      color: '#e91c91',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '60px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    },
    whySheContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    whySheHeader: {
      textAlign: 'center',
      marginBottom: '60px',
      maxWidth: '800px',
      margin: '0 auto 60px'
    },
    whySheTitle: {
      color: '#e91c91',
      fontSize: '56px',
      fontWeight: '700',
      marginBottom: '25px',
      textShadow: '3px 3px 6px rgba(233, 28, 145, 0.2)',
      letterSpacing: '2px'
    },
    whySheDivider: {
      width: '100px',
      height: '4px',
      background: 'linear-gradient(90deg, transparent, #e91c91, transparent)',
      margin: '0 auto 30px',
      borderRadius: '2px'
    },
    whySheIntro: {
      color: '#e91c91',
      fontSize: '20px',
      lineHeight: '1.7',
      fontWeight: '300',
      textShadow: '1px 1px 2px rgba(233, 28, 145, 0.1)'
    },
    whySheIntroBox: {
      textAlign: 'center',
      marginBottom: '50px',
      background: 'rgba(233, 28, 145, 0.05)',
      padding: '25px 40px',
      borderRadius: '20px',
      border: '2px solid rgba(233, 28, 145, 0.2)',
      maxWidth: '700px',
      margin: '0 auto 50px'
    },
    statsGrid: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      marginBottom: '60px',
      maxWidth: '1000px',
      margin: '0 auto 60px',
      flexWrap: 'wrap'
    },
    statCard: {
      background: 'rgba(233, 28, 145, 0.08)',
      borderRadius: '25px',
      padding: '30px 20px',
      textAlign: 'center',
      border: '3px solid rgba(233, 28, 145, 0.2)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      boxShadow: '0 8px 32px rgba(233, 28, 145, 0.1)',
      flex: '1',
      minWidth: '180px'
    },
    statNumber: {
      fontSize: '48px',
      fontWeight: '800',
      marginBottom: '15px',
      color: '#e91c91'
    },
    statLabel: {
      fontSize: '14px',
      color: '#e91c91',
      fontWeight: '600',
      lineHeight: '1.3',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    conclusionBox: {
      textAlign: 'center',
      background: 'rgba(233, 28, 145, 0.05)',
      padding: '50px 40px',
      borderRadius: '30px',
      border: '3px solid rgba(233, 28, 145, 0.2)',
      maxWidth: '800px',
      margin: '0 auto',
      boxShadow: '0 15px 40px rgba(233, 28, 145, 0.1)'
    },
    conclusionText: {
      marginBottom: '30px',
      fontWeight: '300',
      fontSize: '18px',
      color: '#e91c91',
      lineHeight: '1.8'
    },
    quoteBox: {
      background: 'rgba(233, 28, 145, 0.08)',
      padding: '30px',
      borderRadius: '25px',
      border: '2px solid rgba(233, 28, 145, 0.15)'
    },
    quoteText: {
      marginBottom: '0',
      fontWeight: '700',
      fontSize: '26px',
      color: '#e91c91',
      textShadow: '2px 2px 4px rgba(233, 28, 145, 0.1)',
      letterSpacing: '1px'
    }
  };

  // Handle hover effects
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(233, 28, 145, 0.2)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 8px 32px rgba(233, 28, 145, 0.1)';
  };

  // Statistics data
  const stats = [
    { number: '26%', label: 'Women in Data & AI' },
    { number: '15%', label: 'Women in Engineering' },
    { number: '12%', label: 'Women in Cloud Computing' },
    { number: '34%', label: 'STEM Graduates' },
    { number: '93%', label: 'Capital to Male-Only Teams' }
  ];

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

        {/* Sections Container */}
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

        </div>

        {/* Core Values */}
        <div style={styles.coreValues}>
          SHE's core values are <span style={styles.coreValuesHighlight}>Inclusion, Integrity, Teamwork, Respect, and Dedication.</span>
        </div>
      </div>

      {/* Why SHE Section */}
      <section style={styles.whySheSection}>
        <div style={styles.whySheContainer}>
          {/* Header */}
          <div style={styles.whySheHeader}>
            <h2 style={styles.whySheTitle}>Why SHE?</h2>
            <div style={styles.whySheDivider}></div>
            <p style={styles.whySheIntro}>
              The technology industry has long been male-dominated. As we enter a new decade, 
              it's time to revisit the position of women in technology and create meaningful change.
            </p>
          </div>

          {/* Intro text */}
          <div style={styles.whySheIntroBox}>
            <p style={{
              fontSize: '18px',
              color: '#e91c91',
              marginBottom: '0',
              fontWeight: '400'
            }}>
              Global reports on women in technology reveal alarming disparities:
            </p>
          </div>
          
          {/* Statistics Grid - Now in a single row */}
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={styles.statCard}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>
                  {stat.label.split(' ').map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div style={styles.conclusionBox}>
            <p style={styles.conclusionText}>
              Our mission is to bridge the gender gap in technology by providing mentorship, 
              skill development programs, and creating opportunities for women to excel in their chosen careers.
            </p>
            
            <div style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #e91c91, transparent)',
              margin: '0 auto 25px',
              borderRadius: '2px'
            }}></div>

            <div style={styles.quoteBox}>
              <p style={styles.quoteText}>
                "Empowering Women, Engineering the Future"
              </p>
            </div>
          </div>
        </div>
      </section>

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
          Made with <span style={{ color: '#ffb3c6' }}>❤</span> by ISTE WebDev Team
        </div>
      </footer>
    </div>
  );
};

export default SHE;