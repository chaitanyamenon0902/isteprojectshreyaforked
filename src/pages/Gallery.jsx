import React from 'react';
import './gallery.css';

import Footer from '../components/Footer';
import Header from '../components/Header';

import poto1 from '../assets/1.JPG'
import poto2 from '../assets/2.JPG'
import poto3 from '../assets/3.JPG'
import poto4 from '../assets/4.JPG'
import poto5 from '../assets/5.jpg'
import poto6 from '../assets/6.jpg'
import poto7 from '../assets/7.jpg'
import poto8 from '../assets/8.JPG'
import poto9 from '../assets/9.JPG'
import poto10 from '../assets/10.JPG'
import poto11 from '../assets/11.JPG'
import poto12 from '../assets/12.JPG'
import poto13 from '../assets/13.JPG'
import poto14 from '../assets/14.JPG'
import poto15 from '../assets/15.JPG'
import poto16 from '../assets/16.JPG'
import poto17 from '../assets/17.jpg'
import poto18 from '../assets/18.jpg'

const events = [
  {
    title: 'Square One',
    images: [poto1, poto2, poto3, poto4, poto5, poto6],
  },
  {
    title: 'Transcend',
    images: [poto7, poto8, poto9, poto10, poto11, poto12],
  },
  {
    title: 'Scotland Yard',
    images: [poto13, poto14, poto15, poto16, poto17, poto18],
  },
];

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="gallery-container">
        <h1 className="Gallery-heading"> GALLERY</h1>
        {events.map((event, index) => (
          <div className="gallery-section" key={index}>
            <h2 className="Event-title">{event.title}</h2>
            <div className={`carousel-row ${index % 2 === 0 ? 'scroll-left' : 'scroll-right'}`}>
              <div className="carousel-track">
                {[...event.images, ...event.images].map((img, idx) => (
                  <img src={img} alt={`${event.title} ${idx}`} className="carousel-image" key={idx} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
