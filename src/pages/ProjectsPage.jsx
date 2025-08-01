import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './ProjectPage.css'; 
import Footer from '../components/Footer';


function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [sigFilter, setSigFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [searchText, setSearchText] = useState('');

  const formatProjects = (raw) =>
    raw.map((p) => ({
      ...p,
      tech_stack: Array.isArray(p.tech_stack)
        ? p.tech_stack
        : (p.tech_stack || '').split(',').map((s) => s.trim()),
    }));

  useEffect(() => {
    fetch('http://localhost:4000/api/projects')
      .then((res) => res.json())
      .then((data) => {
        const formatted = formatProjects(data);
        setProjects(formatted);
        setFilteredProjects(formatted);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let filtered = [...projects];
    if (sigFilter) filtered = filtered.filter((project) => project.sig === sigFilter);
    if (yearFilter) filtered = filtered.filter((project) => project.year === parseInt(yearFilter));
    if (searchText) {
      const query = searchText.toLowerCase();
      filtered = filtered.filter((project) => project.name.toLowerCase().includes(query));
    }
    setFilteredProjects(filtered);
  }, [projects, sigFilter, yearFilter, searchText]);

  return (
    <div className="page-container">
      <Header />
      <main className="flex-grow w-full overflow-auto">
        <section className="hero-section">
          <h1>Our Projects</h1>
          <p>made by ISTE NITK — For our future.</p>
        </section>

        <div className="white-gap"></div>

        <section className="filters-section">
          <div className="filters-container">
              <select className="filter-select" value={sigFilter} onChange={(e) => setSigFilter(e.target.value)}>
                <option value="">All SIGs</option>
                <option value="CRYPT">CRYPT</option>
                <option value="CREDIT">CREDIT</option>
                <option value="CREATE">CREATE</option>
                <option value="CONCRETE">CONCRETE</option>
                <option value="CLUTCH">CLUTCH</option>
                <option value="CATALYST">CATALYST</option>
                <option value="CHRONICLE">CHRONICLE</option>
                <option value="CHARGE">CHARGE</option>
              </select>
              <select className="filter-select" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
                <option value="">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Projects..."
              className="filter-select search-box"
            />
          </div>
        </section>

        <div className="white-gap"></div>

        <section className="project-grid-section">
          <div className="project-grid-wrapper">
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <a key={project.id} href={`/projects/${project.id}`} className="block">
  <div className="project-card">
    <div className="project-img-container">
      <img
        src={project.image_url || "/isteappdefualt.jpg"}
        alt={project.name}
      />
      <div className="sig-badge">{project.sig || 'Other'}</div>
    </div>
    <div className="project-content">
      <h2 className="project-title">{project.name}</h2>
      <div className="project-year">📅 {project.year}</div>
      <p className="project-description">{project.description}</p>

      <div className="tech-tags">
        {project.keywords.map((keyword, i) => (
          <span key={i}>{keyword}</span>
        ))}
      </div>

      <div className="project-buttons">
        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
            className="code-btn"
          >
            🧠 Code
          </a>
        )}
        {project.simulation_link && (
          <a
            href={project.simulation_link}
            target="_blank"
            rel="noreferrer"
            className="demo-btn"
          >
            🚀 Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
</a>

              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default ProjectsPage;
