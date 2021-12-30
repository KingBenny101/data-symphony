import "../css/About.css";
import Markdown from "markdown-to-jsx";
import { useState} from "react";
import "../markdown/about.md";

function About() {
  const file_name = require("../markdown/about.md");
  const [post, setPost] = useState("");

  fetch(file_name)
    .then((res) => res.text())
    .then((res) => setPost(res))
    .catch((err) => console.log(err));

  return (
    <div className="aboutContainer">
      <div className="aboutTitleContainer">
        <div className="aboutTitle">
          <span>About</span>
        </div>
      </div>
      <div className="aboutBodyContainer">
        <Markdown >{post}</Markdown>
      </div>
    </div>
  );
}

export default About;
