import { portfolio } from '../data/portfolio.js'
import Icon from './Icon.jsx'

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-inner container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </p>
          <h1>
            Hello, I&apos;m <span>{portfolio.name}.</span>
          </h1>
          <p className="hero-role">{portfolio.role}</p>
          <p className="hero-description">
            I&apos;m a Computer Science graduate and fresher who enjoys turning
            thoughtful ideas into clear, useful web experiences. I&apos;m
            excited to keep learning and build software that makes a difference.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <Icon name="arrow" size={17} />
            </a>
            <button
              className="button button-secondary"
              type="button"
              onClick={() => window.print()}
            >
              Download resume
            </button>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <a href={portfolio.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={18} /> GitHub
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          role="img"
          aria-label="Decorative illustration of a code editor"
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="code-card">
            <div className="code-card-bar">
              <span className="window-dot dot-pink" />
              <span className="window-dot dot-yellow" />
              <span className="window-dot dot-green" />
              <span className="code-file-name">about-me.js</span>
            </div>
            <div className="code-content">
              <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {'{'}</p>
              <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">&apos;Madhavi Loya&apos;</span>,</p>
              <p><span className="code-muted">03</span> &nbsp; role: <span className="code-green">&apos;Frontend Developer&apos;</span>,</p>
              <p><span className="code-muted">04</span> &nbsp; skills: [<span className="code-green">&apos;React&apos;</span>, <span className="code-green">&apos;CSS&apos;</span>],</p>
              <p><span className="code-muted">05</span> &nbsp; learning: <span className="code-green">&apos;Every day&apos;</span>,</p>
              <p><span className="code-muted">06</span> &nbsp; openToWork: <span className="code-orange">true</span></p>
              <p><span className="code-muted">07</span> {'}'}</p>
            </div>
            <div className="code-card-footer">
              <span><span className="status-dot" /> Ready to create</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div className="floating-badge badge-top">
            <span className="badge-icon">&lt;/&gt;</span>
            <span><strong>Curious mind</strong><small>Always learning</small></span>
          </div>
          <div className="floating-badge badge-bottom">
            <span className="badge-spark">✦</span>
            <span><strong>Built with care</strong><small>One line at a time</small></span>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about me">
        <span /> Scroll to explore
      </a>
    </section>
  )
}

export default Hero
