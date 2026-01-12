import { useEffect } from "react";

function About() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById("imageReveal");
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section id="about">
      <div className="section-header">
        <h2>
          Why <span className="brand-highlight">NeXLet</span>?
        </h2>
        <p className="section-divider"></p>
      </div>



         <div class="brand-strip">
  <div class="brand">
    <span class="logo bold">UI</span><span class="logo thin">deck</span>
  </div>

  <div class="brand">
    <i class="fa-solid fa-grid-2"></i>
    <span>TailGrids</span>
  </div>

  <div class="brand">
    <i class="fa-solid fa-infinity"></i>
    <span>Lineicons</span>
  </div>

  <div class="brand">
    <i class="fa-solid fa-circle-half-stroke"></i>
    <span class="bold">Ayro UI</span>
  </div>

  <div class="brand">
    <i class="fa-solid fa-layer-group"></i>
    <span>PlainAdmin</span>
  </div>
</div>

      <div className="about-content">
        <p>
          <strong>NeXLet</strong> is a modern web development studio focused on building
          <span className="highlight">
            fast, responsive, and visually striking websites
          </span>
          for businesses, brands, and creators.
        </p>

        <p>
          We believe a website is more than just an online presence — it is a
          <span className="highlight"> digital experience</span> that represents your
          brand's identity, values, and vision.
        </p>

        <p>
          At <strong>NeXLet</strong>, every project is crafted with attention to detail,
          clean design, smooth interactions, and performance-first development.
        </p>
      </div>

      <div className="image-wrapper" id="imageReveal">
        <div className="image-track">
          <img src="https://static.wixstatic.com/media/7543c9_8b5ef1eb5e884ef2bcd8742bca552b75~mv2.jpg" alt="Web design portfolio" />
          <img src="https://evisionthemes.com/wp-content/uploads/edd/2017/11/bizplus-free-responsive.png" alt="Responsive design" />
          <img src="https://img.freepik.com/premium-photo/dark-mode-ui-design-mobile-app_1179475-25350.jpg" alt="UI design" />
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/879478202903301.668e1baab3185.jpg" alt="Modern web design" />
          <img src="https://tse3.mm.bing.net/th/id/OIP.oHPY03rIz307qjPxjt9r9gHaDg" alt="Web development" />
        </div>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="card-icon">⚡</div>
          <div className="card-content">
            <h3>High Performance</h3>
            <p1>Lightning-fast loading speeds</p1>
          </div>
        </div>

        <div className="about-card">
          <div className="card-icon">📱</div>
          <div className="card-content">
            <h3>Fully Responsive</h3>
            <p1>Perfect on all devices</p1>
          </div>
        </div>

        <div className="about-card">
          <div className="card-icon">🎨</div>
          <div className="card-content">
            <h3>Modern UI/UX</h3>
            <p1>Beautiful & intuitive design</p1>
          </div>
        </div>

        <div className="about-card">
          <div className="card-icon">🚀</div>
          <div className="card-content">
            <h3>Scalable Solutions</h3>
            <p1>Grows with your business</p1>
          </div>
        </div>
      </div>

      <p className="about-end">
        Our goal is to help brands{" "}
        <span className="highlight">stand out, grow, and succeed online</span>.
      </p>
    </section>
  );
}

export default About;
