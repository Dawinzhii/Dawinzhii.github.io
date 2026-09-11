import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    title: 'Buddy Builder AI',
    category: 'AI · RAG · 3D',
    description: 'An AI-powered feng shui room planning system that combines Thai knowledge retrieval with an interactive 3D design experience.',
    tags: ['LangChain', 'ChromaDB', 'BGE-M3', 'Three.js'],
    images: [
      '/images/projects/buddy-1.jpg',
      '/images/projects/buddy-2.jpg',
      '/images/projects/buddy-3.jpg',
    ],
  },
  {
    number: '02',
    title: 'BakeryMVC',
    category: 'FULL-STACK · E-COMMERCE',
    description: 'A complete bakery and café ordering platform with product browsing, cart management, secure authentication, VAT, and loyalty features.',
    tags: ['ASP.NET Core MVC', 'MySQL', 'EF Core', 'Tailwind CSS'],
    images: [
      '/images/projects/bakery-1.png',
      '/images/projects/bakery-2.png',
      '/images/projects/bakery-3.png',
    ],
  },
  {
    number: '03',
    title: 'CourseFlow',
    category: 'WEB APP · EDUCATION',
    description: 'A course registration and timetable planning experience that helps students compare schedules, review class details, and organize their semester.',
    tags: ['Course registration', 'Timetable planning', 'Schedule patterns'],
    images: [
      '/images/projects/courseflow-2.jpg',
      '/images/projects/courseflow-1.jpg',
    ],
  },
  {
    number: '04',
    title: 'SlideMe',
    category: 'MOBILE · TRANSPORTATION',
    description: 'A mobile app for requesting slide and tow truck services, matching customers with drivers, and tracking locations throughout the journey.',
    tags: ['React Native', 'SQL', 'Driver matching', 'Location tracking'],
    images: [
      '/images/projects/slideme-1.jpg',
      '/images/projects/slideme-2.jpg',
    ],
  },
]

const highlights = [
  {
    type: 'Certificate',
    title: 'Insights from Data and AI',
    detail: 'Code.org · Certificate of Completion',
    image: '/images/credentials/data-ai-certificate.jpeg',
  },
  {
    type: 'Certificate',
    title: 'AI-Preneur Hackathon',
    detail: 'Chulalongkorn School of Integrated Innovation · March 15, 2026',
    image: '/images/credentials/ai-preneur-certificate.jpeg',
  },
  {
    type: 'Event',
    title: 'AI-Preneur Hackathon',
    detail: 'Team presentation · Central Region',
    image: '/images/credentials/ai-preneur-event.jpeg',
  },
  {
    type: 'Event',
    title: 'Tech IDEA 2026',
    detail: 'School of Information Technology · Sripatum University',
    image: '/images/credentials/tech-idea-2026.jpeg',
  },
]

function App() {
  const [viewer, setViewer] = useState(null)

  const closeViewer = () => setViewer(null)
  const moveImage = (direction) => {
    setViewer((current) => {
      if (!current) return null
      const count = current.images.length
      return { ...current, imageIndex: (current.imageIndex + direction + count) % count }
    })
  }

  useEffect(() => {
    if (!viewer) return undefined
    document.body.classList.add('modal-open')
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeViewer()
      if (event.key === 'ArrowRight') moveImage(1)
      if (event.key === 'ArrowLeft') moveImage(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [viewer])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sutha Thongkong home">SUTHA<span>®</span></a>
        <nav aria-label="Main navigation">
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#highlights">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="https://github.com/Dawinzhii" target="_blank" rel="noreferrer">GitHub ↗</a>
      </header>

      <main id="top">
        <section id="resume" className="resume-hero page-shell" aria-labelledby="resume-title">
          <div className="profile-panel">
            <div className="profile-image-wrap">
              <img src="/images/profile.png" alt="Sutha Thongkong" />
              <span className="availability">Open to work</span>
            </div>
            <p className="profile-note">Based in Samutprakan, Thailand</p>
          </div>

          <div className="resume-intro">
            <p className="overline">AI &amp; FULL-STACK DEVELOPER · DATA SCIENCE</p>
            <h1 id="resume-title">Sutha<br />Thongkong</h1>
            <p className="lead">I build data-informed products, intelligent systems, and practical web experiences that turn complex ideas into useful tools.</p>
            <div className="contact-row">
              <a href="mailto:dawinzhy.crypto@gmail.com">Email ↗</a>
              <a href="https://www.linkedin.com/in/sutha-thongkong" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/Dawinzhii" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>

          <div className="resume-facts">
            <article>
              <p className="fact-label">Experience</p>
              <div className="fact-heading"><h2>Matix.co.,ltd</h2><span>2016—2019</span></div>
              <p>Metalworking machine operator in Nishio, Aichi, Japan. Worked from technical drawings, verified parts with precision measuring tools, and maintained production quality and 5S safety standards.</p>
            </article>
            <article>
              <p className="fact-label">Education</p>
              <div className="education-item"><h2>Sripatum University</h2><span>2023—Present</span><p>Bachelor's Degree · Bangkok</p></div>
              <div className="education-item"><h2>Samutprakan Technical College</h2><span>2013—2015</span><p>High Vocational Certificate in Computer Technician</p></div>
            </article>
            <article>
              <p className="fact-label">Core toolkit</p>
              <div className="toolkit">
                {['Python', 'JavaScript', 'React', 'React Native', 'Node.js', 'ASP.NET Core', 'MySQL', 'RAG', 'LangChain', 'n8n'].map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="projects-section" aria-labelledby="projects-title">
          <div className="page-shell">
            <div className="section-intro">
              <p className="overline">SELECTED PROJECTS · 2023—PRESENT</p>
              <h2 id="projects-title">Work that solves<br />real problems.</h2>
              <p>Click any project image to explore the gallery.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <button className="project-cover" type="button" onClick={() => setViewer({ title: project.title, label: project.number, images: project.images, imageIndex: 0 })} aria-label={`Open ${project.title} gallery`}>
                    <img src={project.images[0]} alt={`${project.title} project preview`} loading="lazy" decoding="async" />
                    <span className="view-pill">View gallery <b>{project.images.length}</b></span>
                  </button>
                  <div className="project-copy">
                    <div className="project-meta"><span>{project.number}</span><p>{project.category}</p></div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="thumbnail-row" aria-label={`${project.title} gallery thumbnails`}>
                      {project.images.map((image, imageIndex) => (
                        <button type="button" key={image} onClick={() => setViewer({ title: project.title, label: project.number, images: project.images, imageIndex })} aria-label={`View ${project.title} image ${imageIndex + 1}`}>
                          <img src={image} alt="" loading="lazy" decoding="async" />
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="highlights" className="highlights-section page-shell" aria-labelledby="highlights-title">
          <div className="highlights-heading">
            <div>
              <p className="overline">LEARNING · COMMUNITY · 2026</p>
              <h2 id="highlights-title">Certificates<br />&amp; Events.</h2>
            </div>
            <p>A record of continuous learning, hands-on challenges, and the communities that shaped my work.</p>
          </div>

          <div className="highlight-groups">
            {['Certificate', 'Event'].map((group) => (
              <div className="highlight-group" key={group}>
                <div className="group-title"><span>{group === 'Certificate' ? '01' : '02'}</span><h3>{group}s</h3></div>
                <div className="highlight-grid">
                  {highlights.filter((item) => item.type === group).map((item) => (
                    <article className="highlight-card" key={`${item.type}-${item.title}`}>
                      <button type="button" onClick={() => setViewer({ title: item.title, label: item.type, images: [item.image], imageIndex: 0 })} aria-label={`View ${item.title} ${item.type.toLowerCase()}`}>
                        <img src={item.image} alt={`${item.title} ${item.type.toLowerCase()}`} loading="lazy" decoding="async" />
                        <span>View image ↗</span>
                      </button>
                      <p>{item.type}</p>
                      <h4>{item.title}</h4>
                      <small>{item.detail}</small>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section page-shell" aria-labelledby="contact-title">
          <p className="overline">LET'S BUILD SOMETHING USEFUL</p>
          <h2 id="contact-title">Interested in working<br />together?</h2>
          <div className="contact-bottom">
            <p>I'm open to conversations about Data Science, AI, automation, and full-stack development.</p>
            <a href="https://www.linkedin.com/in/sutha-thongkong" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="page-shell"><span>© {new Date().getFullYear()} Sutha Thongkong</span><span>Portfolio · Resume</span><a href="#top">Back to top ↑</a></footer>

      {viewer && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${viewer.title} image gallery`} onMouseDown={(event) => event.target === event.currentTarget && closeViewer()}>
          <div className="lightbox-top">
            <div><span>{viewer.label}</span><h2>{viewer.title}</h2></div>
            <button type="button" onClick={closeViewer} aria-label="Close gallery">Close ×</button>
          </div>
          <div className="lightbox-stage">
            {viewer.images.length > 1 && <button className="gallery-arrow previous" type="button" onClick={() => moveImage(-1)} aria-label="Previous image">←</button>}
            <img src={viewer.images[viewer.imageIndex]} alt={`${viewer.title} image ${viewer.imageIndex + 1}`} />
            {viewer.images.length > 1 && <button className="gallery-arrow next" type="button" onClick={() => moveImage(1)} aria-label="Next image">→</button>}
          </div>
          <div className="lightbox-bottom">
            <span>{String(viewer.imageIndex + 1).padStart(2, '0')} / {String(viewer.images.length).padStart(2, '0')}</span>
            <div>{viewer.images.map((image, index) => <button type="button" key={image} className={index === viewer.imageIndex ? 'active' : ''} onClick={() => setViewer({ ...viewer, imageIndex: index })} aria-label={`Go to image ${index + 1}`} />)}</div>
            <p>{viewer.images.length > 1 ? 'Use arrow keys to navigate' : 'Click Close or press Esc'}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default App
