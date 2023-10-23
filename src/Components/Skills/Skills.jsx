import "./Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoSass,
} from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

function Skills() {
  return (
    <>
      <section id="skills">
        <h2 className="skill-title">Skills</h2>
        <div className="skills">
          <div className="boxes">
            <AiFillHtml5 className="icon" />
          </div>

          <div className="boxes">
            <BiLogoCss3 className="icon" />
          </div>

          <div className="boxes">
            <BiLogoJavascript className="icon" />
          </div>
          <div className="boxes">
            <BiLogoReact className="icon" />
          </div>
          <div className="boxes">
            <FaNodeJs className="icon" />
          </div>
          <div className="boxes">
            <BiLogoSass className="icon" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
