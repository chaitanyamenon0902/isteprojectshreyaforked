import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [sigFilter, setSigFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [searchText, setSearchText] = useState('');

  // Fetch all projects on load
  useEffect(() => {
    fetch('http://localhost:4000/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = [...projects];

    if (sigFilter) {
      filtered = filtered.filter((project) => project.sig === sigFilter);
    }

    if (yearFilter) {
      filtered = filtered.filter(
        (project) => project.year === parseInt(yearFilter)
      );
    }

    if (searchText) {
      const query = searchText.toLowerCase();
      filtered = filtered.filter((project) =>
        project.name.toLowerCase().includes(query)
      );
    }

    setFilteredProjects(filtered);
  }, [projects, sigFilter, yearFilter, searchText]);

  return (
    <>
      <div className="w-screen flex flex-col min-h-screen bg-white">
        <Header />
        <div className="h-16 sm:h-24 flex-shrink-0"></div>

        <main className="flex-grow w-full overflow-auto">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 relative bg-white">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 text-black">Our Projects</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                made by ISTE NITK — For our future.
              </p>
            </div>
          </section>

          {/* Filters Section */}
          <section className="py-8 px-4 md:px-8 bg-blue-50">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                {/* Left-aligned Filters */}
                <div className="flex flex-wrap gap-4">
                  <select
                    onChange={(e) => setSigFilter(e.target.value)}
                    value={sigFilter}
                    className="bg-white border-2 border-blue-500 text-blue-900 px-4 py-2 rounded-lg"
                  >
                    <option value="">Filter by SIG</option>
                    <option value="CRYPT">CRYPT</option>
                    <option value="CREDIT">CREDIT</option>
                    <option value="CREATE">CREATE</option>
                    <option value="CONCRETE">CONCRETE</option>
                    <option value="CLUTCH">CLUTCH</option>
                    <option value="CATALYST">CATALYST</option>
                    <option value="CHRONICLE">CHRONICLE</option>
                    <option value="CHARGE">CHARGE</option>
                  </select>

                  <select
                    onChange={(e) => setYearFilter(e.target.value)}
                    value={yearFilter}
                    className="bg-white border-2 border-blue-500 text-blue-900 px-12 py-12 rounded-lg"
                  >
                    <option value="">Filter by Year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                </div>

                {/* Right-aligned Search Input */}
                <div className="w-full md:w-auto">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search Projects..."
                    className="bg-white border-2 border-blue-500 text-blue-900 px-4 py-2 rounded-lg w-full md:w-64"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Project Cards Grid */}
          <section className="py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <a key={project.id} href={`/projects/${project.id}`}>
                    <div className="bg-white border-2 border-blue-200 rounded-xl shadow-md hover:shadow-lg transition p-6 text-blue-900">
                      <div className="h-48 overflow-hidden rounded-md mb-4">
                        <img
                          src={project.image_url || "/isteappdefualt.jpg"}
                          alt={project.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>

                      <h2 className="text-2xl font-semibold mb-2 text-blue-800">{project.name}</h2>
                      <p className="text-sm text-blue-600 mb-4">{project.description}</p>

                      <div className="flex justify-between text-sm text-blue-900 font-medium">
                        <span>{project.sig}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default ProjectsPage;