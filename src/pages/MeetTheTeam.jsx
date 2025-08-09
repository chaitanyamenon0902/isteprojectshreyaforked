import React, { useEffect, useState } from 'react';
import './MeetTheTeam.css';
import Header from '../components/Header'; // <-- Import shared Header
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MeetTheTeam = () => {
  const [activeCategory, setActiveCategory] = useState('Admin Core');
  const [isScrolled, setIsScrolled] = useState(false);
  // Team member data with categories
  const coreTeamMembers = [
  {
    id: 1,
    name: "Likith M",
    role: "Convenor",
    category: "Admin Core",
    image: "src/assets/750_LikithM.jpg",
    bio: "Likith is a passionate leader with interests in technology and community building.",
    social: {
      linkedin: "https://linkedin.com/in/likithm",
      github: "https://github.com/likithm",
      twitter: "https://twitter.com/likithm"
    }
  },
  {
    id: 2,
    name: "Linisha R",
    role: "Joint Convenor",
    category: "Admin Core",
    image: "src/assets/Linisha.jpeg",
    bio: "Linisha is committed to supporting club activities and fostering a collaborative environment.",
    social: {
      linkedin: "https://linkedin.com/in/linishar",
      github: "https://github.com/linishar",
      twitter: "https://twitter.com/linishar"
    }
  },
  {
    id: 3,
    name: "Ansh Malhotra",
    role: "Secretary",
    category: "Admin Core",
    image: "src/assets/AnshVivekMalhotra.jpg",
    bio: "Ansh is an enthusiastic tech aficionado with experience in app development and mentoring.",
    social: {
      linkedin: "https://linkedin.com/in/anshmalhotra",
      github: "https://github.com/anshmalhotra",
      twitter: "https://twitter.com/anshmalhotra"
    }
  },
  {
    id: 4,
    name: "Anjana T K",
    role: "Chief Coordinator",
    category: "Admin Core",
    image: "src/assets/Anjana.jpg",
    bio: "Anjana leads coordination efforts ensuring smooth execution of club events and projects.",
    social: {
      linkedin: "https://linkedin.com/in/anjanatk",
      github: "https://github.com/anjanatk",
      twitter: "https://twitter.com/anjanatk"
    }
  },
  {
    id: 5,
    name: "Amaan Farhan",
    role: "Coordinator-Club Events",
    category: "Admin Core",
    image: "src/assets/Amaan.jpg",
    bio: "Amaan excels in organizing and managing engaging club events for members.",
    social: {
      linkedin: "https://linkedin.com/in/amaanfarhan",
      github: "https://github.com/amaanfarhan",
      twitter: "https://twitter.com/amaanfarhan"
    }
  },
  {
    id: 6,
    name: "Naisha Kishore",
    role: "Coordinator-Technical Affairs",
    category: "Admin Core",
    image: "src/assets/Naisha.jpg",
    bio: "Naisha spearheads technical initiatives and ensures members stay updated on innovations.",
    social: {
      linkedin: "https://linkedin.com/in/naishakishore",
      github: "https://github.com/naishakishore",
      twitter: "https://twitter.com/naishakishore"
    }
  },
  {
    id: 7,
    name: "Jeevotthama Shenoy",
    role: "Coordinator-Club Affairs",
    category: "Admin Core",
    image: "src/assets/Shenoy.jpg",
    bio: "Jeevotthama manages internal affairs, ensuring seamless communication within the club.",
    social: {
      linkedin: "https://linkedin.com/in/jeevotthama",
      github: "https://github.com/jeevotthama",
      twitter: "https://twitter.com/jeevotthama"
    }
  },

  // Core Members start here
  {
    id: 8,
    name: "Thatavarthi Rupesh Kumar",
    role: "SIG Head-Crypt",
    category: "Core Members",
    image: "src/assets/Rupesh.JPG",
    bio: "Rupesh leads the Crypt SIG with a passion for cybersecurity and encryption.",
    social: {
      linkedin: "https://linkedin.com/in/rupeshkumar",
      github: "https://github.com/rupeshkumar",
      twitter: "https://twitter.com/rupeshkumar"
    }
  },
  {
    id: 9,
    name: "P Devi Deepika",
    role: "SIG Head-Crypt",
    category: "Core Members",
    image: "src/assets/Deepika.jpg",
    bio: "Deepika specializes in cryptography and mentoring SIG members.",
    social: {
      linkedin: "https://linkedin.com/in/deepikap",
      github: "https://github.com/deepikap",
      twitter: "https://twitter.com/deepikap"
    }
  },
  {
    id: 10,
    name: "Suveena Sadashiv",
    role: "SIG Head-Crypt",
    category: "Core Members",
    image: "src/assets/Suveena.jpg",
    bio: "Suveena is dedicated to advancing knowledge in cryptography and security.",
    social: {
      linkedin: "https://linkedin.com/in/suveenas",
      github: "https://github.com/suveenas",
      twitter: "https://twitter.com/suveenas"
    }
  },
  {
    id: 11,
    name: "Pallavi Parage",
    role: "SIG Head-Charge",
    category: "Core Members",
    image: "src/assets/Pallavi.jpg",
    bio: "Pallavi leads Charge SIG, focusing on power systems and electrical engineering.",
    social: {
      linkedin: "https://linkedin.com/in/pallavip",
      github: "https://github.com/pallavip",
      twitter: "https://twitter.com/pallavip"
    }
  },
  {
    id: 12,
    name: "Nikhitha Mathew",
    role: "SIG Head-Charge",
    category: "Core Members",
    image: "src/assets/nikitha.jpg",
    bio: "Nikhitha coordinates Charge SIG’s projects and member engagement.",
    social: {
      linkedin: "https://linkedin.com/in/nikhitham",
      github: "https://github.com/nikhitham",
      twitter: "https://twitter.com/nikhitham"
    }
  },
  {
    id: 13,
    name: "Nisarg Rajdeep",
    role: "SIG Head-Chronicle",
    category: "Core Members",
    image: "src/assets/Nisarg.jpg",
    bio: "Nisarg heads the Chronicle SIG, specializing in documentation and storytelling.",
    social: {
      linkedin: "https://linkedin.com/in/nisargr",
      github: "https://github.com/nisargr",
      twitter: "https://twitter.com/nisargr"
    }
  },
  {
    id: 14,
    name: "Sahil Hinwani",
    role: "SIG Head-Chronicle",
    category: "Core Members",
    image: "src/assets/team-member-1.jpg",
    bio: "Sahil supports the Chronicle SIG through content creation and editing.",
    social: {
      linkedin: "https://linkedin.com/in/sahilhinwani",
      github: "https://github.com/sahilhinwani",
      twitter: "https://twitter.com/sahilhinwani"
    }
  },
  {
    id: 15,
    name: "Ajay T S",
    role: "SIG Head-Clutch",
    category: "Core Members",
    image: "src/assets/team-member-1.jpg",
    bio: "Ajay manages Clutch SIG, focusing on competitive programming and problem solving.",
    social: {
      linkedin: "https://linkedin.com/in/ajayts",
      github: "https://github.com/ajayts",
      twitter: "https://twitter.com/ajayts"
    }
  },
  {
    id: 16,
    name: "Yash Hurkat",
    role: "SIG Head-Clutch",
    category: "Core Members",
    image: "src/assets/team-member-1.jpg",
    bio: "Yash is passionate about algorithms and leads the Clutch SIG team.",
    social: {
      linkedin: "https://linkedin.com/in/yashhurkat",
      github: "https://github.com/yashhurkat",
      twitter: "https://twitter.com/yashhurkat"
    }
  },
  {
    id: 17,
    name: "Rashmi Murthy",
    role: "SIG Head-Catalyst",
    category: "Core Members",
    image: "src/assets/Rashmi.jpg",
    bio: "Rashmi coordinates Catalyst SIG, focusing on innovation and tech startups.",
    social: {
      linkedin: "https://linkedin.com/in/rashmimurthy",
      github: "https://github.com/rashmimurthy",
      twitter: "https://twitter.com/rashmimurthy"
    }
  },
  {
    id: 18,
    name: "Divyanshu Ratnakar",
    role: "SIG Head-Catalyst",
    category: "Core Members",
    image: "src/assets/Divyamshu.jpg",
    bio: "Divyanshu is dedicated to fostering creativity and innovation in Catalyst SIG.",
    social: {
      linkedin: "https://linkedin.com/in/divyanshur",
      github: "https://github.com/divyanshur",
      twitter: "https://twitter.com/divyanshur"
    }
  },
  {
    id: 19,
    name: "Shambhavi Jha",
    role: "SIG Head-Concrete",
    category: "Core Members",
    image: "src/assets/team-member-1.jpg",
    bio: "Shambhavi leads Concrete SIG, focusing on structural engineering and design.",
    social: {
      linkedin: "https://linkedin.com/in/shambhavijha",
      github: "https://github.com/shambhavijha",
      twitter: "https://twitter.com/shambhavijha"
    }
  },
  {
    id: 20,
    name: "Tammisetti Sesha Satwika",
    role: "SIG Head-Concrete",
    category: "Core Members",
    image: "src/assets/team-member-1.jpg",
    bio: "Satwika supports Concrete SIG through research and project management.",
    social: {
      linkedin: "https://linkedin.com/in/seshassatwika",
      github: "https://github.com/seshassatwika",
      twitter: "https://twitter.com/seshassatwika"
    }
  },
  {
    id: 21,
    name: "Bhagwat Poorva Milind",
    role: "SIG Head-Credit",
    category: "Core Members",
    image: "src/assets/Poorva1.jpg",
    bio: "Poorva leads Credit SIG, focusing on finance and credit analysis.",
    social: {
      linkedin: "https://linkedin.com/in/poovamilind",
      github: "https://github.com/poovamilind",
      twitter: "https://twitter.com/poovamilind"
    }
  },
  {
    id: 22,
    name: "Priyanshu Kumar",
    role: "SIG Head-Create",
    category: "Core Members",
    image: "src/assets/Priy_p3.PNG",
    bio: "Priyanshu manages Create SIG with interests in creative content and design.",
    social: {
      linkedin: "https://linkedin.com/in/priyanshukumar",
      github: "https://github.com/priyanshukumar",
      twitter: "https://twitter.com/priyanshukumar"
    }
  },
  {
    id: 23,
    name: "Sanstuti Mishra",
    role: "Secretary-Technical Affairs",
    category: "Auxiliary Core Members",
    image: "src/assets/Sanstuti.jpg",
    bio: "Sanstuti supports technical affairs and facilitates communication within the SIGs.",
    social: {
      linkedin: "https://linkedin.com/in/sanstutimishra",
      github: "https://github.com/sanstutimishra",
      twitter: "https://twitter.com/sanstutimishra"
    }
  },
  {
    id: 24,
    name: "Amarnath Muralidhar",
    role: "Secretary-Club Affairs",
    category: "Auxiliary Core Members",
    image: "src/assets/AMARTHU.jpg",
    bio: "Amarnath oversees club affairs and supports event management.",
    social: {
      linkedin: "https://linkedin.com/in/amarnathm",
      github: "https://github.com/amarnathm",
      twitter: "https://twitter.com/amarnathm"
    }
  },
  {
    id: 25,
    name: "Adhil Ali",
    role: "Secretary-Event Affairs",
    category: "Auxiliary Core Members",
    image: "src/assets/Aadhil.JPG",
    bio: "Adhil coordinates event affairs and ensures smooth event execution.",
    social: {
      linkedin: "https://linkedin.com/in/adhilali",
      github: "https://github.com/adhilali",
      twitter: "https://twitter.com/adhilali"
    }
  },
  {
    id: 26,
    name: "Jeeva K V",
    role: "SHE Head",
    category: "Auxiliary Core Members",
    image: "src/assets/Jeeva .jpg",
    bio: "Jeeva leads the SHE initiative promoting safety, health, and environment.",
    social: {
      linkedin: "https://linkedin.com/in/jeevakv",
      github: "https://github.com/jeevakv",
      twitter: "https://twitter.com/jeevakv"
    }
  },
  {
    id: 27,
    name: "Mohammed Gulzar Shaikh",
    role: "Social Initiatives Head",
    category: "Auxiliary Core Members",
    image: "src/assets/gul.jpg",
    bio: "Gulzar leads social initiatives, driving community engagement and outreach.",
    social: {
      linkedin: "https://linkedin.com/in/gulzarshaikh",
      github: "https://github.com/gulzarshaikh",
      twitter: "https://twitter.com/gulzarshaikh"
    }
  },
  {
    id: 28,
    name: "Kommidi Amulya",
    role: "Publicity Coordinator",
    category: "Auxiliary Core Members",
    image: "src/assets/Amulya.JPG",
    bio: "Amulya coordinates publicity efforts and promotes club activities.",
    social: {
      linkedin: "https://linkedin.com/in/amulya",
      github: "https://github.com/amulya",
      twitter: "https://twitter.com/amulya"
    }
  },
  {
    id: 29,
    name: "Harsh Revar",
    role: "Publicity Coordinator",
    category: "Auxiliary Core Members",
    image: "src/assets/team-member-1.jpg",
    bio: "Harsh assists in publicity coordination and content creation.",
    social: {
      linkedin: "https://linkedin.com/in/harshrevar",
      github: "https://github.com/harshrevar",
      twitter: "https://twitter.com/harshrevar"
    }
  },
  {
    id: 30,
    name: "BK Hima Bindhu",
    role: "Blog Coordinator",
    category: "Auxiliary Core Members",
    image: "src/assets/team-member-1.jpg",
    bio: "Hima manages blog content and publication schedules.",
    social: {
      linkedin: "https://linkedin.com/in/himabindhu",
      github: "https://github.com/himabindhu",
      twitter: "https://twitter.com/himabindhu"
    }
  },
  {
    id: 31,
    name: "Jonathan James",
    role: "Treasurer",
    category: "Auxiliary Core Members",
    image: "src/assets/team-member-1.jpg",
    bio: "Jonathan manages club finances and budgeting.",
    social: {
      linkedin: "https://linkedin.com/in/jonathanjames",
      github: "https://github.com/jonathanjames",
      twitter: "https://twitter.com/jonathanjames"
    }
  },
  {
    id: 32,
    name: "Hriday",
    role: "SIG Coordinator-Credit",
    category: "Auxiliary Core Members",
    image: "src/assets/Hriday .jpg",
    bio: "Hriday coordinates Credit SIG activities and member participation.",
    social: {
      linkedin: "https://linkedin.com/in/hriday",
      github: "https://github.com/hriday",
      twitter: "https://twitter.com/hriday"
    }
  },
  {
    id: 33,
    name: "Mithul Sourav",
    role: "SIG Coordinator-Credit",
    category: "Auxiliary Core Members",
    image: "src/assets/Mithul.jpeg",
    bio: "Mithul supports the Credit SIG through coordination and communication.",
    social: {
      linkedin: "https://linkedin.com/in/mithulsourav",
      github: "https://github.com/mithulsourav",
      twitter: "https://twitter.com/mithulsourav"
    }
  },
  {
    id: 34,
    name: "N Kenisha Ishwar",
    role: "SIG Coordinator-Create",
    category: "Auxiliary Core Members",
    image: "src/assets/Kenisha.jpg",
    bio: "Kenisha coordinates creative projects and SIG events.",
    social: {
      linkedin: "https://linkedin.com/in/kenishaishwar",
      github: "https://github.com/kenishaishwar",
      twitter: "https://twitter.com/kenishaishwar"
    }
  },
  {
    id: 35,
    name: "Tanush Abdulpur",
    role: "SIG Coordinator-Create",
    category: "Auxiliary Core Members",
    image: "src/assets/Tanush.jpg",
    bio: "Tanush helps manage creative content and SIG initiatives.",
    social: {
      linkedin: "https://linkedin.com/in/kenishaishwar",
      github: "https://github.com/kenishaishwar",
      twitter: "https://twitter.com/kenishaishwar"
    }
  }
]
;

  // List of all categories
  const categories = [
    'Admin Core',
    'Core Members',
    'Auxiliary Core Members',
    'Executive Members'
  ];


  // Filter team members based on active category
  const filteredMembers = coreTeamMembers.filter(member => member.category === activeCategory);

  // Handle category button click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  return (
    <div className='cont'>
    <Header/>
  
  <div className="white-team-hero">
    <h1>Meet Our Team</h1>
    <p>The brilliant minds behind ISTE NITK working together to create innovative solutions and foster a thriving tech community.</p>
    
    <div className="white-team-categories">
      {categories.map(category => (
        <button 
          key={category}
          className={`white-category-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  </div>

  <div className="white-team-container">
    <div className="white-team-grid">
      {filteredMembers.map((member) => (
        <div className="white-team-card" key={member.id}>
          <div className="member-image-container">
            <img src={member.image} alt={member.name} className="member-image" />
          </div>
          <h3 className="member-name">{member.name}</h3>
          <p className="member-role">{member.role}</p>
          <div className="social-links">
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={member.social.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
          <div className="member-bio-hover">
          <p dangerouslySetInnerHTML={{ __html: member.bio }}></p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default MeetTheTeam;