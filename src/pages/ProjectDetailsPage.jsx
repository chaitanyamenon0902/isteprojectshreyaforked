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
        <div className="card-content">
          {/* LEFT SIDE */}
          <div className="card-left">
            <div className="image-wrapper">
              <img
                src={project.image_url || defaultImage}
                alt={project.name}
              />
            </div>

            <div className="project-description">
              <h3>What was tackled?</h3>
              <p>{project.tackled}</p>

              <h3>How was it done?</h3>
              <p>{project.approach}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="card-right">
            <div className="project-header">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-meta">{project.sig} • {project.year}</p>

              {/* Keywords */}
              <div class="tech-tags">
                {(project.keywords || []).map((kw, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 border border-blue-300"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.github_link || project.simulation_link) && (
              <div className="project-links">
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button"
                  >
                    🔗 GitHub
                  </a>
                )}
                {project.simulation_link && (
                  <a
                    href={project.simulation_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button"
                  >
                    🛰 Simulation
                  </a>
                )}
              </div>
            )}

            <div className="contributors">
              <div>
                <h4>Mentors</h4>
                <ul>
                  {(project.mentors || []).map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </div>
              <div>
                <h4>Mentees</h4>
                <ul>
                  {(project.mentees || []).map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </div>
            </div>

            <div className="contact">
              <h4>Contact</h4>
              <p>{[...(project.mentors || []), ...(project.mentees || [])].join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProjectDetailsPage;
