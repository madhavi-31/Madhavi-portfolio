import { portfolio } from '../data/portfolio.js'
import Icon from './Icon.jsx'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#home">{portfolio.name}</a>
        <p>
          Thoughtful code. A little curiosity. A lot of learning. ·{' '}
          {portfolio.location}
        </p>
        <div className="footer-bottom">
          <span>© {currentYear} {portfolio.name}. All rights reserved.</span>
          <div className="footer-socials">
            <a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="github" size={19} />
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" size={19} />
            </a>
            <a href={`mailto:${portfolio.email}`} aria-label="Email">
              <Icon name="mail" size={19} />
            </a>
            <a href={`tel:${portfolio.phone.replace(/\s/g, '')}`} aria-label="Phone">
              <Icon name="phone" size={19} />
            </a>
          </div>
          <span className="footer-made">Made with care <Icon name="heart" size={14} /></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
