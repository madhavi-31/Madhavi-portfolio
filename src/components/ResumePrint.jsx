import { portfolio, skillGroups, projects } from '../data/portfolio.js'

function ResumePrint() {
  return (
    <article className="resume-print">
      <header className="resume-header">
        <h1>{portfolio.name}</h1>
        <p>{portfolio.role}</p>
        <p>
          {portfolio.email} · {portfolio.phone} · {portfolio.location}
        </p>
        <p>
          LinkedIn: {portfolio.linkedin} · GitHub: {portfolio.github}
        </p>
      </header>

      <section>
        <h2>Profile</h2>
        <p>
          Computer Science and Engineering graduate and fresher interested in
          frontend and software development. Enjoys learning new technologies,
          building useful web experiences, and contributing to a team.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>B.Tech in Computer Science and Engineering</strong></p>
      </section>

      <section>
        <h2>Skills</h2>
        {skillGroups.map((group) => (
          <p key={group.title}>
            <strong>{group.title}:</strong> {group.skills.join(', ')}
          </p>
        ))}
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((project) => (
          <div className="resume-project" key={project.name}>
            <p><strong>{project.name}</strong> — {project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          </div>
        ))}
      </section>
      <p className="resume-hint">
        Add your college and graduation year before sharing this resume.
      </p>
    </article>
  )
}

export default ResumePrint
