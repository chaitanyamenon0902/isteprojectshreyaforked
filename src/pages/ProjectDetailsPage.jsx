import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/projects/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch project');
        }
        const fetchedProject = await response.json();
        setProject(fetchedProject);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-blue-800">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-white text-blue-900 font-sans flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl border border-blue-200 bg-white p-8 rounded-xl shadow-lg space-y-10">
        {/* Top section with image and meta info */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={project.image_url || "/isteappdefualt.jpg"}
              alt={project.name}
              className="rounded-xl object-cover w-full h-64 md:h-72 shadow-md"
            />
          </div>

          {/* Project Info */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold text-blue-800">{project.name}</h1>
            <p className="text-blue-600 text-sm">
              {project.sig} • {project.year}
            </p>

            {/* Keyword Chips */}
            <div className="flex flex-wrap gap-2 mt-2">
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
        </div>

        {/* Description Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">What was tackled?</h2>
            <p className="text-blue-900">{project.tackled}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">How was it done?</h2>
            <p className="text-blue-900">{project.approach}</p>
          </div>
        </div>

        {/* Links Section */}
        {(project.github_link || project.simulation_link) && (
          <div className="flex flex-wrap gap-4">
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                🔗 GitHub
              </a>
            )}
            {project.simulation_link && (
              <a
                href={project.simulation_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                🛰 Simulation
              </a>
            )}
          </div>
        )}

        {/* Mentors and Mentees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-1">Mentors</h2>
            <ul className="list-disc list-inside text-blue-900">
              {(project.mentors || []).map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-1">Mentees</h2>
            <ul className="list-disc list-inside text-blue-900">
              {(project.mentees || []).map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-blue-700">Contact</h2>
          <p className="text-blue-900">
            {(project.mentors || []).join(", ")}, {(project.mentees || []).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;