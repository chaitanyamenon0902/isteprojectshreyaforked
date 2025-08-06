import React, { useEffect, useState } from 'react';
import { Heart, Eye, Target, BookOpen, Users, Globe, Clock } from 'lucide-react';
import './SocialInitiatives.css';

import Pranav from '../assets/PranavSalunkhe.jpeg';
import Ansh from '../assets/AnshVivekMalhotra.jpg';
import hari from '../assets/hari.jpg';
import Hemant from '../assets/HemantSomanna.jpg';
import Nisarg from '../assets/NisargRajdeep.jpg';
import teamMember1 from '../assets/team-member-1.jpg';
import teamMember2 from '../assets/team-member-2.jpg';
import teamMember3 from '../assets/team-member-3.jpg';
import teamMember4 from '../assets/team-member-4.jpg';


import Header from '../components/Header';  // Adjust the path if necessary
import Footer from '../components/Footer';  // Adjust the path if necessary

const SocialInitiatives = () => {
  const pastInitiatives = [
    {
      title: "KREC English Medium School Visit",
      description: "A career workshop teaching basic science to students. Packed with laughter, playful games, and wide beaming smiles...",
      icon: <BookOpen size={24} strokeWidth={1.5} />,
      year: "2019"
    },
    {
      title: "Collection Drive for St. Joseph's Prashanth Nivas",
      description: "Students from NITK contributed clothes, books, and stationery to be given to the elderly...",
      icon: <Heart size={24} strokeWidth={1.5} />,
      year: "2019"
    },
    {
      title: "LGBTQ+ Awareness",
      description: "ISTE, as an ally of the LGBTQ+ community, continues to mould itself to be the safest space possible...",
      icon: <Users size={24} strokeWidth={1.5} />,
      year: "2020"
    },
    {
      title: "Zero Waste Initiative",
      description: "With at least 8 million tons of plastic entering the oceans each year, ISTE NITK social initiatives created a Zero Waste Kit...",
      icon: <Globe size={24} strokeWidth={1.5} />,
      year: "2021"
    },
    {
      title: "About Bloody Time",
      description: "An event to shed light on menstrual health and break the taboo surrounding it...",
      icon: <BookOpen size={24} strokeWidth={1.5} />,
      year: "2022"
    },
    {
      title: "It's okay not to be okay",
      description: "An open mic event hosted with the Rotaract Club of NITK to raise awareness on mental health...",
      icon: <Heart size={24} strokeWidth={1.5} />,
      year: "2023"
    },
    {
      title: "Pride Month Celebration",
      description: "ISTE NITK celebrated Pride Month by creating a safe space for members of the LGBTQ+ community...",
      icon: <Users size={24} strokeWidth={1.5} />,
      year: "2023"
    },
    {
      title: "To Be Honest",
      description: "An event inviting attendees to enter a room full of metaphorical mirrors and share their honest thoughts...",
      icon: <Eye size={24} strokeWidth={1.5} />,
      year: "2024"
    }
  ];

  return (
    <>
      <Header />

      <div className="mt-hero">
        <div className="hero-text">
          <h1>Social Initiatives</h1>
          <p>Fostering a socially inclusive environment at NITK to develop awareness and open-minded attitudes towards various social issues.</p>
        </div>
      </div>

      <div className="so-container">
        <div className="infographic-container">
          <div className="info-section">
            <div className="info-graphic">
              <div className="info-circle">
                <Heart size={64} strokeWidth={1.5} />
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">Description</h2>
              <div className="info-text">
                <p>
                  Since 2017, at Social Initiatives ISTE NITK, our motive has been to nurture a socially inclusive environment...
                </p>
              </div>
            </div>
          </div>

          <div className="info-section appear-animation">
            <div className="info-graphic">
              <div className="info-circle">
                <Eye size={64} strokeWidth={1.5} />
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">Vision</h2>
              <div className="info-text">
                <p>
                  To create a united community of people, considerate and respectful towards themselves, each other and the world...
                </p>
              </div>
            </div>
          </div>

          <div className="info-section appear-animation">
            <div className="info-graphic">
              <div className="info-circle">
                <Target size={64} strokeWidth={1.5} />
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">Mission</h2>
              <div className="info-text">
                <ul className="mission-list">
                  <li>Conduct events to promote social awareness with strong participation.</li>
                  <li>Encourage students to embrace societal differences and diversities.</li>
                  <li>Promote unity through shared activities and learning experiences.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="scroll-container">
        <div className="scroll-content">
          <span><img src={Pranav} alt="scroll-element" /></span>
          <span><img src={Ansh} alt="scroll-element" /></span>
          <span><img src={hari} alt="scroll-element" /></span>
          <span><img src={Hemant} alt="scroll-element" /></span>
          <span><img src={Nisarg} alt="scroll-element" /></span>
          
        </div>
      </div>
      

      <div className="container">
        <div className="infographic-container">
          <div className="info-section">
            <div className="info-graphic">
              <div className="info-circle">
                <Clock size={64} strokeWidth={1.5} />
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">Past Events</h2>
              <div className="info-text">
                <p>
                  Over the years, ISTE NITK Social Initiatives has organized numerous impactful events. Here’s a glimpse of our journey.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            {pastInitiatives.map((initiative, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animation-timeline`}>
                <div className="timeline-content">
                  <div className="timeline-icon">{initiative.icon}</div>
                  <div className="timeline-year">{initiative.year}</div>
                  <h3 className="timeline-title">{initiative.title}</h3>
                  <p className="timeline-description">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SocialInitiatives;
