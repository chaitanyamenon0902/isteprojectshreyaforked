import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import She from './pages/She'
import SOCIALS from './pages/SOCIALS'
import MeetTheTeam from './pages/MeetTheTeam';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/she" element={<She />} />
        <Route path = "/meettheteam" element = {<MeetTheTeam/>}/>
        <Route path = "/socialinitiatives" element = {<SOCIALS/>}/>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App
