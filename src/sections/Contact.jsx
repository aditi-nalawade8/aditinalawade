import "../styles/contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <p className="contact-label">CONTACT ME</p>

        <h2 className="contact-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-wrapper">

          <div className="contact-left">

            <form
              action="https://formsubmit.co/nalawadeaditi8@gmail.com"
              method="POST"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173"
              />

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

          <div className="contact-right">

            <div className="info-card">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>nalawadeaditi8@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 99223 28572</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>Pune, Maharashtra</p>
              </div>
            </div>

            <div className="social-contact">

              <a
                href="https://github.com/aditinalawade02"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aditinalawade/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;