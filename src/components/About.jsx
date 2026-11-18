import { portfolio } from '../data/portfolio.js'

function About() {
  return (
    <section className="section section-muted" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Building a strong foundation for what&apos;s next.</h2>
          <p className="section-intro">
            I&apos;m {portfolio.name}, a Computer Science and Engineering
            graduate at the beginning of my software development journey.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I enjoy creating approachable web experiences and learning how
              the details behind them fit together. I&apos;ve been building my
              skills across frontend development, programming, and databases
              through coursework and personal projects.
            </p>
            <p>
              As a fresher, I bring curiosity, a thoughtful approach to
              problem-solving, and a genuine willingness to learn. I&apos;m
              looking forward to contributing to a team, growing as a
              developer, and turning new challenges into opportunities.
            </p>
          </div>
          <div className="about-note">
            <span className="note-number">01</span>
            <div>
              <h3>How I like to work</h3>
              <p>
                Start with the fundamentals, keep the code understandable, and
                make every detail useful to the person using it.
              </p>
            </div>
            <span className="note-line" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
