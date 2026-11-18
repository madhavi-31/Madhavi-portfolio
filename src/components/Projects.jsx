import { projects } from '../data/portfolio.js'
import Icon from './Icon.jsx'

function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="container">
        <div className="projects-heading">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects that put learning into practice.</h2>
          </div>
          <p className="projects-intro">
            A selection of frontend and machine-learning projects I&apos;ve
            worked on. Each one has taught me something new.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className={`project-art project-art-${project.number}`}>
                <span className="project-art-number">{project.number}</span>
                <span className="project-art-shape" aria-hidden="true" />
                <span className="project-art-label">{project.subtitle}</span>
              </div>
              <div className="project-content">
                <div className="project-title-row">
                  <div>
                    <p className="project-kicker">{project.subtitle}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <span className="project-index">{project.number}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Icon name="github" size={16} /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live demo <Icon name="arrow" size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="placeholder-note">
          Mobile Price Range Classification links still need to be added in{' '}
          <code>src/data/portfolio.js</code>.
        </p>
      </div>
    </section>
  )
}

export default Projects
