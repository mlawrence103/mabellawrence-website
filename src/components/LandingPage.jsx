import { useState } from 'react';
import bioPic from '../assets/bio_pic.jpg';
import rock_landscape from '../assets/rock_landscape.jpg';
import goodFood from '../assets/eating_burrito.jpg';
import cora from '../assets/cora_w_ball.png';
import running from '../assets/running.jpg';
import '../styles/App.css';
import linkedin from '../assets/linkedinLogo.png';
import github from '../assets/githubLogo.png';
import Menu from './Menu';

function App() {
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
      <div id="about-section">
        <img
          id="bio-pic"
          src={bioPic}
          alt="Picture of Mabel on a bridge in Bruges"
        />
        <div id="about-text">
          <h3 className="about-subtitle">Hi, I'm Mabel</h3>
          <p>
            <span className="sentence">
              I am a software engineer working to create interesting and
              accessible solutions for modern audiences.
            </span>
            <span className="sentence">
              My background is in mechanical engineering and theatrical design.
            </span>
            <span className="sentence">
              As a creative technologist, I enjoy problem solving everything
              from how to optimize code for an application to how to construct
              an interactive prototype for a museum.
            </span>
          </p>
        </div>
      </div>
      <div id="contact-section">
        <h4 id="contact-title">The Professional Links</h4>
        <div id="contact-info">
          <div id="contact-logos">
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
                ran my first half and full marathons in 2022.
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
