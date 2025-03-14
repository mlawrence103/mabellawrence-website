import { useState, useEffect } from 'react';
import bioPic from '../assets/bio_pic.jpg';
import rock_landscape from '../assets/rock_landscape.jpg';
import goodFood from '../assets/eating_burrito.jpg';
import cora from '../assets/cora.png';
import vzsf from '../assets/Gensler/vzsf_1.jpg';
import newhouse from '../assets/Gensler/newhouse_1.jpg';
import jrm from '../assets/Gensler/jrm_1.jpg';
import running from '../assets/running.jpg';
import resume from '../assets/Mabel_Lawrence_Resume.pdf';
import linkedin from '../assets/linkedinLogo.png';
import github from '../assets/githubLogo.png';
import { gsap } from 'gsap';
import '../styles/App.css';
import Menu from './Menu';

function App() {
  const projectPics = [vzsf, newhouse, jrm];
  const [projIdx, setProjIdx] = useState(0);
  const [nextProjIdx, setNextProjIdx] = useState(1);
  const [initRender, setInitRender] = useState(false);

  useEffect(() => {
    const currentProj = document.getElementById('landing-project-img');
    const nextProj = document.getElementById('landing-project-next-img');
    currentProj.src = projectPics[projIdx];
    nextProj.src = projectPics[nextProjIdx];
  }, []);

  useEffect(() => {
    const currentProj = document.getElementById('landing-project-img');
    const nextProj = document.getElementById('landing-project-next-img');
    setTimeout(() => {
      gsap.to('#landing-project-img', {
        opacity: 0,
        duration: 1,
      });
      setTimeout(() => {
        let newIdx;
        let nextIdx;
        if (projIdx < projectPics.length - 1) {
          newIdx = projIdx + 1;
        } else {
          newIdx = 0;
        }
        if (newIdx < projectPics.length - 1) {
          nextIdx = newIdx + 1;
        } else {
          nextIdx = 0;
        }
        setProjIdx(newIdx);
        setNextProjIdx(nextIdx);
        currentProj.src = projectPics[newIdx];
        currentProj.style.opacity = 1;
        nextProj.src = projectPics[nextIdx];
      }, 1100);
    }, 3000);
  }, [projIdx]);

  return (
    <div className="landing-page">
      <div className="banner-image">
        <img
          src={rock_landscape}
          alt="Original picture of rocky landscape"
        ></img>
        <p className="img-caption">Just a nice photo I took...</p>
      </div>
      <Menu />
      <div id="about-section" className="centered-columns">
        <img
          id="bio-pic"
          src={bioPic}
          alt="Picture of Mabel on a bridge in Bruges"
        />
        <div id="about-text">
          <h3 className="about-subtitle">Hi, I'm Mabel</h3>
          <p>
            <span className="sentence">
              I am a software engineer working to create thoughtful and
              intuitive solutions for modern audiences.
            </span>
            <span className="sentence">
              As a software developer with a background in mechanical
              engineering and set design, I enjoy problem solving everything
              from how to optimize code for an application to how to construct
              an interactive prototype for a museum.
            </span>
            <span className="sentence">
              I am drawn to the interaction between technology and design and
              have had the opportunity to explore this intersection working
              across industries including theater, retail, museums, and
              universities.
            </span>
          </p>
        </div>
      </div>
      <div id="professional-section" className="centered-columns">
        <div id="contact-section">
          <div id="contact-info">
            <div id="contact-logos" className="flex-row">
              <a href="https://www.linkedin.com/in/mabellawrence/">
                <img src={linkedin} alt="linkedin logo" />
              </a>
              <a href="https://github.com/mlawrence103">
                <img src={github} alt="github logo" />
              </a>
            </div>
            <div id="landing-email">
              <p className="contact-title">Email: </p>
              <a href="mabelmail3@gmail.com">mabelmail3@gmail.com</a>
            </div>
          </div>
        </div>
        <div>
          <a href={resume} target="blank" id="resume-link">
            Download Resume
          </a>
        </div>
      </div>
      <div id="landing-project" className="pos-abs landing-project-pic">
        <img id="landing-project-img" className="black-and-white" />
      </div>
      <div id="landing-project-next" className="landing-project-pic">
        <img id="landing-project-next-img" className="black-and-white" />
      </div>
      <p className="pos-abs landing-proj-caption">Photos courtesy of Gensler</p>
      <div id="happy-things-wrapper">
        <h4>Some Things That Make Me Happy</h4>
        <div id="happy-things-list">
          <div className="happy-thing">
            <h5>Good Food</h5>
            <p className="things-i-like-description">
              <span className="sentence">
                I will admit to planning a lot of my days around my meals and
                snacks.
              </span>
              <span className="sentence">
                I am up for trying anything, but my favorites usually involve
                some form of rice (agnostic of cuisine or classiness), be that
                risotto, a burrito bowl, or grocery store sushi.
              </span>
            </p>
            <img
              src={goodFood}
              alt="Mabel happily eating a burrito while sitting on the sidewalk"
            />
          </div>
          <div className="happy-thing">
            <h5>My Dog</h5>
            <p className="things-i-like-description">
              <span className="sentence">
                I adopted Cora, in 2020 to fill the dog-shaped hole in my life,
                and I will debate anyone who says she is a just pandemic puppy
              </span>
              <span className="sentence">
                She will do just about anything for treats, and I will just
                about anything for her.
              </span>
              <span className="sentence">Cora gets a lot of treats.</span>
            </p>
            <img
              src={cora}
              alt="Mabel's dog cora smiling in the park in front of her ball"
            />
          </div>
          <div className="happy-thing">
            <h5>Adventuring</h5>
            <p className="things-i-like-description">
              <span className="sentence">
                I love doing things in nature - backpacking, hiking, rock
                climbing - but living in New York City makes that a little
                harder, so I jumped (jogged?) into the local running scene and
                hope to one day run the 6 marathon majors.
              </span>
            </p>
            <img
              src={running}
              alt="Mabel smiling as she nears the finish for the 2022 New York City Marathon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
