import { useState, type FormEvent } from 'react'
import { profile } from '../data'
import SectionHead from './SectionHead'

function Contact() {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead kicker="05 — Contact" title="Let's work together" />
        <div className="contact-grid">
          <div className="reveal">
            <p className="lead">
              I'm currently looking for opportunities as a junior full-stack / back-end developer
              or QA engineer. Have a role or project in mind? I'd love to hear from you.
            </p>
            <ul className="contact-list">
              <li>
                <span className="contact-icon">✉</span>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">☏</span>
                <div>
                  <small>Phone</small>
                  <a href={profile.phoneHref}>{profile.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">⌖</span>
                <div>
                  <small>Location</small>
                  <span>{profile.location}</span>
                </div>
              </li>
            </ul>
          </div>
          <form className="card contact-form reveal" onSubmit={onSubmit}>
            <label>
              Your name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              Subject
              <input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Send message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
