import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Header from '../components/Header';
import sheLogo from '../assets/Social Initiatives Logo - Sanjay Hazra ..png';
import 'typeface-dancing-script';
import 'typeface-kaushan-script';



const SOCIALS = () => {
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
    padding: '100px 20px 0'
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
    border: '3px solid #1a237e',
    borderRadius: '0',
    marginBottom: '40px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    minHeight: '150px'
  },
  sectionContent: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '16px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 400,
    marginLeft: '0px',
    padding: '20px',
    border: 'none',
    lineHeight: '1.5',
  },
  missionPoints: {
    fontFamily: '"Montserrat", sans-serif',
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  SectionHeader: {
    fontFamily: '"Kaushan Script", cursive',
    color: '#1a237e',
    fontSize: '2.5rem',
    textTransform: 'capitalize',
    textAlign: 'center',
    lineHeight: '1.1',
    fontWeight: 400,
    margin: 0,
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#f8f9ff'
  },
  missionPoint: {
    fontFamily: '"Montserrat", sans-serif',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px'
  },
  heart: {
    color: '#1a237e',
    fontSize: '30px',
    marginTop: '3px',
    flexShrink: 0
  },
  showMore: {
    color: '#1a237e',
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
    color: '#1a237e',
    fontWeight: 'bold'
  },
  teamSection: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  teamTitle: {
    fontSize: '64px',
    color: '#1a237e',
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
    background: '#1a237e',
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
    background: '#1a237e',
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
            <div style={styles.SectionHeader}>Our Mission</div>
            <div style={styles.sectionContent}>
              <ul style={styles.missionPoints}>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Conducting various events in college for social awareness and to make sure maximum people participate in it.
                  </div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>
                  Engaging the students of NITK to cultivate an attitude of acceptance towards pre-existing societal differences and diversities.
                  </div>
                </li>
                <li style={styles.missionPoint}>
                 
                  <div style={styles.sectionContent}>
                    Creating stronger bonds between the students by helping them indulge in various activities helping them understand the importance of coexistence.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={styles.section}>
            <div style={styles.SectionHeader}>Our Vision</div>
            <div style={styles.sectionContent}>
              To create a united community of people, considerate and respectful towards themselves, each-other and the world and to take actions that initiate lasting changes for the future. To provide a safe and non-judgemental space to every member to express and accept themselves.
            </div>
          </div>

          <div style={styles.section}>
            <div style={styles.SectionHeader}>Description</div>
            <div style={styles.sectionContent}>
              <ul style={styles.missionPoints}>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Since 2017, at Social Initiatives ISTE NITK, our motive has been to nurture a socially inclusive environment in which students of NITK develop a healthy open-minded attitude and awareness towards various social issues, like inequality, indiscrimination, mental health issues etc., and thereby inculcate a cooperative and caring nature towards everyone else.
                  </div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>
                  To bring about these, we regularly organize events and workshops related to social awareness in NITK and have received a positive response from the students. Some of the activities are open mic events, group discussions on social topics and interviews with people to share their views and opinions on a particular topic. We aim to continue organizing such events and make a positive contribution to society.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.section}>
            <div style={styles.SectionHeader}>Community Outreach & Social Responsibility</div>
            <div style={styles.sectionContent}>
              <ul style={styles.missionPoints}>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Visit to KREC English Medium School to conduct a career workshop and teach basic science through interactive games.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Collection drive for St. Joseph's Prashanth Nivas, gathering clothes, books, and stationery for the elderly, differently abled, and school-going children.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Donation visit to St. Joseph's Prashanth Nivas on 3rd November 2019, engaging with residents in a heartwarming experience.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Zero Waste Kit initiative to reduce plastic pollution and encourage sustainable living.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Awareness campaign on sexual abuse recovery, sharing a member's personal healing journey.</div>
                </li>
              </ul>
            </div>
          </div>

          <div style={styles.section}>
            <div style={styles.SectionHeader}>Awareness & Inclusivity Initiatives</div>
            <div style={styles.sectionContent}>
              <ul style={styles.missionPoints}>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Internal LGBTQ+ attitudes survey and ongoing efforts to create a safe, inclusive space.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Event "About Bloody Time" with Dr. Trupta Naik to address menstrual health and break taboos.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Collaboration with Rotaract Club for "It's Okay Not to Be Okay" open mic on mental health awareness, inviting anonymous creative submissions.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Pride Month celebrations with safe spaces, discussions, and the blog piece "1965" highlighting historical LGBTQ+ struggles.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>"Guess Who?" event to spotlight LGBTQ+ icons, alongside the blog "Pages From a Father's Diary" about acceptance.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>"To Be Honest" discussion platform for open sharing of views on social and student issues.</div>
                </li>
                <li style={styles.missionPoint}>
                  
                  <div style={styles.sectionContent}>Launch of the revamped Social Initiatives logo inspired by Helen Keller's quote on unity.</div>
                </li>
                <li style={styles.missionPoint}>
          
                  <div style={styles.sectionContent}>Second "It's Okay Not to Be Okay" event featuring the interactive game Put a Finger Down to highlight mental health challenges.</div>
                </li>
              </ul>
            </div>
          </div>

          

        {/* Core Values */}

        {/* Team Section */}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
  <div style={styles.footerContentCentered}>
    <div style={styles.footerBlock}>
      <h3 style={styles.footerTitle}>Reach us at:</h3>
      <div style={styles.socialLinks}>
        <a href="https://www.facebook.com/istenitk/" style={styles.socialLink} aria-label="">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/istenitk/" style={styles.socialLink} aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/c/istenitk" style={styles.socialLink} aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/company/istenitk/?originalSubdomain=in" style={styles.socialLink} aria-label="LinkedIn">
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

export default SOCIALS;