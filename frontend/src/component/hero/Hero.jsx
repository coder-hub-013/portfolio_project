import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hi, my name is</h1>
          <h2>Abhay Singh Rathore</h2>
          
          <p className="i-am">
            I'm a  &nbsp;
            <span className="words">
              <span className='for_margin'> Full Stack Developer</span>
              <span> Coder</span>
              <span> Programmer</span>
              <span> Developer</span>
            </span>
          </p>

          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1AvumbI4v3pxMP4atKOuRUmuktmmxXaur/view" target="_blank" className="btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://res.cloudinary.com/dw6ux0xmu/image/upload/v1758470864/portfolia/abhay_image_nknycq.jpg"
            alt="Profile"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
