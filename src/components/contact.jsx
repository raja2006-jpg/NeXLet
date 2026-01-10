function Contact() {
  return (
    <section>

      {/* paste contact-card HTML here */
       <section id="contact" class="contact-section">
      <div class="section-header">
        <h2>Get In Touch</h2>
        <p class="section-divider"></p>
      </div>

      <h3 class="contact-subtitle-main">Let's Build Something Powerful</h3>

      <p className="contact-description">
        Have a project in mind or want to grow your online presence?
        Reach out to <strong>NeXLet</strong> and let's turn ideas into
        high-performance digital experiences.
      </p>

      <div className="contact-card">
        <a href="mailto:rajasiddharthrajasiddharth@gmail.com" className="contact-item">
          <div className="contact-icon">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="contact-info">
            <span className="contact-label">Email</span>
            <span className="contact-value">rajasiddharthrajasiddharth@gmail.com</span>
          </div>
          <div className="contact-arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/raja-siddharth-722ab7372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="contact-item">
          <div className="contact-icon">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="contact-info">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">Connect with us</span>
          </div>
          <div className="contact-arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
        </a>

        <a href="https://www.instagram.com/nexlet_solutions?igsh=aWo0Z2UwNXMyYXl3" target="_blank" className="contact-item">
          <div className="contact-icon">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="contact-info">
            <span className="contact-label">Instagram</span>
            <span className="contact-value">Follow our work</span>
          </div>
          <div className="contact-arrow">
            <i className="fas fa-arrow-right"></i>
          </div>
        </a>
      </div>

      <p className="contact-footer">
        © 2026 NeXLet — Crafting modern, responsive & scalable web solutions.
      </p>
    </section>


      
      
      }
    </section>
  );
}

export default Contact;
