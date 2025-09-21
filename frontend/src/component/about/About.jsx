import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-right-heading">About Me</h2>

      <div className="about-div">
        <div className="about-right-div">
          <p className="about-right-para">
            Hi, I m <strong>Abhay Singh Rathore</strong>, a passionate{" "}
            <strong>Full Stack Developer</strong> who loves creating modern and
            user-friendly applications for web and mobile platforms.
          </p>
          <p className="about-right-para2">
            I hold a <strong>Bachelor of Computer Applications (BCA)</strong>{" "}
            from Sobhasaria Group of Institutions, Sikar, scoring{" "}
            <strong>75%</strong>. I specialize in{" "}
            <strong>React, Node.js, Express, MongoDB, Flutter</strong>, and also
            have experience with{" "}
            <strong>Java (Spring Boot), PHP, and MySQL</strong>.
          </p>
          <p className="about-right-para3">
            My goal is to work on innovative projects that make a real impact
            and help businesses grow. I am always eager to learn new
            technologies and stay updated with the latest trends.
          </p>
        </div>

        <div className="img-div">
          <img
            loading="lazy"
            className="dev-img"
              src='https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755190796/portfolia/about_image_csr6kq.jpg'
            alt="about_image"
          />
        </div>
      </div>
    </section>
  );
}
