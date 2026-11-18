import Icon from './Icon.jsx'

function Education() {
  return (
    <section className="section" id="education">
      <div className="container education-layout">
        <div className="section-heading">
          <p className="eyebrow">EDUCATION</p>
          <h2>A foundation in computer science.</h2>
          <p className="section-intro">
            The knowledge and problem-solving skills that started my journey
            into software development.
          </p>
        </div>

        <article className="education-card">
          <div className="education-icon"><Icon name="check" size={22} /></div>
          <div className="education-details">
            <p className="eyebrow">BACHELOR&apos;S DEGREE</p>
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p>
              An academic foundation in computing, programming, and the
              fundamentals of software development.
            </p>
            <span className="education-status">
              <span className="status-dot" /> Fresher
            </span>
          </div>
          <span className="education-decoration" aria-hidden="true">CS</span>
        </article>
      </div>
    </section>
  )
}

export default Education
