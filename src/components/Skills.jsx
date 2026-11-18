import { skillGroups } from '../data/portfolio.js'
import Icon from './Icon.jsx'

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>Skills I&apos;m growing every day.</h2>
          <p className="section-intro">
            A practical foundation in the technologies and tools I use to
            learn, build, and share my work.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-top">
                <span className="skill-index">0{index + 1}</span>
                <Icon name="arrow" size={18} />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="skill-tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
