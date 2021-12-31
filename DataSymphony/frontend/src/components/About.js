import "../css/About.css";

function About() {
  return (
    <div className="aboutContainer">
      {/* <div className="aboutTitleContainer">
        <div className="aboutTitle">
          <span>About</span>
        </div>
      </div> */}
      <div className="aboutBodyContainer">
        <div className="aboutBodyColumn">
          <div className="aboutBodyColumnTitle">
            Purpose
          </div>
          <div className="aboutBodyColumnBody">
            <span>Made for MTX Hackathon 2021</span>
            
          </div>
        </div>
        <div className="aboutBodyColumn">
          <div className="aboutBodyColumnTitle">Developed By</div>
          <div className="aboutBodyColumnBody">
            <span>Team Data Symphony</span>
          </div>
        </div>
        <div className="aboutBodyColumn">
          <div className="aboutBodyColumnTitle">Contact</div>

          <div className="aboutBodyColumnBody">
            <span>blah blah blah</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
