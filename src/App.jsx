import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01', type: 'AI · RAG · 3D', title: 'Buddy Builder AI',
    description: 'A Thai-language feng shui assistant that turns knowledge into practical room layouts and answers.',
    highlights: ['LangChain, ChromaDB & BGE-M3 embeddings', 'Claude & Groq layout generation streamed via SSE', '331-page thesis transformed into 40+ knowledge chunks'],
  },
  {
    number: '02', type: 'FULL-STACK · E-COMMERCE', title: 'BakeryMVC',
    description: 'A complete bakery and café ordering experience with the business rules needed for real operations.',
    highlights: ['ASP.NET Core MVC, EF Core & MySQL 8.0', 'Loyalty points, VAT and price snapshotting', 'Secure BCrypt authentication'],
  },
  {
    number: '03', type: 'AUTOMATION · FINTECH', title: 'Realtime Finance Tracker',
    description: 'A chat-first workflow for recording personal finances instantly and keeping the data organized.',
    highlights: ['n8n, LINE Messaging API & Google Sheets', 'Real-time expense logging through chat', 'AI-assisted transaction categorization'],
  },
]

const skills = [
  ['Languages', 'JavaScript', 'Python', 'C#', 'CSS3'],
  ['Frontend', 'React', 'React Native', 'Three.js', 'Tailwind CSS', 'DaisyUI'],
  ['Backend & Data', 'Node.js', 'Express', 'ASP.NET Core', 'MySQL', 'ChromaDB'],
  ['AI & Automation', 'LangChain', 'RAG', 'NLP', 'BGE-M3', 'n8n'],
]

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sutha Thongkong, home">ST<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#resume">Resume</a><a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="eyebrow"><span /> Available for collaboration</div>
          <h1>I build <span>useful things</span><br /><em>with data &amp; AI.</em></h1>
          <div className="hero-bottom">
            <p>I'm <strong>Sutha Thongkong</strong>, an AI &amp; Full-Stack Developer with a special interest in Data Science—turning complex information into clear, practical products.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <span>↘</span></a>
              <a className="button text-button" href="#contact">Let's connect <span>→</span></a>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true"><span>DATA SCIENCE</span><i>✦</i><span>ARTIFICIAL INTELLIGENCE</span><i>✦</i><span>FULL-STACK</span></div>
        </section>

        <section className="section-shell intro" aria-labelledby="about-title">
          <p className="section-label">01 / ABOUT</p>
          <div>
            <h2 id="about-title">Curious by nature.<br />Practical by design.</h2>
            <div className="intro-copy">
              <p>I enjoy working where data, software, and real human needs meet. My focus is on RAG systems, NLP, automation workflows, and modern web experiences.</p>
              <p>From preparing Thai-language knowledge for AI to building end-to-end applications, I care about making technology understandable, dependable, and genuinely useful.</p>
            </div>
          </div>
        </section>

        <section id="work" className="section-shell work" aria-labelledby="work-title">
          <div className="section-heading"><p className="section-label">02 / SELECTED WORK</p><h2 id="work-title">Projects with purpose.</h2></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-index">{project.number}</div>
                <div className="project-content">
                  <p className="project-type">{project.type}</p><h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className="project-mark" aria-hidden="true">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="resume" aria-labelledby="resume-title">
          <div className="section-shell">
            <div className="resume-heading">
              <div><p className="section-label">03 / RESUME</p><h2 id="resume-title">Capabilities at a glance.</h2></div>
              <button className="button print-button" type="button" onClick={() => window.print()}>Print / Save PDF <span>↗</span></button>
            </div>
            <div className="resume-grid">
              <div className="resume-summary">
                <h3>Profile</h3><p>AI &amp; Full-Stack Developer building data-informed products, retrieval systems, automation workflows, and responsive applications.</p>
                <h3>Focus</h3><p>Data Science · RAG · NLP · Automation · Full-Stack Development</p>
              </div>
              <div className="skill-groups">
                {skills.map(([title, ...items]) => <div className="skill-group" key={title}><h3>{title}</h3><div>{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
          <p className="section-label">04 / CONTACT</p>
          <h2 id="contact-title">Have an idea worth<br /><em>building together?</em></h2>
          <p>I'm open to conversations about Data Science, AI, automation, and full-stack projects.</p>
          <div className="contact-links">
            <a className="button primary" href="https://www.linkedin.com/in/sutha-thongkong" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a>
            <a className="button outline" href="https://github.com/Dawinzhii" target="_blank" rel="noreferrer">View GitHub <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Sutha Thongkong</span><span>Bangkok, Thailand · ICT (UTC+7)</span><a href="#top">Back to top ↑</a></footer>
    </>
  )
}

export default App
