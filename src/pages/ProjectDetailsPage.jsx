import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectCard.css'; // Import external styles
import defaultImage from '../assets/hero-image.jpg'; // Adjust if needed
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/projects/${id}`);
        if (!response.ok) throw new Error('Failed to fetch project');
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (!project) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
  <>
    <Header />
    <div className="project-page">
      <div className="project-card">

        {/* TOP SECTION */}
        <div className="project-top">
          {/* LEFT SIDE */}
          <div className="project-top-left">
            <img
              src={project.image_url || defaultImage}
              alt={project.name}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="project-top-right">
            <div className="project-header">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-meta">{project.sig} • {project.year}</p>

              {/* Keywords */}
              <div className="TECH-tags">
                {(project.keywords || []).map((kw, i) => (
                  <span key={i}>{kw}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="project-links">
  <a
    href={project.github_link || "/coming-soon"}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link-button"
  >
    🔗 Report
  </a>

  <a
    href={project.simulation_link || "/coming-soon"}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link-button"
  >
    🛰 Simulation
  </a>
</div>



            {/* Contributors */}
            <div className="contributors contact">
  <p>
    <strong>MENTORS:</strong> {(project.mentors || []).join(", ")}
  </p>
  <p>
    <strong>MENTEES:</strong> {(project.mentees || []).join(", ")}
  </p>
</div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="project-bottom">
          <h3>WHAT WAS TACKLED?</h3>
          <p className="project-tackled">{project.tackled}</p>

          <h3>HOW WAS IT DONE?</h3>
          <p className="project-approach">{project.approach}</p>
        </div>

      </div>
    </div>
    <Footer />
  </>
);

};

export default ProjectDetailsPage;
