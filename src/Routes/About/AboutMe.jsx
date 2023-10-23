import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="mini-card"></div>
      <h2 className="about-title">About Me</h2>
      <p className="aboutme">
        {" "}
        I have worked in various sectors of the market that have allowed me to
        grow significantly. Since I arrived in Portugal and started to
        understand and study programming, I have begun to develop a passion for
        the field and what it offers as a lifestyle. Guided by several
        professionals in the field working with HTML, CSS, Javascript, React,
        Typescript and Backend with differents libraries. I chose to pursue the
        Front end area at the beginning of my career out of pure identification,
        but as time goes by I want to specialize to become Full Stack Developer.
        I developed some projects as a freelancer and now I am looking for a
        company to develop me and help our projects. I had the opportunity to
        live in England where I developed some characteristics of my current
        personality in addition to my English and even Spanish. I like to be in
        control of what I’m doing, so I dedicate myself a lot to learn. Always
        looking to learn and evolve. That´s why I open to learn any framework.{" "}
      </p>{" "}
      <h2 className="before">Before</h2>
      {/* <div className="curriculum">
        <p className="cv-title">Night Audit</p>
        <div className="line line3"></div>
        <p className="where">Eurostars Porto</p>
      </div>
      <div className="curriculum">
        <p className="cv-title">Assistant Football Coach</p>
        <div className="line line3"></div>
        <p className="where">Cabofriense</p>
      </div>
      <div className="curriculum">
        <p className="cv-title">Football Professor</p>
        <div className="line line3"></div>
        <p className="where">Inter Milan Academy Brazil</p>
      </div>
      <div className="curriculum">
        <p className="cv-title">Owner</p>
        <div className="line line3"></div>
        <p className="where">High Tea Ltda.</p>
      </div>
      <div className="curriculum">
        <p className="cv-title">Editor and Screenwriter</p>
        <div className="line line3"></div>
        <p className="where">Joga nas Onze</p>
      </div>
      <div className="curriculum">
        <p className="cv-title"> Audiovisual Producer</p>
        <div className="line line3"></div>
        <p className="where">MEDGRUPO</p>
      </div>
      <div className="curriculum">
        <p className="cv-title">Administrative Assistant</p>
        <div className="line line3"></div>
        <p className="where">A&F Intermediação de Negócios</p>
      </div> */}
      <div className="portfolio-container">
        <div className="portfolio-left">
          <p>Night Audit</p>
        </div>
        <div className="line line3">Apr 2023 - Sep 2023</div>
        <div className="portfolio-right">
          <p>Eurostars Porto</p>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-left">
          <p>Assistant Football Coach</p>
        </div>
        <div className="line line3">Apr 2022 - Aug 2022</div>
        <div className="portfolio-right">
          <p>Associação Desportiva Cabofriense</p>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-left">
          <p>Football Professor</p>
        </div>
        <div className="line line3">Jan 2022 - Aug 2022</div>
        <div className="portfolio-right">
          <p>Inter Milan Academy Brazil</p>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-left">
          <p>Owner</p>
        </div>
        <div className="line line3">Jan 2018 - Apr 2020</div>
        <div className="portfolio-right">
          <p>High Tea Ltda.</p>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-left">
          <p>Editor and Screenwriter</p>
        </div>
        <div className="line line3">Jan 2017 - Dec 2017</div>
        <div className="portfolio-right">
          <p>Joga nas Onze</p>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-left">
          <p>Audiovisual Producer</p>
        </div>
        <div className="line line3">Aug 2016 - Dec 2016</div>
        <div className="portfolio-right">
          <p>MEDGRUPO</p>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-left">
          <p>Administrative Assistant</p>
        </div>
        <div className="line line3">Mar 2013 - Dec 2015</div>
        <div className="portfolio-right">
          <p>A&F Intermediações de Negócios</p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
