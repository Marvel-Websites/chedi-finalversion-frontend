import { useState } from 'react';
import { submitContactForm } from '@/services/contactService';
import { S3_BASE } from '@/constants/media';

const ROLE_OPTIONS = [
  'Farmer',
  'Sell your land ',
  'Lease your land',
  'Partner with us',
  'CSA Member',
  'Contract Farming',
  'Other',
];

const EMPTY_FORM = { name: '', email: '', phone: '', role: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', isError: false });

  const setField = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async () => {
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setFeedback({ message: 'Please fill in your name, email, and message.', isError: true });
      return;
    }

    setSending(true);
    setFeedback({ message: '', isError: false });

    try {
      const data = await submitContactForm({
        fullName: name,
        email,
        phone: form.phone.trim(),
        projectType: form.role,
        projectDetails: message,
      });

      if (data.success) {
        setFeedback({ message: "✓ Message sent! We'll get back to you soon.", isError: false });
        setForm(EMPTY_FORM);
      } else {
        const errMsg = data.errors ? data.errors.map((e) => e.message).join(' ') : data.message;
        setFeedback({ message: `Send Failed: ${errMsg || 'Please try again.'}`, isError: true });
      }
    } catch (err) {
      const isAbort = err.name === 'CanceledError' || err.code === 'ERR_CANCELED';
      setFeedback({
        message: `Send Failed: ${isAbort ? 'Request timed out while waiting for the email server.' : err.message || 'Could not reach the server.'}`,
        isError: true,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page active" id="page-contact">
      <div className="contact-page">
        <div className="contact-hero">
          <img src={`${S3_BASE}/chediimages2.webp`} alt="Chedi organic farm landscape" loading="lazy" />
          <div className="contact-hero-text">
            <h1>
              Let&apos;s Grow
              <br />
              <span style={{ color: 'var(--gold-light)' }}>Together</span>
            </h1>
            <p>Whether you&apos;re a farmer, landowner, investor, or community partner — we&apos;d love to hear from you.</p>
          </div>
        </div>
        <div className="contact-body">
          <div>
            <h2>Get in Touch</h2>
            <p>
              Reach out to us for any inquiries about farming partnerships, land programs, CSA memberships, or
              investment opportunities.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p>support@chedi.in</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 94441 26240</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="contact-map-img">
              <img src={`${S3_BASE.replace('/extraimages', '/images')}/african-people-harvesting-vegetables.webp`} alt="Farm" loading="lazy" />
            </div>
            <div style={{ marginTop: 22 }}>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 13 }}>
                FOLLOW US
              </div>
              <div className="social-icons">
                <div className="social-icon" style={{ background: 'var(--beige)', color: 'var(--green-dark)' }}>𝕏</div>
                <div className="social-icon" style={{ background: 'var(--beige)', color: 'var(--green-dark)' }}>in</div>
                <div className="social-icon" style={{ background: 'var(--beige)', color: 'var(--green-dark)' }}>f</div>
                <div className="social-icon" style={{ background: 'var(--beige)', color: 'var(--green-dark)' }}>▶</div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <div className="form-group">
              <label htmlFor="cf-name">Full Name</label>
              <input id="cf-name" type="text" placeholder="Your full name" value={form.name} onChange={setField('name')} />
            </div>
            <div className="form-group">
              <label htmlFor="cf-email">Email Address</label>
              <input id="cf-email" type="email" placeholder="your@email.com" value={form.email} onChange={setField('email')} />
            </div>
            <div className="form-group">
              <label htmlFor="cf-phone">Phone Number</label>
              <input id="cf-phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={setField('phone')} />
            </div>
            <div className="form-group">
              <label htmlFor="cf-role">I am a...</label>
              <select id="cf-role" value={form.role} onChange={setField('role')}>
                <option value="">Select your role</option>
                {ROLE_OPTIONS.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" placeholder="How can we help you?" value={form.message} onChange={setField('message')} />
            </div>
            <button
              id="cf-submit"
              className="btn btn-gold"
              style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: 15 }}
              onClick={handleSubmit}
              disabled={sending}
            >
              {sending ? 'Sending…' : 'Send Message →'}
            </button>
            <div
              id="cf-feedback"
              style={{
                marginTop: 12,
                fontSize: 14,
                fontWeight: 500,
                minHeight: 20,
                textAlign: 'center',
                color: feedback.isError ? '#c0392b' : '#2d6a4f',
              }}
            >
              {feedback.message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
