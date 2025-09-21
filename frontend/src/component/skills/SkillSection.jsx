import "./SkillSection.css";
// import { SiReact,  } from "../../utils/icon";

import {FaHtml5, FaCss3Alt,TbBrandJavascript ,FaReact, FaJava, FaNodeJs,SiExpress,FaAngular,DiMongodb, FaFlutter, DiMysql, SiSpringboot, TbBrandSocketIo} from '../../utils/icon';

export default function SkillSection() {
  return (
    <section id="skills" className="skill-section">
      <div className="skill-section-div">
        <h2 className="skill-section-heading">Skills</h2>
        <p className="skill-section-para">
          Here are the technologies and tools I work with.
        </p>

        <div className="skill-grid">
          <div>
            <FaHtml5 color="#E44D26" title="HTML" style={{fontSize:60}}/>
            <p>HTML</p>
          </div>

          <div>
            <FaCss3Alt color="#1572B6" title="CSS" style={{fontSize:60}}/>
            <p>CSS</p>
          </div>
          <div>
            <TbBrandJavascript color="#F7DF1E" title="JavaScript" style={{fontSize:60}}/>
            <p>JavaScript</p>
          </div>
          <div>
              <FaReact color="#61DAFB" style={{fontSize:60}}/>
            <p>React</p>
          </div>
          <div>
            <FaAngular color="#DD0031" title="Angular" style={{fontSize:60}}/>
            <p>Angular</p>
          </div>

          <div>
            <FaNodeJs color="#68A063" title="Node.js" style={{fontSize:60}}/>
            <p>Node.js</p>
          </div>
          <div>
            <SiExpress color="#000" title="Express.js" style={{fontSize:60}}/>
            <p>Express</p>
          </div>
          <div>
            <FaJava color="#007396" title="Java" style={{fontSize:60}}/>
            <p>Java (Spring Boot)</p>
          </div>
          <div>
            <FaFlutter color="#02569B" title="Flutter"  style={{fontSize:60}}/>
            <p>Flutter</p>
          </div>
          <div>
            <FaReact color="#61DAFB" title="React Native" style={{fontSize:60}} />
            <p>React Native</p>
          </div>

          <div>
            <DiMysql color="#00758F" title="SQL" style={{fontSize:60}}/>
            <p>MySQL</p>
          </div>
          <div>
            <DiMongodb color="#47A248" title="MongoDB" style={{fontSize:60}}/>
            <p>MongoDB</p>
          </div>

          <div>
            <TbBrandSocketIo color="#010101" title="Socket.IO" style={{fontSize:60}}/>
            <p>Socket.io</p>
          </div>
          <div>
            <SiSpringboot color="#6DB33F" title="Spring Boot" style={{fontSize:60}}/>
            <p>Spring-boot</p>
          </div>
        </div>
      </div>
    </section>
  );
}
