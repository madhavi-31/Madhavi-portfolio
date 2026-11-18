import { portfolio } from '../data/portfolio.js'
import Icon from './Icon.jsx'

function Contact() {
  function sendMessage(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    const body = `From: ${name} (${email})\n\n${message}`
    const mailtoLink = `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <section className="section section-muted contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>Have an opportunity or an idea?</h2>
          <p className="contact-intro">
            I&apos;m excited to connect with recruiters, teams, and fellow
            developers. Send a note and let&apos;s start a conversation.
          </p>
          <div className="contact-methods">
            <a className="contact-method" href={`mailto:${portfolio.email}`}>
              <span className="contact-method-icon"><Icon name="mail" /></span>
              <span><small>Email me</small><strong>{portfolio.email}</strong></span>
              <Icon name="arrow" size={17} />
            </a>
            <a className="contact-method" href={`tel:${portfolio.phone.replace(/\s/g, '')}`}>
              <span className="contact-method-icon"><Icon name="phone" /></span>
              <span><small>Call me</small><strong>{portfolio.phone}</strong></span>
              <Icon name="arrow" size={17} />
            </a>
            <div className="contact-method">
              <span className="contact-method-icon"><Icon name="mapPin" /></span>
              <span><small>Based in</small><strong>{portfolio.location}</strong></span>
            </div>
            <a
              className="contact-method"
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-method-icon"><Icon name="linkedin" /></span>
              <span><small>Connect on</small><strong>LinkedIn</strong></span>
              <Icon name="arrow" size={17} />
            </a>
            <a
              className="contact-method"
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-method-icon"><Icon name="github" /></span>
              <span><small>Explore my</small><strong>GitHub</strong></span>
              <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendMessage}>
          <h3>Send me a message</h3>
          <p>Your message opens in your email app so you can review it first.</p>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                type="text"
                placeholder="Jane Smith"
                autoComplete="name"
                required
              />
            </label>
            <label>
              Your email
              <input
                name="email"
                type="email"
                placeholder="jane@example.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label>
            Subject
            <input
              name="subject"
              type="text"
              placeholder="A great opportunity"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me a little about what you have in mind..."
              required
            />
          </label>
          <button className="button button-primary form-submit" type="submit">
            Compose email <Icon name="arrow" size={17} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
